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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoginStateAction } from "../Redux/Actions/AuthActions";
import Main from "./BottomTabNavigator";

const Stack = createStackNavigator();
const Setup = () => {
  const [Intial, setIntial] = useState(false);
  const AuthReducerState = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    authenticateUser();
  }, []);
  const authenticateUser = async () => {
    DataManager.getUserId().then((id) => {
      console.log("user id---", id);
      if (id) {
        dispatch(setLoginStateAction(true));
      }
      setIntial(true);
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
        // initialRouteName={Intial}
      >
        {AuthReducerState?.isLogin ? (
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Loader load={!Intial ? true : false} />
  );
};

export default Setup;
