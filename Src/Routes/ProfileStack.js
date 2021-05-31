import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ViewProfile from "../Screens/ViewProfile";
import EditProfile from "../Screens/EditProfile";
import ChangePassword from "../Screens/ChangePassword";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import TermsCondition from "../Screens/TermsCondition";
import { CurvedHeader } from "../Components/Header";
import { AppImages } from "../Theme/AppImages";
import Methods from "../Support/Methods";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="ViewProfile"
        component={ViewProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
