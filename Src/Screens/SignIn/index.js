import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { IconInput } from "../../Components/Input/Input";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import Methods from "../../Support/Methods";
import styles from "./styles";

const socialLoginData = [
  {
    image: AppImages.googleIcon,
    text: "Sign In with Google",
    visible: true,
    id: 0,
  },
  {
    image: AppImages.fbIcon,
    text: "Sign In with Facebook",
    visible: true,
    id: 1,
  },
  {
    image: AppImages.appleIcon,
    text: "Sign In with Apple",
    visible: Platform.OS == "ios" ? true : false,
    id: 2,
  },
];

const SignIn = ({ navigation }) => {
  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1, backgroundColor: "#fff" }}
    //   behavior="padding"
    // >
    <View style={{ flex: 1, backgroundColor: "#fff" }}>


      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: "#fff" }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.headerImage}
              source={AppImages.curveBigHeaderImage}
            >
              <Image source={AppImages.logoIcon} style={styles.logoImage} />
              <Text style={styles.welcomeBackText}>
                {AppConstants.welcomeBack}
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.mainView}>
            <Text style={styles.introText}>{AppConstants.loremIpsum}</Text>
            <View style={styles.inputView}>
              <IconInput
                type={true}
                image={AppImages.greenMailIcon}
                placeholder={AppConstants.enterYourEmailAddress}
                customStyles={styles.input}
              />
            </View>
            <View style={styles.inputView}>
              <IconInput
                secureInput={true}
                image={AppImages.greenLockSimpleIcon}
                placeholder={AppConstants.enterYourPassword}
                customStyles={styles.input}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                Methods.navigate(navigation, "ForgotPassword");
              }}
              style={styles.forgotPasswordButton}
            >
              <Text style={styles.forgotPasswordText}>
                {AppConstants.forgotPassword}
              </Text>
            </TouchableOpacity>
            <View style={styles.fullButton}>
              <FullButton
                title={AppConstants.signIn}
                onPress={() => Methods.navigate(navigation, "Tabs")}
              />
            </View>
          </View>
          <View style={styles.socialLoginView}>
            {/* <Text style={styles.orText}>OR</Text>
          <View style={styles.socialLoginButtonsView}>
            {socialLoginData.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={1}
                style={[
                  styles.socialLoginButton,
                  { display: item.visible ? "flex" : "none" },
                ]}
              >
                <View style={styles.centerView}>
                  <View style={styles.socialLoginButtonsImageView}>
                    <Image
                      source={item.image}
                      style={styles.socialLoginImage}
                    />
                  </View>
                  <View style={styles.socialLoginButtonsTextView}>
                    <Text style={styles.socialLoginText}>{item.text}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
         */}
          </View>

          <TouchableOpacity
            onPress={() => {
              Methods.navigate(navigation, "SignUp");
            }}
            style={styles.dontHaveAccountButton}
          >
            <Text style={styles.dontHaveAccountText}>
              {AppConstants.dontHaveAnAccount}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    // </KeyboardAvoidingView>
  );
};

export default SignIn;
