import * as React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TermsCondition from "../Screens/TermsCondition";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import ChangePassword from "../Screens/ChangePassword";
import EditProfile from "../Screens/EditProfile";
import BottomTabNavigator from "./BottomTabNavigator";
import CreateAffirmation from "../Screens/CreateAffirmation";
import ViewAffirmation from "../Screens/ViewAffirmation";
import CreateJournalEntry from "../Screens/CreateJournalEntry";
import { DataManager } from "../Support/Datamanager";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Components/Loader";
import { navigationRef } from "../Support/Methods";

const Stack = createStackNavigator();
const Setup = () => {
  const [Intial, setIntial] = useState(null);
  useEffect(() => {
    authenticateUser();
  }, []);
  const authenticateUser = async () => {
    DataManager.getUserId().then((token) => {
      console.log("token---", token);
      if (token) {
        setIntial("Tabs");
      } else {
        setIntial("Auth");
      }
    });
  };

  return Intial ? (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={Intial}
      >
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
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
    </NavigationContainer>
  ) : (
    <Loader load={!Intial ? true : false} />
  );
};

export default Setup;
