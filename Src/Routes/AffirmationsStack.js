import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import AllAffirmations from "../Screens/AllAffirmations";
import CreateAffirmation from "../Screens/CreateAffirmation";
import ViewAffirmation from "../Screens/ViewAffirmation";

const Stack = createStackNavigator();
const AffirmationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="AllAffirmations"
        component={AllAffirmations}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AffirmationStack;
