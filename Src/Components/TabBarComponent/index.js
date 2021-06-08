import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const TabBarComponent = (props) => {
  const [KeyBoardVisible, setKeyBoardVisible] = useState(false);
  let navigation = props.navigation;
  const Tintcolor = props.activeTintColor,
    activeIndex = props?.state?.index;
  const tabs = [
    {
      title: "Affirmations",
      focusedImage: AppImages.greenBookIcon,
      nonFocusedImage: AppImages.greyBookIcon,
      navigation: "AffirmationStack",
    },
    {
      title: "Diagnose",
      focusedImage: AppImages.greenStethoscopeIcon,
      nonFocusedImage: AppImages.greyStethoscopeIcon,
      navigation: "DiagnoseStack",
    },
    {
      title: "My Tracker",
      focusedImage: AppImages.myTrackerIcon,
      nonFocusedImage: AppImages.myTrackerIcon,
      navigation: "MyTrackerStack",
    },
    {
      title: "Wellbeing",
      focusedImage: AppImages.greenOutlineHeartIcon,
      nonFocusedImage: AppImages.greyOutlineHeartIcon,
      navigation: "WellbeingStack",
    },
    {
      title: "My Account",
      focusedImage: AppImages.greenUserIcon,
      nonFocusedImage: AppImages.greyUserIcon,
      navigation: "ProfileStack",
    },
  ];
  useEffect(() => {
    // Keyboard.addListener("keyboardDidShow", keyboardWillShow);
    // Keyboard.addListener("keyboardDidHide", keyboardWillHide);
    // return () => {
    //   keyboardWillShowSub.remove();
    //   keyboardWillHideSub.remove();
    // };
  }, []);
  const keyboardWillShow = (event) => {
    setKeyBoardVisible(true);
  };

  const keyboardWillHide = (event) => {
    setKeyBoardVisible(false);
  };
  return  (
    <ImageBackground
      // resizeMode='contain'
      source={AppImages.bottomTab}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <View style={styles.container}>
        {tabs.map((item, index) => {
          if (item.title == "My Tracker") {
            return (
              <TouchableOpacity
                activeOpacity={1}
                key={index}
                onPress={() => {
                  navigation.navigate(item.navigation);
                }}
                key={index}
              >
                <View style={styles.mainGreenTab}>
                  <Image
                    resizeMode="contain"
                    source={item.focusedImage}
                    style={styles.myTrackerImage}
                  />
                  <Text
                    style={[
                      styles.tabsTitle,
                      { color: AppColors.white, fontFamily: AppFonts.semiBold },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.normalTabs}
                key={index}
                onPress={() => {
                  navigation.navigate(item.navigation);
                }}
              >
                <Image
                  resizeMode="contain"
                  source={
                    activeIndex == index
                      ? item.focusedImage
                      : item.nonFocusedImage
                  }
                  style={styles.tabIcon}
                />
                <Text
                  style={[
                    styles.tabsTitle,
                    {
                      color:
                        activeIndex == index ? AppColors.main : AppColors.black,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </ImageBackground>
  );
};

export default TabBarComponent;
