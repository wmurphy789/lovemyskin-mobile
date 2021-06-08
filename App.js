import { useAssets } from "expo-asset";
import React from "react";
import { useEffect, useState } from "react";
import { StatusBar, Platform, LogBox, Text } from "react-native";
import Setup from "./Src/Routes/Setup.js";
import { AppImagesExpo } from "./Src/Theme/AppImages/index.js";
import * as Font from "expo-font";
import { AppFontsExpo } from "./Src/Theme/AppFonts/index.js";
import { AppColors } from "./Src/Theme/AppColors/index.js";
import { Provider } from "react-redux";
import { store } from "./Src/Redux/Store";
import FlashMessage from "react-native-flash-message";

const App = () => {
  const [fontLoad, setfontLoad] = useState(false);
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    Platform.OS == "android" && StatusBar.setTranslucent(false);
    Platform.OS == "android" && StatusBar.setBackgroundColor(AppColors.main);
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
          <Setup />
          <FlashMessage position="bottom" />
        </Provider>
      )}
    </>
  );
};

export default App;
