import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FullButton } from "../../Components/Button";
import { IconInput } from "../../Components/Input/Input";
import Loader from "../../Components/Loader";
import { signupAction } from "../../Redux/Actions/AuthActions";
import Methods from "../../Support/Methods";
import { formikValidation } from "../../Support/Validations";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
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
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    });
    return unsubscribe;
  }, []);
  const signUp = () => {
    const validate = formikValidation(
      email?.trim(),
      password?.trim(),
      confirmPassword?.trim()
    );
    if (validate) {
      dispatch(
        signupAction(
          {
            email: email?.trim(),
            password: password?.trim(),
            confirmPassword: confirmPassword?.trim(),
          },
          navigation
        )
      );
      // setEmail("");
      // setPassword("");
      // setConfirmPassword("");
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
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
                  {AppConstants.welcome}
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.introText}>{AppConstants.loremIpsum}</Text>
              <View style={styles.inputView}>
                <IconInput
                  type={true}
                  image={AppImages.greenMailIcon}
                  text={email}
                  placeholder={AppConstants.enterYourEmailAddress}
                  customStyles={styles.input}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.inputView}>
                <IconInput
                  image={AppImages.greenLockSimpleIcon}
                  secureInput={true}
                  text={password}
                  placeholder={AppConstants.enterYourPassword}
                  customStyles={styles.input}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View style={styles.inputView}>
                <IconInput
                  image={AppImages.greenLockSimpleIcon}
                  secureInput={true}
                  text={confirmPassword}
                  placeholder={AppConstants.confirmYourPassword}
                  customStyles={styles.input}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
              </View>
              <View style={styles.fullButton}>
                <FullButton
                  disabled={authState?.onLoad}
                  title={AppConstants.signUp}
                  onPress={() => signUp()}
                  // onPress={() => Methods.navigate(navigation, "SkinPriorities")}
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
                Methods.goBack(navigation);
              }}
              style={styles.dontHaveAccountButton}
            >
              <Text style={styles.dontHaveAccountText}>
                {AppConstants.haveAnAccount}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
