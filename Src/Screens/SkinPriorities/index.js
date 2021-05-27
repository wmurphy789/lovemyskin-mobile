
import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { FullButton } from '../../Components/Button'
import { IconInput } from '../../Components/Input/Input'
import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'

const SkinPriorities = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const mainView = () => (
        <View style={{ width: '100%', backgroundColor: "#f0f0f0" }}>
            <TouchableHighlight style={styles.backButton}
                underlayColor='rgba(33, 131, 129, 0.5)'
                activeOpacity={1}
                onPress={() => { navigation.goBack() }}>
                <Image
                    source={AppImages.backIcon}
                    style={styles.backImage} />
            </TouchableHighlight>
            <Text style={styles.titleText}>{AppConstants.whatisthebiggestPriority}</Text>
            {AppConstants.priorities.map((item, index) => (
                <TouchableOpacity onPress={() => { setSelectedIndex(index) }} key={index} >
                    <View style={[styles.listItem, {
                        backgroundColor: index == selectedIndex ? 'rgba(33, 131, 129, 0.3)' : AppColors.lightGrey,
                        borderColor: index == selectedIndex ? AppColors.main : AppColors.mediumGrey,
                    }]} >
                        <Text style={[styles.listText, {
                            fontFamily: index == selectedIndex ? AppFonts.regular : AppFonts.light,
                            color: index == selectedIndex ? AppColors.main : AppColors.mediumGrey
                        }]}>{item}</Text>
                    </View>
                </TouchableOpacity>
            ))
            }
            <TouchableOpacity
                onPress={() => { navigation.goBack() }}
                style={styles.dontAnswerButton}>
                <Text style={styles.dontAnswerText}>{AppConstants.iDontWantToAnswerThis}</Text>
            </TouchableOpacity>
            <FullButton title={AppConstants.continue} />
        </View >
    )

    return (
        <ScrollView bounces={false} keyboardShouldPersistTaps='always'>
            {mainView()}
        </ScrollView>
    )
}
export default SkinPriorities
