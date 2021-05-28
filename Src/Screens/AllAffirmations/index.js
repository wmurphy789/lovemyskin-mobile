import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import Methods from '../../Support/Methods'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'

const AllAffirmations = ({ navigation }) => {

    const options = [
        {
            tileName: AppConstants.skinPositivity,
            tileImage: AppImages.skinPositivityIcon,
            tileCount: 20,
            tileColor: "#BDEEEF"
        },
        {
            tileName: AppConstants.stressRelief,
            tileImage: AppImages.stressReliefIcon,
            tileCount: 20,
            tileColor: "#A1DBDE"
        },
        {
            tileName: AppConstants.managingDepression,
            tileImage: AppImages.depressionIcon,
            tileCount: 20,
            tileColor: "#98EBBF"
        },
        {
            tileName: AppConstants.overcomingAnxiety,
            tileImage: AppImages.anxietyIcon,
            tileCount: 20,
            tileColor: "#D2F4DB"
        },
        {
            tileName: AppConstants.selfLove,
            tileImage: AppImages.selfLoveIcon,
            tileCount: 20,
            tileColor: "#5E9ECC"
        },
        {
            tileName: AppConstants.thankfulGrateful,
            tileImage: AppImages.thankfulIcon,
            tileCount: 20,
            tileColor: "#606CAD"
        }
    ]

    function createAffirmation() {
        Methods.navigate(navigation, "CreateAffirmation")
    }
    function viewAffirmation(screenTitle, screenColor) {
        navigation.navigate("ViewAffirmation", {
            screenTitle,
            screenColor
        })
    }
    const HeaderComponent = () => (
        <TouchableOpacity activeOpacity={0.5} onPress={() => viewAffirmation(AppConstants.myAffirmations, "#218381")}>
            <View style={styles.myAffirmationsTileView}>
                <View style={styles.myAffirmationsTileViewTop}>
                    <Image source={AppImages.myAffirmationsIcon} style={styles.myAffirmationsTileImage} />
                    <Text style={styles.myAffirmationsTileText}>{AppConstants.myAffirmations}</Text>
                </View>
                <View style={styles.myAffirmationsTileViewBottom}>
                    <Text style={styles.myAffirmationsTileCount}>20</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    const mainView = () => {
        return (
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.circle} />
                    <Text style={styles.affirmationText}>{AppConstants.affirmations}</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => createAffirmation()}>
                        <ImageBackground source={AppImages.gradientButtonImage} style={styles.addMyAffirmation} >
                            <Image source={AppImages.editWhiteIcon} resizeMode='contain' style={styles.addAffirmationIcon} />
                            <Text style={styles.addAffirmationText}>{AppConstants.addMyOwnAffirmation}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.lowerContainer}>
                    <View style={styles.lowerInnerContainer}>
                        <Text style={styles.chooseACategory}>{AppConstants.chooseACategory}</Text>
                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            // horizontal
                            contentContainerStyle={styles.tilesflatlist}
                            ListHeaderComponent={() => <HeaderComponent />}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => { viewAffirmation(item.tileName, item.tileColor) }}>
                                        <View style={[styles.tileView, { backgroundColor: item.tileColor }]}>
                                            <View style={styles.tileInner}>
                                                <Image source={item.tileImage} style={styles.tileImage} />
                                                <Text style={styles.tileText}>{item.tileName}</Text>
                                            </View>
                                            <Text style={styles.tileCount}>{item.tileCount}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            {mainView()}
        </ScrollView>
    )
}

export default AllAffirmations
