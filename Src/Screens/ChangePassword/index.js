import React, { useState } from "react";
import { View, ScrollView, Keyboard } from "react-native";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import { SimpleInput } from "../../Components/Input/Input";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import Methods from "../../Support/Methods";
import { showmessage } from "../../Support/Validations";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "../../Redux/Actions/ProfileActions";
const ChangePassword = ({ navigation }) => {

  const dispatch = useDispatch()
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  function handlePasswordChange() {

    let data = {
      oldPassword,
      newPassword,
      confirmNewPassword,
      navigation
    }
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    Keyboard.dismiss()      // not working because keyboard listener added
    oldPassword.trim() != '' && newPassword.trim() != '' && confirmNewPassword.trim() != ''
      ? oldPassword.match(passwordRegex)
        ? newPassword.match(passwordRegex)
          ? newPassword == confirmNewPassword
            ? dispatch(changePasswordAction(data))
            : showmessage("Password didn't match.")
          : showmessage("Please enter password in correct format(i.e.Min 8 chars,1 number,1 capitalamd 1 special char")
        : showmessage("Old password is invaild.")
      : showmessage("Please fill all the fields.")
    // Methods.navigate(navigation, "Auth")
  }
  return (
    <View style={{ flex: 1, backgroundColor: AppColors.white }}>
      <CurvedHeader
        title={AppConstants.changePassword}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          Methods.goBack(navigation);
        }}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <SimpleInput
            placeholder={AppConstants.enterOldPassword}
            secureInput={true}
            onChangeText={(text) => { setOldPassword(text) }}
            customStyles={styles.input}
          />
          <SimpleInput
            placeholder={AppConstants.enterNewPassword}
            secureInput={true}
            onChangeText={(text) => { setNewPassword(text) }}
            customStyles={styles.input}
          />
          <SimpleInput
            placeholder={AppConstants.confirmNewPassword}
            secureInput={true}
            onChangeText={(text) => { setConfirmNewPassword(text) }}
            customStyles={styles.input}
          />
          <FullButton
            title={AppConstants.changePassword}
            onPress={() => handlePasswordChange()}
            customStyles={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
