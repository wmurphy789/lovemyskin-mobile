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
import {
  formikValidation,
  formikValidationLogin,
} from "../../Support/Validations";
import { showMessage } from "react-native-flash-message";
import { loginAction, omniauthAction } from "../../Redux/Actions/AuthActions";
import Loader from "../../Components/Loader";
import { useEffect } from "react";
import { DataManager } from "../../Support/Datamanager";
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import * as AppleAuthentication from 'expo-apple-authentication';

const socialLoginData = [
  {
    image: AppImages.googleIcon,
    text: "Sign In with Google",
    visible: true,
    id: 0,
    provider: "google"
  },
  {
    image: AppImages.fbIcon,
    text: "Sign In with Facebook",
    visible: true,
    id: 1,
    provider: "facebook"
  },
  {
    image: AppImages.appleIcon,
    text: "Sign In with Apple",
    visible: Platform.OS == "ios" ? true : false,
    id: 2,
    provider: "apple"
  },
];

const SignIn = ({ navigation }) => {
  const [trackingStatus, setStatus] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === 'granted') {
        setStatus('authorized')
      }
    })();
  }, []);
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     () => {
  //       console.log(navigationRef.current.getCurrentRoute());
  //       let route = navigationRef.current.getCurrentRoute();
  //       if (route.name == "SignIn") {
  //         BackHandler.exitApp();
  //         // return true
  //       }
  //       // return backHandler.remove();
  //     }
  //   );
  // }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setEmail("");
      setPassword("");
    });

    return unsubscribe;
  }, []);
  // useEffect(() => {
  //   const unsubscribe1 = navigation.addListener("focus", () => {
  //     console.log("in signin ");
  //     DataManager.getUserId().then((token) => {
  //       if (token) {
  //         navigation.navigate("Tabs");
  //       }
  //     });
  //   });

  //   return unsubscribe1;
  // }, []);

  const signIn = () => {
    const validate = formikValidationLogin(email?.trim(), password?.trim());

    if (validate) {
      // const email = "testing5@gmail.com";
      // const password = "Abc@1234";

      dispatch(
        loginAction(
          { email: email?.trim(), password: password?.trim() },
          navigation
        )
      );
      // setEmail("");
      // setPassword("");
    }
  };

  async function signInWithAsync(provider) {
    try {
      var success = false;
      var email, token   = null;

      if(provider === "google") {
        const result = await Google.logInAsync({
          androidClientId: AppConstants.ANDROID_GOOGLE_CLIENT_ID,
          iosClientId: AppConstants.APPLE_GOOGLE_CLIENT_ID,
          iosStandaloneAppClientId: AppConstants.APPLE_GOOGLE_PROD_CLIENT_ID,
          androidStandaloneAppClientId: AppConstants.ANDROID_GOOGLE_PROD_CLIENT_ID,
          scopes: ['profile', 'email'],
        });  
        success = result["type"] === 'success'

        if(success) {
          email = result["user"]["email"]
          token = result["accessToken"]
        }
      } else if(provider == "facebook") {
        await Facebook.initializeAsync({
          appId: AppConstants.FACEBOOK_APP_ID,
        });
        const {
          type,
          token
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile','email'],
        });
        
        if(type === 'success') {
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email`);
          success = type === "success"
          email   = (await response.json()).email
        }
      } else if(provider == "apple") {
        const response = await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME
          ],
        });
 
        if(response) {
          success = true
          token   = response["user"]
          email   = response["email"]
        }
      }
    
      if (success) {
        dispatch(
          omniauthAction(
            { email: email, provider: provider, token: token },
            navigation
          )
        )
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e)
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
                  disabled={authState?.onLoad}
                  title={AppConstants.signIn}
                  onPress={() => signIn()}
                />
              </View>
            </View>
          </View>
          {trackingStatus === "authorized" &&
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
          }

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
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
