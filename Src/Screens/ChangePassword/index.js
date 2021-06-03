import React, { useState } from "react";
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
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
import Methods from "../../Support/Methods";
const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [oldPasswordStar, setOldPasswordStar] = useState('')

  const [newPassword, setNewPassword] = useState('')
  const [newPasswordStar, setNewPasswordStar] = useState('')

  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [confirmNewPasswordStar, setConfirmNewPasswordStar] = useState('')

  function handleOldPasswordChange(text) {
    setOldPassword(text)
    setOldPasswordStar("*")
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
            onPress={() => Methods.navigate(navigation, "Auth")}
            customStyles={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
