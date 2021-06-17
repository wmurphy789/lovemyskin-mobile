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
import TermsCondition from "../Screens/TermsCondition";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import EditProfile from "../Screens/EditProfile";
import CreateJournalEntry from "../Screens/CreateJournalEntry";
import CreateAffirmation from "../Screens/CreateAffirmation";
import ViewAffirmation from "../Screens/ViewAffirmation";
import SkinPriorities from "../Screens/SkinPriorities";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ChangePassword from "../Screens/ChangePassword";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataManager } from "../Support/Datamanager";
import { useEffect } from "react";
import Loader from "../Components/Loader";
import { setQuestionIdStateAction } from "../Redux/Actions/AuthActions";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const AuthReducerState = useSelector((state) => state.AuthReducer);
  const TabBarIcon = ({ image }) => (
    <Image source={image} resizeMode="contain" style={styles.tabIcon} />
  );
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBarOptions={{
        showLabel: true,
        style: styles.tabBarStyle,
        labelStyle: styles.labelStyle,
        activeTintColor: AppColors.main,
        keyboardHidesTabBar: true,
        // safeAreaInsets:{bottom:10}           // will be use for iphone 12
      }}
      initialRouteName={
        AuthReducerState?.userState
          ? AuthReducerState?.questionId == "1"
            ? "DiagnoseStack"
            : AuthReducerState?.questionId == "2"
            ? "WellbeingStack"
            : "AffirmationStack"
          : "AffirmationStack"
      }
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

const Stack = createStackNavigator();
const Main = () => {
  const [Intial, setIntial] = useState(false);
  const AuthReducerState = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    authenticateUser();
  }, []);
  const authenticateUser = async () => {
    DataManager.getQuestionId().then((id) => {
      console.log("question id---", id);
      if (id) {
        dispatch(setQuestionIdStateAction(id));
      }
    });

    setIntial(true);
  };

  // console.log("AuthReducerState?.questionId ", AuthReducerState?.questionId);
  return Intial ? (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      // initialRouteName={
      //   AuthReducerState?.questionId ? "Tabs" : "SkinPriorities"
      // }
      // initialRouteName={"SkinPriorities"}
    >
      {AuthReducerState?.questionId ? (
        <Stack.Screen
          name="Tabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="SkinPriorities"
          component={SkinPriorities}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateJournalEntry"
        component={CreateJournalEntry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAffirmation"
        component={CreateAffirmation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewAffirmation"
        component={ViewAffirmation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <Loader load={!Intial ? true : false} />
  );
};

export default Main;

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
