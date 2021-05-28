import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ViewProfile from '../Screens/ViewProfile';
import EditProfile from '../Screens/EditProfile';
import ChangePassword from '../Screens/ChangePassword';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import TermsCondition from '../Screens/TermsCondition';
import { CurvedHeader } from '../Components/Header';
import { AppImages } from '../Theme/AppImages';
import Methods from '../Support/Methods';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    animationEnabled: true,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}>
                <Stack.Screen name="ViewProfile"
                    component={ViewProfile}
                    options={{ headerShown: false }} />
                <Stack.Screen name="TermsCondition"
                    component={TermsCondition}
                    options={{
                        // header: props => (<CurvedHeader
                        //     title="Terms and conditions"
                        //     leftIcon={AppImages.backIcon}
                        //     leftPress={() => { Methods.goBack(props.navigation) }}
                        //     {...props}
                        // />),
                        headerShown: false
                    }} />
                <Stack.Screen name="PrivacyPolicy"
                    component={PrivacyPolicy}
                    options={{
                        // header: props => (<CurvedHeader
                        //     title="Privacy policy"
                        //     leftIcon={AppImages.backIcon}
                        //     leftPress={() => { Methods.goBack(props.navigation) }}
                        //     {...props}
                        // />),
                        headerShown: false
                    }} />
                <Stack.Screen name="ChangePassword"
                    component={ChangePassword}
                    options={{
                        // header: props => (<CurvedHeader
                        //     title="Change Password"
                        //     leftIcon={AppImages.backIcon}
                        //     leftPress={() => { Methods.goBack(props.navigation) }}
                        //     {...props}
                        // />),
                        headerShown: false
                    }} />
                <Stack.Screen name="EditProfile"
                    component={EditProfile}
                    options={{
                        // header: props => (<CurvedHeader
                        //     title="Edit Profile"
                        //     leftIcon={AppImages.backIcon}
                        //     leftPress={() => { Methods.goBack(props.navigation) }}
                        //     {...props}
                        // />),
                        headerShown: false
                    }} />
            </Stack.Navigator>
    );
}

export default ProfileStack;