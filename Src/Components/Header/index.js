import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { AppColors } from '../../Theme/AppColors'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'

export const CurvedHeader = ({ title, leftIcon, leftPress, rightIcon, RightPress }) => {
    const HeaderButton = ({ image, onPress, underlayColor }) => (
        <TouchableHighlight style={styles.curveheaderButton}
            underlayColor={underlayColor}
            activeOpacity={1}
            onPress={onPress}>
            <Image
                source={image}
                style={styles.curveHeaderIcon} />
        </TouchableHighlight>
    )
    return (
        <SafeAreaView style={{ backgroundColor: AppColors.main }}>
            <View style={styles.curveHeaderContainer}>
                <ImageBackground
                    resizeMode="stretch"
                    source={AppImages.curveSmallHeaderImage}
                    style={styles.curveHeaderImage}>

                    <View style={styles.curveHeaderButtonsView}>
                        <HeaderButton               // right button
                            image={leftIcon}
                            underlayColor='rgba(33, 131, 129, 0.5)'
                            onPress={leftPress} />

                        <HeaderButton               // left button for future improvements
                            image={rightIcon}
                            underlayColor='rgba(255,255,255, 0.5)'
                            onPress={RightPress} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

