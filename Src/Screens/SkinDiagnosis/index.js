import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import { SimpleInput } from "../../Components/Input/Input";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import ImagePickerModal from "../../Components/ImagePickerModal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { submitFeedbackAutodrumAction } from "../../Redux/Actions/SkinDiagonseAction";
import { showmessage } from "../../Support/Validations";
import Loader from "../../Components/Loader";
import { useEffect } from "react";

const SkinDiagnosis = ({ navigation }) => {
  const [imagePickerModal, setImagePickerModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();
  const SkinDiagonseState = useSelector(
    (state) => state.submitFeedbackAutodrumReducer
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setPhoto(null);
    });
    return unsubscribe;
  }, []);
  const openGallery = async () => {
    setImagePickerModal(false);
    // Ask the user for the permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const openCamera = async () => {
    setImagePickerModal(false);
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  const submitFeedback = () => {
    if (photo) {
      var data = new FormData();
      data.append("file", {
        type: "image/jpg",
        uri: photo,
        name: Math.random() * 100000000000000000 + ".jpg",
      });
      dispatch(
        submitFeedbackAutodrumAction(
          { formData: data, image: photo },
          navigation
        )
      );
    } else {
      showmessage("Please upload a image.");
    }
  };
  return (
    <View style={styles.container}>
      <CurvedHeader
        title={AppConstants.skinDiagnosis}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          Methods.navigate(navigation, "AllAffirmations");
        }}
      />
      <Loader load={SkinDiagonseState?.onLoad} />
      <ImagePickerModal
        load={imagePickerModal}
        onClose={() => {
          setImagePickerModal(false);
        }}
        openCamera={() => openCamera()}
        openGallery={() => openGallery()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: responsiveHeight(8) }}
      >
        <View style={styles.scrollViewContainer}>
          <Text style={styles.infoText}>
            {AppConstants.firstAddPictureOfYourSkinConcern}
          </Text>
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
                <View style={styles.uploadImageContainer}>
                  <Image
                    source={AppImages.greenCameraIcon}
                    style={styles.cameraIcon}
                  />
                  <Text style={styles.cameraText}>
                    {AppConstants.uploadTakePhoto}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          {/* </View> */}
          <FullButton
            disabled={SkinDiagonseState?.isDisable}
            onPress={() => {
              submitFeedback();
              // Methods.navigate(navigation, "SkinDiagnosisReport");
            }}
            title={AppConstants.submit}
            customStyles={styles.button}
          />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.feedbackButton} activeOpacity={1}>
              <Text style={styles.feedbacktext}>
                {AppConstants.feedback.toUpperCase()}
              </Text>
            </TouchableOpacity>
            <Text style={styles.poweredbyAutoderm}>
              {AppConstants.poweredbyAutoderm}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SkinDiagnosis;
