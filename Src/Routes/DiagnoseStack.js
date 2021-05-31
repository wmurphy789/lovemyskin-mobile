import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import SkinDiagnosis from '../Screens/SkinDiagnosis';
import SkinDiagnosisReport from '../Screens/SkinDiagnosisReport';

const Stack = createStackNavigator();
const DiagnoseStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: false,
                animationEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen
                name="SkinDiagnosis"
                component={SkinDiagnosis}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="SkinDiagnosisReport"
                component={SkinDiagnosisReport}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default DiagnoseStack;