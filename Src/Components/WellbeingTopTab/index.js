import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import React from "react";
import styles from "./styles";
import { Tabs } from "../../Screens/SkinWellbeing";

const Tab = createMaterialTopTabNavigator();

const WellbeingTabs = () => {
    // material Top tab nav
    return (
        <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: styles.indicator,
                pressColor: AppColors.white,
                style: {
                    elevation: 0,
                    shadowColor: "#ffffff",
                    shadowOffset: { width: 0, height: 0 }, // change this for more shadow
                    shadowOpacity: 0.4,
                    shadowRadius: 6,
                    borderBottomWidth: 0.2,
                    borderBottomColor: AppColors.lightGrey,
                },
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text style={styles.selected}>{AppConstants.articles}</Text>
                        ) : (
                            <Text style={styles.notSelected}>{AppConstants.articles}</Text>
                        ),
                }}
                name="Articles"
                component={Tabs.Articles}
                listeners={{
                    focus: (e) => {

                    },
                }}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text style={styles.selected}>{AppConstants.videos}</Text>
                        ) : (
                            <Text style={styles.notSelected}>{AppConstants.videos}</Text>
                        ),
                }}
                name="Videos"
                component={Tabs.Videos}
                listeners={{
                    focus: (e) => {
                    },
                }}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text style={styles.selected}>{AppConstants.podcasts}</Text>
                        ) : (
                            <Text style={styles.notSelected}>{AppConstants.podcasts}</Text>
                        ),
                }}
                name="Podcasts"
                component={Tabs.Podcasts}
                listeners={{
                    focus: (e) => {
                    },
                }}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text style={styles.selected}>{AppConstants.stories}</Text>
                        ) : (
                            <Text style={styles.notSelected}>{AppConstants.stories}</Text>
                        ),
                }}
                name="Stories"
                component={Tabs.Stories}
                listeners={{
                    focus: (e) => {
                    },
                }}
            />
        </Tab.Navigator>
    );
};
export default WellbeingTabs