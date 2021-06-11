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
import {
  formikValidationChangePassword,
  showmessage,
} from "../../Support/Validations";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "../../Redux/Actions/ProfileActions";
import { useSelector } from "react-redux";
const ChangePassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const ProfileReducerState = useSelector((state) => state.ProfileReducer);
  function handlePasswordChange() {
    let data = {
      oldPassword: oldPassword?.trim(),
      newPassword: newPassword?.trim(),
      confirmNewPassword: confirmNewPassword?.trim(),
      navigation,
    };
    // const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    Keyboard.dismiss(); // not working because keyboard listener added
    const validate = formikValidationChangePassword(
      oldPassword?.trim(),
      newPassword?.trim(),
      confirmNewPassword?.trim()
    );
    if (validate) {
      // dispatch(updatetProfileAction(data));
      dispatch(changePasswordAction(data));
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    }
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
            text={oldPassword}
            onChangeText={(text) => {
              setOldPassword(text);
            }}
            customStyles={styles.input}
          />
          <SimpleInput
            placeholder={AppConstants.enterNewPassword}
            secureInput={true}
            text={newPassword}
            onChangeText={(text) => {
              setNewPassword(text);
            }}
            customStyles={styles.input}
          />
          <SimpleInput
            placeholder={AppConstants.confirmNewPassword}
            secureInput={true}
            text={confirmNewPassword}
            onChangeText={(text) => {
              setConfirmNewPassword(text);
            }}
            customStyles={styles.input}
          />
          <FullButton
            disabled={ProfileReducerState?.isLoading}
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
