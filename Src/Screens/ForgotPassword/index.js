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
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import { AppColors } from "../../Theme/AppColors";
import { useEffect } from "react";
import { useState } from "react";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setEmail("");
    });
    return unsubscribe;
  }, []);
  return (
    <ScrollView
      bounces={false}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: AppColors.white }}
    >
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.backbutton}
          underlayColor="rgba(33, 131, 129, 0.5)"
          activeOpacity={1}
          onPress={() => {
            Methods.goBack(navigation);
            // alert("jnhnjk");
          }}
        >
          <Image
            source={AppImages.backIcon}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <Text style={styles.ForgotPasswordText}>
          {AppConstants.forgotPassword_1}
        </Text>
        <View
          style={{
            marginTop: responsiveHeight(3),
          }}
        >
          <IconInput
            type={true}
            text={email}
            onChangeText={(text) => setEmail(text)}
            // customStyles={styles.input}
            image={AppImages.greenMailIcon}
            placeholder={AppConstants.enterYourEmailAddress}
          />
        </View>

        <FullButton
          customStyles={styles.button}
          title={AppConstants.submit}
          onPress={() => {
            Methods.goBack(navigation);
            setEmail("");
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
