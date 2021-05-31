import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { IconInput } from "../../Components/Input/Input";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import Methods from "../../Support/Methods";

const ForgotPassword = ({ navigation }) => {
  return (
    <ScrollView
      bounces={false}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.backbutton}
          underlayColor="rgba(33, 131, 129, 0.5)"
          activeOpacity={1}
          onPress={() => {
            Methods.goBack(navigation);
          }}
        >
          <Image source={AppImages.backIcon} style={styles.backIcon} />
        </TouchableHighlight>
        <Text style={styles.ForgotPasswordText}>
          {AppConstants.forgotPassword}
        </Text>
        <IconInput
          image={AppImages.greenMailIcon}
          placeholder={AppConstants.enterYourEmailAddress}
        />
        <FullButton
          customStyles={styles.button}
          title={AppConstants.submit}
          onPress={() => Methods.goBack(navigation)}
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
