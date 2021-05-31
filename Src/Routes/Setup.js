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

const Stack = createStackNavigator();
const Setup = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
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
  );
};

export default Setup;
