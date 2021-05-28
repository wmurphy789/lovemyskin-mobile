import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AffirmationStack from './AffirmationsStack';
import ProfileStack from './ProfileStack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppImages } from '../Theme/AppImages';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../Theme/ResponsiveDimensions';
import { AppFonts } from '../Theme/AppFonts';
import SkinWellbeing from '../Screens/SkinWellbeing';
import { AppColors } from '../Theme/AppColors';
import AppConstants from '../Theme/AppConstants';

const Tab = createBottomTabNavigator();

const WellbeingStack = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>Wellbeing stack</Text>
    </View>
)
const MyTrackerStack = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>MyTracker stack</Text>
    </View>
)
const DiagnoseStack = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>Diagnose stack</Text>
    </View>
)

const MainTabNav = () => {
    const TabBarIcon = ({ image }) => (
        <Image source={image} resizeMode='contain' style={styles.tabIcon} />
    )
    return (
        <NavigationContainer>
            <Tab.Navigator
                backBehavior='history'
                screenOptions={{}}
                tabBarOptions={{
                    showLabel: true,
                    style: styles.tabBarStyle,
                    labelStyle: styles.labelStyle,
                    activeTintColor: AppColors.main,

                }} >
                <Tab.Screen
                    name="AffirmationStack"

                    component={AffirmationStack}
                    options={{
                        title: "Affirmations",
                        tabBarIcon: ({ focused }) =>
                            focused
                                ? (<TabBarIcon image={AppImages.greenBookIcon} />)
                                : (<TabBarIcon image={AppImages.greyBookIcon} />)
                    }} />
                <Tab.Screen
                    name="DiagnoseStack"
                    component={DiagnoseStack}
                    options={{
                        title: "Diagnose",
                        tabBarIcon: ({ focused }) =>
                            focused
                                ? (<TabBarIcon image={AppImages.greenStethoscopeIcon} />)
                                : (<TabBarIcon image={AppImages.greyStethoscopeIcon} />)
                    }} />
                <Tab.Screen
                    name="MyTrackerStack"
                    component={MyTrackerStack}

                    options={{
                        tabBarLabel: "",
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.MyTrackerButton}>
                                <Image resizeMode='contain' source={AppImages.myTrackerIcon} style={styles.trackerIcon} />
                                <Text style={styles.trackerText}>{AppConstants.myTracker}</Text>
                            </View>
                        )
                    }} />
                <Tab.Screen
                    name="WellbeingStack"
                    component={SkinWellbeing}
                    options={{
                        title: "Wellbeing",
                        tabBarIcon: ({ focused }) =>
                            focused
                                ? (<TabBarIcon image={AppImages.greenOutlineHeartIcon} />)
                                : (<TabBarIcon image={AppImages.greyOutlineHeartIcon} />)
                    }} />
                <Tab.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ focused }) =>
                            focused
                                ? (<TabBarIcon image={AppImages.greenUserIcon} />)
                                : (<TabBarIcon image={AppImages.greyUserIcon} />)
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default MainTabNav

const styles = StyleSheet.create({
    tabIcon: {
        height: responsiveWidth(5),
        width: responsiveWidth(5)
    },
    tabBarStyle: {
        height: responsiveHeight(7),
        paddingTop: responsiveHeight(1.5),
    },
    labelStyle: {
        marginBottom: responsiveHeight(0.8),
        fontFamily: AppFonts.light
    },
    MyTrackerButton: {
        height: responsiveWidth(20),
        width: responsiveWidth(20),
        backgroundColor: "#00CDA9",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 500,
        top: -20
    },
    trackerIcon: {
        height: responsiveWidth(4),
        width: responsiveWidth(5),

    },
    trackerText: {
        color: AppColors.white,
        fontSize: responsiveFontSize(1.2),
        fontFamily:AppFonts.semiBold
    }
})