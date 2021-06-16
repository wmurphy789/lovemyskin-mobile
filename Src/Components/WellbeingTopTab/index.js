import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import React from "react";
import styles from "./styles";
import { Tabs } from "../../Screens/SkinWellbeing";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

const WellbeingTabs = ({
    articleEvent,
    videosEvent,
    podcastsEvent,
    storiesEvent }) => {

    // material Top tab nav
    const tabData = useSelector(state => state.WellbeingReducer.wellbeingPosts)
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
                initialParams={{
                    tabData
                }}
                name="Articles"
                component={Tabs.Articles}
                listeners={{ focus: articleEvent }}
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
                initialParams={{
                    tabData
                }}
                name="Videos"
                component={Tabs.Videos}
                listeners={{ focus: videosEvent }}
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
                initialParams={{
                    tabData
                }}
                name="Podcasts"
                component={Tabs.Podcasts}
                listeners={{ focus: podcastsEvent }}
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
                initialParams={{
                    tabData
                }}
                name="Stories"
                component={Tabs.Stories}
                listeners={{ focus: storiesEvent }}
            />
        </Tab.Navigator>
    );
};
export default WellbeingTabs