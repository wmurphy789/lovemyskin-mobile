import * as React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import ForgotPassword from "../Screens/ForgotPassword";
import SkinPriorities from "../Screens/SkinPriorities";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="SignIn"
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="SkinPriorities"
        component={SkinPriorities}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
