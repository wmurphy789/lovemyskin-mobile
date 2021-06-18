import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Linking,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import { SimpleInput } from "../../Components/Input/Input";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import {
  getProfileAction,
  updateProfileImageAction,
  updatetProfileAction,
} from "../../Redux/Actions/ProfileActions";
import {
  formikValidationProfile,
  showmessage,
} from "../../Support/Validations";
import * as ImagePicker from "expo-image-picker";
import ImagePickerModal from "../../Components/ImagePickerModal";
import { AppColors } from "../../Theme/AppColors";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import Constants from "expo-constants";
import * as IntentLauncher from "expo-intent-launcher";
import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import * as Permissions from "expo-permissions";
import Loader from "../../Components/Loader";

const pkg = Constants.manifest.releaseChannel
  ? Constants.manifest.android.package
  : "host.exp.exponent";

const EditProfile = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [loadingImage, setLoadingImage] = useState(false);

  // let userData = route?.params?.userData
  // let UserName = userData.name
  const profileState = useSelector((state) => state?.ProfileReducer);

  const [fName, setFName] = useState(
    profileState?.userProfileData?.first_name || ""
  );
  const [lName, setLName] = useState(
    profileState?.userProfileData?.last_name || ""
  );
  const [userId, setUserId] = useState(
    profileState?.userProfileData?.username || ""
  );
  const [userEmail, setUserEmail] = useState(
    profileState?.userProfileData?.email || ""
  );
  const [userImage, setUserImage] = useState(
    profileState?.userProfileData?.photo || null
  );
  const [ImageSet, setImage] = useState(false);
  const [imagePickerModal, setImagePickerModal] = useState(false);

  const openGallery = async () => {
    setImagePickerModal(false);
    setTimeout(async () => {
      const permissionResult =
        Platform.OS == "ios"
          ? await ImagePicker.requestMediaLibraryPermissionsAsync(
              Permissions.MEDIA_LIBRARY
            )
          : await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("permission--->>", permissionResult);
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
      // setTimeout(() => {
      // }, 600);
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setUserImage(result.uri);
        setImage(true);
        // changeProfileImage(result.uri);
      }
    }, 300);
    // Ask the user for the permission to access the media library
  };
  const openCamera = async () => {
    setImagePickerModal(false);

    setTimeout(async () => {
      // Ask the user for the permission to access the camera
      const permissionResult = (Platform.OS = "ios"
        ? await ImagePicker.requestCameraPermissionsAsync(Permissions.CAMERA)
        : await ImagePicker.requestCameraPermissionsAsync());
      console.log("permission--->>", permissionResult);
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
        setUserImage(result.uri);
        setImage(true);
        // changeProfileImage(result.uri);
      }
    }, 300);
  };
  async function saveChanges() {
    const internetStatus = await NetInfo.fetch();
    // alert(internetStatus);
    if (!internetStatus.isConnected) {
      showmessage("Please check your internet connection");
    } else {
      const data = {
        id: profileState?.id,
        fName: fName?.trim(),
        lName: lName?.trim(),
        userId: userId?.toLowerCase()?.trim(),
        photoUpdate: ImageSet ? true : false,
        navigation,
      };
      Keyboard.dismiss();
      const validate = formikValidationProfile(
        fName?.trim(),
        lName?.trim(),
        userId?.trim()
      );
      if (validate) {
        if (ImageSet) {
          changeProfileImage();
        }
        dispatch(updatetProfileAction(data));
      }
    }
  }
  function changeProfileImage() {
    const imageUrl = userImage;
    var data = new FormData();
    data.append("avatar", {
      type: "image/jpg",
      uri: imageUrl,
      name: imageUrl.slice(imageUrl.lastIndexOf("/") + 1, imageUrl.length),
    });
    dispatch(
      updateProfileImageAction({ data: data, update: true }, navigation)
    );
  }
  const mainView = () => {
    return (
      <View style={styles.container}>
        <Loader
          load={profileState?.isLoading || profileState?.isImageUpdated}
        />
        <ImagePickerModal
          load={imagePickerModal}
          onClose={() => {
            setImagePickerModal(false);
          }}
          openCamera={() => openCamera()}
          openGallery={() => openGallery()}
        />
        <CurvedHeader
          title={AppConstants.editProfile}
          leftIcon={AppImages.backIcon}
          leftPress={() => {
            Methods.goBack(navigation);
          }}
        />
        <View style={styles.container}>
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView
              bounces={false}
              keyboardShouldPersistTaps="always"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
              onScrollBeginDrag={() => {
                Keyboard.dismiss();
              }}
            >
              <View style={styles.profileImageContainer}>
                <Image
                  onLoadStart={() => {
                    setLoadingImage(true);
                  }}
                  onLoadEnd={() => {
                    setLoadingImage(false);
                  }}
                  style={styles.profileImage}
                  source={userImage ? { uri: userImage } : AppImages.userDummy}
                />
                {loadingImage && (
                  <View
                    style={{
                      position: "absolute",
                      alignSelf: "center",
                      bottom: responsiveHeight(12),
                    }}
                  >
                    <ActivityIndicator color={AppColors.main} size="small" />
                  </View>
                )}
                {!loadingImage && (
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => {
                      setImagePickerModal(true);
                    }}
                  >
                    <Image
                      source={AppImages.darkGreenEditIcon}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <SimpleInput
                placeholder="First Name"
                text={fName}
                maxLength={15}
                onChangeText={(text) => {
                  setFName(text);
                }}
                customStyles={styles.input}
              />
              <SimpleInput
                text={lName}
                maxLength={15}
                onChangeText={(text) => {
                  setLName(text);
                }}
                placeholder="Last Name"
                customStyles={styles.input}
              />
              <SimpleInput
                text={userId}
                maxLength={30}
                onChangeText={(text) => {
                  setUserId(text);
                }}
                placeholder="Username"
                customStyles={styles.input}
              />
              <SimpleInput
                text={userEmail}
                placeholder="Email Address"
                type={true}
                editable={false}
                onChangeText={(text) => {
                  // setUserEmail(text);
                }}
                // editable={false}
                customStyles={styles.input}
              />
              <TouchableOpacity
                onPress={() => Methods.navigate(navigation, "ChangePassword")}
                style={styles.changePasswordButton}
              >
                <Text style={styles.changePasswordText}>
                  {AppConstants.changePassword}
                </Text>
              </TouchableOpacity>
              <FullButton
                disabled={profileState?.isLoading}
                title={AppConstants.saveChanges}
                onPress={() => saveChanges()}
                customStyles={{ marginBottom: responsiveHeight(5) }}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  };
  return Platform.OS == "ios" ? (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      {mainView()}
    </KeyboardAvoidingView>
  ) : (
    mainView()
  );
};

export default EditProfile;
