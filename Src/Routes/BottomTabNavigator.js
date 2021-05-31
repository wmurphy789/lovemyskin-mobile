import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AffirmationStack from "./AffirmationsStack";
import ProfileStack from "./ProfileStack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { AppImages } from "../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../Theme/ResponsiveDimensions";
import { AppFonts } from "../Theme/AppFonts";
import SkinWellbeing from "../Screens/SkinWellbeing";
import { AppColors } from "../Theme/AppColors";
import DiagnoseStack from "./DiagnoseStack";
import MyTrackerStack from "./TrackerStack";
import TabBarComponent from "../Components/TabBarComponent";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const TabBarIcon = ({ image }) => (
    <Image source={image} resizeMode="contain" style={styles.tabIcon} />
  );
  return (
    <Tab.Navigator
      backBehavior="history"
      tabBarOptions={{
        showLabel: true,
        style: styles.tabBarStyle,
        labelStyle: styles.labelStyle,
        activeTintColor: AppColors.main,
        keyboardHidesTabBar: true,
        // safeAreaInsets:{bottom:10}           // will be use for iphone 12
      }}
      tabBar={(props) => <TabBarComponent {...props} />}
    >
      <Tab.Screen name="AffirmationStack" component={AffirmationStack} />
      <Tab.Screen name="DiagnoseStack" component={DiagnoseStack} />
      <Tab.Screen name="MyTrackerStack" component={MyTrackerStack} />
      <Tab.Screen name="WellbeingStack" component={SkinWellbeing} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  tabBarStyle: {
    // height: responsiveHeight(7),
    // paddingTop: responsiveHeight(1.5),
    // backgroundColor: "red",
  },
  labelStyle: {
    marginBottom: responsiveHeight(0.8),
    fontFamily: AppFonts.light,
  },
  MyTrackerButton: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    backgroundColor: "#00CDA9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
    top: -20,
  },
  trackerIcon: {
    height: responsiveWidth(4),
    width: responsiveWidth(5),
  },
  trackerText: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.2),
    fontFamily: AppFonts.semiBold,
  },
});
