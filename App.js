import { useAssets } from "expo-asset";
import React from "react";
import { useEffect, useState } from "react";
import * as Notifications from 'expo-notifications';
import * as Amplitude from 'expo-analytics-amplitude';
import {
  StatusBar,
  Platform,
  LogBox,
  Text,
  SafeAreaView,
  View
} from "react-native";
import Setup from "./Src/Routes/Setup.js";
import { AppImagesExpo } from "./Src/Theme/AppImages/index.js";
import * as Font from "expo-font";
import { AppFontsExpo } from "./Src/Theme/AppFonts/index.js";
import { AppColors } from "./Src/Theme/AppColors/index.js";
import AppConstants from "./Src/Theme/AppConstants";
import { Provider } from "react-redux";
import { store } from "./Src/Redux/Store";
import FlashMessage from "react-native-flash-message";
import { getStatusBarHeight } from "react-native-status-bar-height";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  const [fontLoad, setfontLoad] = useState(false);
  useEffect(() => {
    Platform.OS == "android" && StatusBar.setBarStyle("light-content");
    Platform.OS == "android" && StatusBar.setTranslucent(false);
    Platform.OS == "android" && StatusBar.setBackgroundColor(AppColors.main);
    Amplitude.initializeAsync(AppConstants.AMPLITUDE_API_KEY)
    LogBox.ignoreAllLogs(true);
    Font.loadAsync(AppFontsExpo).then(() => {
      setfontLoad(true);
    });
  }, []);
  const [assets] = useAssets(AppImagesExpo);
  const [fonts] = Font.useFonts(AppFontsExpo);
  return (
    <>
      {assets && fonts && fontLoad && (
        <Provider store={store}>
          <View
            style={{
              height: getStatusBarHeight(),
              backgroundColor: AppColors.main,
              display: Platform.OS == "ios" ? "flex" : "none",
            }}
          />
          <StatusBar barStyle="light-content" />
          {/* <SafeAreaView style={{ flex: 1 }}> */}
          <Setup />
          <FlashMessage position="top" />
          {/* </SafeAreaView> */}
        </Provider>
      )}
    </>
  );
};

export default App;
