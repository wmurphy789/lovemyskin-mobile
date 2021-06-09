import React, { useState } from "react";
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
  BackHandler,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { IconInput } from "../../Components/Input/Input";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import Methods, { navigationRef } from "../../Support/Methods";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { formikValidation } from "../../Support/Validations";
import { showMessage } from "react-native-flash-message";
import { loginAction } from "../../Redux/Actions/AuthActions";
import Loader from "../../Components/Loader";
import { useEffect } from "react";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.AuthReducer);
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     setEmail("");
  //     setPassword("");
  //   });
  //   return unsubscribe;
  // }, []);
  const signIn = () => {
    console.log("email--->", email);
    const validate = formikValidation(email?.trim(), password?.trim());

    if (validate) {
      // const email = "testing5@gmail.com";
      // const password = "Abc@1234";

      dispatch(
        loginAction(
          { email: email?.trim(), password: password?.trim() },
          navigation
        )
      );
      setEmail("");
      setPassword("");
    }
  };
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     handleBackButton
  //   );
  //   // return backHandler;
  // }, []);
  // const handleBackButton = () => {
  //   const route = navigationRef?.current?.getCurrentRoute();
  //   if (route?.name == "SignIn") BackHandler.exitApp();
  //   return true;
  // };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Loader load={authState.onLoad} />
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
                text={email}
                image={AppImages.greenMailIcon}
                placeholder={AppConstants.enterYourEmailAddress}
                customStyles={styles.input}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.inputView}>
              <IconInput
                secureInput={true}
                text={password}
                image={AppImages.greenLockSimpleIcon}
                placeholder={AppConstants.enterYourPassword}
                customStyles={styles.input}
                onChangeText={(text) => setPassword(text)}
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
                onPress={() => signIn()}
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
            disabled={authState.isDisable}
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
  );
};

export default SignIn;
