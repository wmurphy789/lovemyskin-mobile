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
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import Loader from "../../Components/Loader";
import {
  createTrackerEntryAction,
  editTrackerEntryAction,
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
const dropDownoption = [
  { id: 0, feeling: "good" },
  { id: 1, feeling: "bad" },
  { id: 2, feeling: "ok" },
];
const CreateJournalEntry = (props) => {
  const id = props?.route?.params?.item?.id;
  const [dropDrownOpen, setDropDrownOpen] = useState(false);
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
  const dispatch = useDispatch();
  const TrackerState = useSelector((state) => state.TrackerReducer);
  const createEntry = () => {
    if (description.length > 0) {
      var data = new FormData();
      data.append("entry_date", moment().format("YYYY-MM-DD"));
      data.append("description", description);
      data.append("feeling", felling);
      // data.append('photo', fs.createReadStream('/Users/react/Downloads/2021-06-06.jpeg'))
      dispatch(createTrackerEntryAction(data, props.navigation));
    } else {
      showmessage("Please enter your description");
    }
  };
  const updateEntry = () => {
    if (description.length > 0) {
      var data = new FormData();

      data.append("description", description);
      data.append("feeling", felling);
      // data.append('photo', fs.createReadStream('/Users/react/Downloads/2021-06-06.jpeg'))
      dispatch(
        editTrackerEntryAction({ formData: data, id: id }, props.navigation)
      );
    } else {
      showmessage("Please enter your description");
    }
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
            <Text style={styles.dropDownText}>{felling}</Text>
            <Image
              source={AppImages.dropdownicon}
              style={styles.dropDownImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        {dropDrownOpen && (
          <View
            style={{
              position: "absolute",
              top: 80,
              height: 150,
              backgroundColor: "#F0F9F7",
              width: "90%",
              alignSelf: "center",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              zIndex: 9999,
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
                >
                  <View
                    key={item.id}
                    style={{
                      paddingVertical: responsiveWidth(3.5),
                      borderTopWidth: 0.2,
                      borderColor: AppColors.mediumGrey,
                      paddingHorizontal: responsiveWidth(8),
                    }}
                  >
                    <Text style={styles.dropDownText}>{item.feeling}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
      <View>
        <TextInput
          multiline
          maxLength={500}
          placeholder={AppConstants.typeYourJournalEntryHere}
          style={styles.input}
          defaultValue={description}
          onChangeText={(text) => setDescription(text)}
        />
        {/* <Image
          source={AppImages.mike}
          style={styles.mikeImage}
          resizeMode="contain"
        /> */}
      </View>
      <View style={styles.uploadImageContainer}>
        <TouchableOpacity style={styles.cameraButton}>
          <Image source={AppImages.greenCameraIcon} style={styles.cameraIcon} />
          <Text style={styles.cameraText}>{AppConstants.uploadTakePhoto}</Text>
        </TouchableOpacity>
      </View>

      <FullButton
        title={id ? "Update Affirmation" : AppConstants.createAffirmation}
        customStyles={styles.button}
        onPress={() => (id ? updateEntry() : createEntry())}
      />
    </View>
  );
  return (
    <>
      <CurvedHeader
        title={AppConstants.CreateJournalEntry}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          props.navigation.goBack();
        }}
      />
      <Loader load={TrackerState.onLoad} />
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback onPress={() => setDropDrownOpen(false)}>
          {mainView()}
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
};

export default CreateJournalEntry;
