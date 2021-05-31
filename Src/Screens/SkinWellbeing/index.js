import React from 'react'
import { View, Text, ScrollView, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();
const SkinWellbeing = () => {
    const _renderItem = ({ item, index }) => {          // render upper list
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.itemView}>
                    <Image source={{ uri: item.image }} style={styles.itemImage} />
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
            </TouchableOpacity>)
    }
    const __renderItem = ({ item, index }) => (        // render tabs data
        <View style={styles.PillarItemView}>
            <Image source={{ uri: item.image }}
                style={styles.pillarImage} />
            <View style={styles.pillarInfoView}>
                <Text style={styles.pillerHeading}>{item.title}</Text>
                <View style={styles.pillarStatusInfo}>
                    <View style={styles.PillarlikeCommentView}>
                        <TouchableOpacity>
                            <Image source={AppImages.redHeartIcon} style={styles.PillarlikeCommentImage} />
                        </TouchableOpacity>
                        <Text style={styles.pillarLikesCount}>{item.likes}</Text>
                        <Text style={styles.pillarLikes}>{AppConstants.likes}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.PillarlikeCommentView}>
                            <Image source={AppImages.greenChatIcon} style={styles.PillarlikeCommentImage} />
                            <Text style={styles.pillarComments}>{AppConstants.comments}</Text>
                            <Text style={styles.pillarCommentsCount}>{item.comments}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    const renderPillars = (data) => {                      // convert data to Tabs content 
        return (<FlatList
            data={data}
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.tabsContentFlatlist}
            renderItem={__renderItem} />)
    }

    // pages for material top tabnav
    const Articles = () => { return (renderPillars(AppConstants.dummydata)) }       // render Article Tab data
    const Videos = () => { return (renderPillars(AppConstants.dummydata)) }         // render Videos Tab data
    const Podcasts = () => { return (renderPillars(AppConstants.dummydata)) }       // render Podcasts Tab data
    const Stories = () => { return (renderPillars(AppConstants.dummydata)) }        // render Stories Tab data

    const MyTabs = () => {          // material Top tab nav
        return (
            <Tab.Navigator tabBarOptions={{
                indicatorStyle: styles.indicator,
                pressColor: AppColors.main,
                style: {
                    elevation: 0,
                    shadowColor: "#ffffff",
                    shadowOffset: { width: 0, height: 0 }, // change this for more shadow
                    shadowOpacity: 0.4,
                    shadowRadius: 6,
                },
            }}>
                <Tab.Screen
                    options={{
                        tabBarLabel: ({ focused }) =>
                            focused
                                ? (<Text style={styles.selected}>{AppConstants.articles}</Text>)
                                : (<Text style={styles.notSelected}>{AppConstants.articles}</Text>)
                    }}
                    name="Articles"
                    component={Articles} />
                <Tab.Screen
                    options={{
                        tabBarLabel: ({ focused }) =>
                            focused
                                ? (<Text style={styles.selected}>{AppConstants.videos}</Text>)
                                : (<Text style={styles.notSelected}>{AppConstants.videos}</Text>)
                    }}
                    name="Videos"
                    component={Videos} />
                <Tab.Screen
                    options={{
                        tabBarLabel: ({ focused }) =>
                            focused
                                ? (<Text style={styles.selected}>{AppConstants.podcasts}</Text>)
                                : (<Text style={styles.notSelected}>{AppConstants.podcasts}</Text>)
                    }}
                    name="Podcasts"
                    component={Podcasts} />
                <Tab.Screen
                    options={{
                        tabBarLabel: ({ focused }) =>
                            focused
                                ? (<Text style={styles.selected}>{AppConstants.stories}</Text>)
                                : (<Text style={styles.notSelected}>{AppConstants.stories}</Text>)
                    }}
                    name="Stories"
                    component={Stories} />
            </Tab.Navigator>

        );
    }



    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.curveHeaderContainer}>
                    <ImageBackground
                        resizeMode="stretch"
                        source={AppImages.curveBigHeaderImage}
                        style={styles.curveHeaderImage}>
                        <Text style={styles.title}>{AppConstants.skinWellbeing}</Text>
                        <Text style={styles.infoText}>{AppConstants.chooseFromOurPillarsOfWellness}</Text>
                    </ImageBackground>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <FlatList
                            data={AppConstants.wellNessPillars}
                            renderItem={_renderItem}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.pillarsFlatlistStyle}
                            horizontal
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </ScrollView>
                </View>
                {/* <View style={styles.tabsContainer}> */}
                {MyTabs()}
                {/* </View> */}
            </View>
        </View>
    )
}

export default SkinWellbeing
