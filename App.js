import { useAssets } from "expo-asset";
import React from "react";
import { useEffect, useState } from "react";
import { StatusBar, Platform, LogBox, Text } from "react-native";
import Setup from "./Src/Routes/Setup.js";
import { AppImagesExpo } from "./Src/Theme/AppImages/index.js";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { AppFontsExpo } from "./Src/Theme/AppFonts/index.js";
import { AppColors } from "./Src/Theme/AppColors/index.js";

const App = () => {
  const [fontLoad, setfontLoad] = useState(false);
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    Platform.OS == "android" && StatusBar.setTranslucent(false);
    Platform.OS == "android" && StatusBar.setBackgroundColor(AppColors.main);
    LogBox.ignoreAllLogs(true);
    // loadFontsAsync();
    Font.loadAsync(AppFontsExpo).then(() => {
      setfontLoad(true);
    });
  }, []);
  // const loadFontsAsync = async () => {

  // };
  const [assets] = useAssets(AppImagesExpo);
  const [fonts] = Font.useFonts(AppFontsExpo);

  return (
    <>
      {assets && fonts && fontLoad && <Setup />}
      {/* <Text style={{ fontFamily: "semiBold" }}>nkjbds</Text> */}
    </>
  );
};

export default App;
// import * as React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { useFonts } from "expo-font";

// export default function App() {
//   const [loaded] = useFonts({
//     Montserrat: require("./Src/Assets/Fonts/Montserrat-ExtraBold.otf"),
//   });

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontFamily: "Montserrat", fontSize: 30 }}>Montserrat</Text>
//     </View>
//   );
// }
