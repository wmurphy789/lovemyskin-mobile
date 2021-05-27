import React from 'react'
import { View, Text, ScrollView, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'

const SkinWellbeing = () => {
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemView}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
        )
    }

    const mainView = () => {
        return (
            <View >
                <View style={styles.curveHeaderContainer}>
                    <ImageBackground
                        resizeMode="stretch"
                        source={AppImages.curveSmallHeaderImage}
                        style={styles.curveHeaderImage}>
                        <Text style={styles.title}>{AppConstants.skinWellbeing}</Text>
                        <Text style={styles.infoText}>{AppConstants.chooseFromOurPillarsOfWellness}</Text>
                    </ImageBackground>
                </View>
                <FlatList
                    data={AppConstants.wellNessPillars}
                    renderItem={_renderItem}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.pillarsFlatlistStyle}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                />
                {renderPillars()}
            </View>
        )
    }

    const renderPillars = (data = AppConstants.dummydata) => {                      // Pass your data here 
        return (
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
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
                                    <Text style={styles.pillarLikes}>Likes</Text>
                                </View>
                                <TouchableOpacity>
                                    <View style={styles.PillarlikeCommentView}>
                                        <Image source={AppImages.greenChatIcon} style={styles.PillarlikeCommentImage} />
                                        <Text style={styles.pillarComments}>Comments</Text>
                                        <Text style={styles.pillarCommentsCount}>{item.comments}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )} />
        )
    }

    return (
        <View style={styles.container}>
            {mainView()}
        </View>
    )
}

export default SkinWellbeing
