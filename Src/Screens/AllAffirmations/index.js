import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'

const AllAffirmations = () => {

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

    const mainView = () => {
        return (
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.circle} />
                    <Text style={styles.affirmationText}>{AppConstants.affirmations}</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image source={AppImages.addMyAffirmation} style={styles.addMyAffirmation} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lowerContainer}>
                    <View style={styles.lowerInnerContainer}>
                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            // horizontal
                            contentContainerStyle={styles.tilesflatlist}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={[styles.tileView, { backgroundColor: item.tileColor }]}>
                                        <View style={styles.tileInner}>
                                            <Image source={item.tileImage} style={styles.tileImage} />
                                            <Text style={styles.tileText}>{item.tileName}</Text>
                                        </View>
                                        <Text style={styles.tileCount}>{item.tileCount}</Text>
                                    </View>
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
