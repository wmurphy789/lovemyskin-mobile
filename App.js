import React from "react";
import { useEffect } from "react";
import { StatusBar, Platform, LogBox } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Setup from "./Src/Routes/Setup.js";
const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    Platform.OS == "android" && StatusBar.setTranslucent(true);
    Platform.OS == "android" && StatusBar.setBackgroundColor("rgba(1,1,1,0)");
    LogBox.ignoreAllLogs(true);
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <>
      <Setup />
    </>
  );
};

export default App;
