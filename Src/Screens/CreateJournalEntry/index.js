import moment from "moment";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Linking,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import Loader from "../../Components/Loader";
import {
  createTrackerEntryAction,
  editTrackerEntryAction,
  getTrackerALLEntryAction,
} from "../../Redux/Actions/TrackerActions";
import { showmessage } from "../../Support/Validations";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import ImagePickerModal from "../../Components/ImagePickerModal";
import { useEffect } from "react";
import Constants from "expo-constants";
import * as IntentLauncher from "expo-intent-launcher";
import * as Permissions from "expo-permissions";
const { height, width } = Dimensions.get("window");
const pkg = Constants.manifest.releaseChannel
  ? Constants.manifest.android.package
  : "host.exp.exponent";

const dropDownoption = [
  { id: 0, feeling: "good", title: "Good" },
  { id: 1, feeling: "bad", title: "Bad" },
  { id: 2, feeling: "ok", title: "Ok" },
];
const CreateJournalEntry = (props) => {
  const id = props?.route?.params?.item?.id;
  const [dropDrownOpen, setDropDrownOpen] = useState(false);
  const [imagePickerModal, setImagePickerModal] = useState(false);
  const [photo, setPhoto] = useState(
    props?.route?.params?.item?.image ||
      props?.route?.params?.item?.attributes?.image ||
      null
  );
  const [felling, setFelling] = useState(
    props?.route?.params?.item?.text ||
      props?.route?.params?.item?.attributes?.feeling ||
      "good"
  );
  const [description, setDescription] = useState(
    props?.route?.params?.item?.subText ||
      props?.route?.params?.item?.attributes?.description ||
      ""
  );
  useEffect(() => {
    if (!id) {
      setPhoto(null);
      setFelling("good");
      setDescription("");
    }
    const unsubscribe = props.navigation.addListener("blur", () => {
      console.log(
        "TrackerState?.selectedDate----> on back press",
        TrackerState?.selectedDate
      );
      const selectedDateMonth = moment(TrackerState?.selectedDate).get("M") + 1;
      const selectedDateYear = moment(TrackerState?.selectedDate).get("Y");
      const NoOfdaysInSelectedMonth = moment(
        TrackerState?.selectedDate
      ).daysInMonth();
      const startDate = moment(
        selectedDateMonth + "/" + "01/" + selectedDateYear
      );
      const endDate = moment(
        selectedDateMonth +
          "/" +
          NoOfdaysInSelectedMonth +
          "/" +
          selectedDateYear
      );
      dispatch(
        getTrackerALLEntryAction(
          {
            startDate: moment(startDate).format("YYYY-MM-DD"),
            endDate: moment(endDate).format("YYYY-MM-DD"),
            selectedDate: TrackerState?.selectedDate,
          },
          props.navigation
        )
      );
    });
    return unsubscribe;
  }, []);
  const dispatch = useDispatch();
  const TrackerState = useSelector((state) => state.TrackerReducer);
  const createEntry = () => {
    const des = description?.trim();
    if (des.length > 2) {
      var data = new FormData();
      data.append(
        "entry_date",
        moment(TrackerState?.selectedDate).format("YYYY-MM-DD")
      );
      data.append("description", des);
      data.append("feeling", felling);
      photo &&
        data.append("photo", {
          type: "image/jpg",
          uri: photo,
          name: Math.random() * 100000000000000000 + ".jpg",
        });
      dispatch(
        createTrackerEntryAction(
          { formData: data, selectedDate: TrackerState?.selectedDate },
          props.navigation
        )
      );
    } else if (des.length > 0) {
      showmessage("Skin condition sholud be at least 3 characters long");
    } else {
      showmessage("Please enter about your day and skin condition");
    }
  };
  const updateEntry = () => {
    const des = description?.trim();
    if (des.length > 2) {
      var data = new FormData();

      data.append("description", des);
      data.append("feeling", felling);
      photo &&
        data.append("photo", {
          type: "image/jpg",
          uri: photo,
          name: Math.random() * 100000000000000000 + ".jpg",
        });
      dispatch(
        editTrackerEntryAction(
          {
            formData: data,
            id: id,
            selectedDate:
              props?.route?.params?.item?.date ||
              props?.route?.params?.item?.attributes?.entry_date,
          },
          props.navigation
        )
      );
    } else if (des.length > 0) {
      showmessage("Skin condition sholud be at least 3 characters long");
    } else {
      showmessage("Please enter about your day and skin condition");
    }
  };

  const openGallery = async () => {
    setImagePickerModal(false);

    setTimeout(async () => {
      // Ask the user for the permission to access the media library
      const permissionResult =
        Platform.OS == "ios"
          ? await ImagePicker.requestMediaLibraryPermissionsAsync(
              Permissions.MEDIA_LIBRARY
            )
          : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        Alert.alert(
          "",
          "Please enable the library permission from the settings",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Ok",
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL("app-settings:");
                } else {
                  IntentLauncher.startActivityAsync(
                    IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
                    { data: "package:" + pkg }
                  );
                }
              },
            },
          ]
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setPhoto(result.uri);
      }
    }, 300);
  };

  const openCamera = async () => {
    setImagePickerModal(false);
    setTimeout(async () => {
      // Ask the user for the permission to access the camera
      const permissionResult = (Platform.OS = "ios"
        ? await ImagePicker.requestCameraPermissionsAsync(Permissions.CAMERA)
        : await ImagePicker.requestCameraPermissionsAsync());

      if (permissionResult.granted === false) {
        Alert.alert(
          "",
          "Please enable the camera permission from the settings",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Ok",
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL("app-settings:");
                } else {
                  IntentLauncher.startActivityAsync(
                    IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
                    { data: "package:" + pkg }
                  );
                }
              },
            },
          ]
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync();

      if (!result.cancelled) {
        setPhoto(result.uri);
      }
    }, 300);
  };

  const mainView = () => (
    <View style={styles.container}>
      <Text style={styles.infoText}>{AppConstants.HowFeelingToday}</Text>
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setDropDrownOpen(!dropDrownOpen)}
        >
          <View
            style={[
              styles.dropDown,
              {
                borderBottomLeftRadius: dropDrownOpen ? 0 : 10,
                borderBottomRightRadius: dropDrownOpen ? 0 : 10,
              },
            ]}
          >
            <Text style={styles.dropDownText}>
              {felling.charAt(0).toUpperCase() + felling.slice(1)}
            </Text>
            <Image
              source={AppImages.dropdownicon}
              style={styles.dropDownImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {/* <TextInput
          multiline
          maxLength={500}
          placeholder={AppConstants.typeYourJournalEntryHere}
          style={styles.input}
          selectionColor={AppColors.black}
          defaultValue={description}
          onChangeText={(text) => setDescription(text)}
        /> */}
        <View style={styles.inputBox}>
          <TextInput
            multiline
            maxLength={500}
            defaultValue={description}
            selectionColor={AppColors.main}
            placeholder={AppConstants.typeYourJournalEntryHere}
            style={styles.input}
            autoCapitalize="sentences"
            // keyboardType="ascii-capable"
            // returnKeyType="done"
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        {/* <Image
          source={AppImages.mike}
          style={styles.mikeImage}
          resizeMode="contain"
        /> */}
      </View>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => setImagePickerModal(true)}
      >
        <View style={styles.uploadImageContainer}>
          {photo ? (
            <Image
              source={{ uri: photo }}
              style={styles.uploadImageContainer}
            />
          ) : (
            <>
              <Image
                source={AppImages.greenCameraIcon}
                style={styles.cameraIcon}
              />
              <Text style={styles.cameraText}>
                {AppConstants.uploadTakePhoto}
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      <FullButton
        disabled={TrackerState?.onLoad}
        title={id ? "Update Journal Entry" : "Create Journal Entry"}
        customStyles={styles.button}
        onPress={() => (id ? updateEntry() : createEntry())}
      />
      {dropDrownOpen && (
        <View
          style={{
            position: "absolute",
            top: height > 800 ? responsiveHeight(13) : responsiveHeight(14),
            // height:
            //   height > 800 ? responsiveHeight(16.8) : responsiveHeight(20.5),
            backgroundColor: "#F0F9F7",
            width: "90%",
            alignSelf: "center",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            zIndex: 99999,
            // borderTopWidth: 0.2,
            // paddingHorizontal: responsiveWidth(8),
            // display: "none",
          }}
        >
          {dropDownoption.map((item) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setDropDrownOpen(false);
                  setFelling(item.feeling);
                }}
                key={item.id}
              >
                <View
                  key={item.id}
                  style={{
                    paddingVertical: responsiveWidth(3.5),
                    borderTopWidth: 0.25,
                    borderColor: AppColors.mediumGrey,
                    paddingHorizontal: responsiveWidth(8),
                  }}
                >
                  <Text style={styles.dropDownText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
  const renderView = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <CurvedHeader
          title={id ? "Update Journal Entry" : "Create Journal Entry"}
          leftIcon={AppImages.backIcon}
          leftPress={() => {
            props.navigation.goBack();
          }}
        />
        <Loader load={TrackerState.onLoad} />
        <ImagePickerModal
          load={imagePickerModal}
          onClose={() => {
            setImagePickerModal(false);
          }}
          openCamera={() => openCamera()}
          openGallery={() => openGallery()}
        />
        <ScrollView
          bounces={false}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          onScrollBeginDrag={() => {
            Keyboard.dismiss();
            // setDropDrownOpen(false);
          }}
        >
          <TouchableWithoutFeedback onPress={() => setDropDrownOpen(false)}>
            {mainView()}
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  };
  return Platform.OS == "ios" ? (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      {renderView()}
    </KeyboardAvoidingView>
  ) : (
    renderView()
  );
};

export default CreateJournalEntry;
