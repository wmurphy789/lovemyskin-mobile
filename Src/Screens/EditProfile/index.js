import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard, } from "react-native";
import { useDispatch } from "react-redux";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import { SimpleInput } from "../../Components/Input/Input";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import { updatetProfileAction } from "../../Redux/Actions/ProfileActions";
import { showmessage } from "../../Support/Validations";
const demoImage =
  "https://lh3.googleusercontent.com/proxy/1YUhSIrFZOy-4QNFcWiSlZRmuxD3yH095orPAStqSgRWlwh4qLJ4nGnLVPCSEUniBHI4djHLD-PV8GueOTQUglwrw7n8zRzbKNJs-QLM1zHHr6TuoM4rGIIHg50xmZVU0vlOeknsGg";
const EditProfile = ({ navigation, route }) => {

  const dispatch = useDispatch()

  let userData = route?.params?.userData
  let UserName = userData.name

  const [fName, setFName] = useState(UserName.slice(0, UserName.indexOf(" ")))
  const [lName, setLName] = useState(UserName.slice(UserName.indexOf(" "), UserName.length).trim())
  const [userId, setUserId] = useState(userData?.username?.trim())
  const [userEmail, setUserEmail] = useState(userData?.email?.trim())
  const [userImage, setUserImage] = useState(userData.photo)
  function saveChanges() {
    const data = {
      fName,
      lName,
      userId,
      userEmail,
      navigation
    }
    Keyboard.dismiss()
    fName.trim() != "" && userId.trim() != ""
      ? fName.length > 2 && userId.length > 2
        ? dispatch(updatetProfileAction(data))
        : showmessage("Name and UserName length should be atleast two.")
      : showmessage("Fill all details")
    // Methods.goBack(navigation)
  }
  return (
    <View style={styles.container}>
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
            keyboardShouldPersistTaps='always'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
          >
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: userImage != null ? userImage : demoImage }} style={styles.profileImage} />
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  // alert("open imagepicker");
                }}
              >
                <Image
                  source={AppImages.darkGreenEditIcon}
                  style={styles.editImage}
                />
              </TouchableOpacity>
            </View>
            <SimpleInput
              placeholder="First Name"
              text={fName}
              onChangeText={(text) => { setFName(text) }}
              customStyles={styles.input}
            />
            <SimpleInput
              text={lName}
              onChangeText={(text) => { setLName(text) }}
              placeholder="Last Name"
              customStyles={styles.input}
            />
            <SimpleInput
              text={userId}
              onChangeText={(text) => { setUserId(text) }}
              placeholder="Username"
              customStyles={styles.input}
            />
            <SimpleInput
              text={userEmail}
              placeholder="Email Address"
              type={true}
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
