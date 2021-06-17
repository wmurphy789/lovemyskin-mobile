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
import { signupAction, omniauthAction } from "../../Redux/Actions/AuthActions";
import Methods from "../../Support/Methods";
import { formikValidation } from "../../Support/Validations";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import * as AppleAuthentication from "expo-apple-authentication";

const socialLoginData = [
  {
    image: AppImages.googleIcon,
    text: "Sign In with Google",
    visible: true,
    id: 0,
    provider: "google",
  },
  {
    image: AppImages.fbIcon,
    text: "Sign In with Facebook",
    visible: true,
    id: 1,
    provider: "facebook",
  },
  {
    image: AppImages.appleIcon,
    text: "Sign In with Apple",
    visible: Platform.OS == "ios" ? true : false,
    id: 2,
    provider: "apple",
  },
];
const SignUp = ({ navigation }) => {
  const [trackingStatus, setStatus] = useState({});
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
  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === "granted") {
        setStatus("authorized");
      }
    })();
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

  async function signInWithAsync(provider) {
    try {
      var success = false;
      var email,
        token = null;

      if (provider === "google") {
        const result = await Google.logInAsync({
          androidClientId: AppConstants.ANDROID_GOOGLE_CLIENT_ID,
          iosClientId: AppConstants.APPLE_GOOGLE_CLIENT_ID,
          iosStandaloneAppClientId: AppConstants.APPLE_GOOGLE_PROD_CLIENT_ID,
          androidStandaloneAppClientId:
            AppConstants.ANDROID_GOOGLE_PROD_CLIENT_ID,
          scopes: ["profile", "email"],
        });
        success = result["type"] === "success";

        if (success) {
          email = result["user"]["email"];
          token = result["accessToken"];
        }
      } else if (provider == "facebook") {
        await Facebook.initializeAsync({
          appId: AppConstants.FACEBOOK_APP_ID,
        });
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });

        if (type === "success") {
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=email`
          );
          success = type === "success";
          email = (await response.json()).email;
        }
      } else if (provider == "apple") {
        const response = await AppleAuthentication.signInAsync({
          requestedScopes: [AppleAuthentication.AppleAuthenticationScope.EMAIL],
        });

        if (response) {
          success = true;
          token = response["user"];
          email = response["email"];
        }
      }

      if (success) {
        dispatch(
          omniauthAction(
            { email: email, provider: provider, token: token },
            navigation
          )
        );
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  }

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
                />
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
          </View>

          {trackingStatus === "authorized" && (
            <View style={styles.socialLoginView}>
              <Text style={styles.orText}>OR</Text>
              <View style={styles.socialLoginButtonsView}>
                {socialLoginData.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={1}
                    onPress={() => signInWithAsync(item.provider)}
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
            </View>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
