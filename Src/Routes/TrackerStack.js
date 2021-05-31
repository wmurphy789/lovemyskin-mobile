import * as React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import CreateJournalEntry from "../Screens/CreateJournalEntry";
import MyTracker from "../Screens/MyTracker";

const Stack = createStackNavigator();
const MyTrackerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="MyTracker"
        component={MyTracker}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MyTrackerStack;
