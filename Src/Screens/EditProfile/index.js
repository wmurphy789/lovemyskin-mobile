import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
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
  updateProfileImageAction,
  updatetProfileAction,
} from "../../Redux/Actions/ProfileActions";
import { formikValidationProfile } from "../../Support/Validations";
import * as ImagePicker from "expo-image-picker";
import ImagePickerModal from "../../Components/ImagePickerModal";
import { AppColors } from "../../Theme/AppColors";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
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
  const [imagePickerModal, setImagePickerModal] = useState(false);

  const openGallery = async () => {
    setImagePickerModal(false);
    // Ask the user for the permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert(
        "You've refused to allow this application to access your Photos! Go to setting>>Applications>>LoveMySkin>>Storage permission>>allowed"
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      changeProfileImage(result.uri);
    }
  };
  const openCamera = async () => {
    setImagePickerModal(false);
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    console.log("permission--->>", permissionResult);
    if (permissionResult.granted === false) {
      alert(
        "You've refused to allow this application to access your camera! Go to setting>>Applications>>LoveMySkin>>Camera permission>>allowed"
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      changeProfileImage(result.uri);
    }
  };
  function saveChanges() {
    const data = {
      id: profileState?.id,
      fName: fName?.trim(),
      lName: lName?.trim(),
      userId: userId?.trim(),
      navigation,
    };
    Keyboard.dismiss();
    const validate = formikValidationProfile(
      fName?.trim(),
      lName?.trim(),
      userId?.trim()
    );
    if (validate) {
      dispatch(updatetProfileAction(data));
    }
    // fName.trim() != "" && userId.trim() != ""
    //   ? fName.length > 2 && userId.length > 2
    //     ?
    //     : showmessage("Name and UserName length should be atleast two.")
    //   : showmessage("Fill all details");
    // Methods.goBack(navigation)
  }
  function changeProfileImage(imageUrl) {
    var data = new FormData();
    data.append("avatar", {
      type: "image/jpg",
      uri: imageUrl,
      name: imageUrl.slice(imageUrl.lastIndexOf("/") + 1, imageUrl.length),
    });
    dispatch(updateProfileImageAction(data, navigation));
  }
  return (
    <View style={styles.container}>
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
        {/* <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "#fff" }}
          behavior="padding"
        > */}
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <ScrollView
            bounces={false}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
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
              onChangeText={(text) => {
                setFName(text);
              }}
              customStyles={styles.input}
            />
            <SimpleInput
              text={lName}
              onChangeText={(text) => {
                setLName(text);
              }}
              placeholder="Last Name"
              customStyles={styles.input}
            />
            <SimpleInput
              text={userId}
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
              onChangeText={(text) => {
                setUserEmail(text);
              }}
              editable={false}
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
              title={AppConstants.saveChanges}
              onPress={() => saveChanges()}
            />
          </ScrollView>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </View>
  );
};

export default EditProfile;
