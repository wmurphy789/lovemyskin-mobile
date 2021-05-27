
import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { FullButton } from '../../Components/Button'
import { IconInput } from '../../Components/Input/Input'
import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'

const ForgotPassword = ({ navigation }) => {
    const mainView = () => (
        <View style={styles.container}>
            <TouchableHighlight style={styles.backbutton}
                underlayColor='rgba(33, 131, 129, 0.5)'
                activeOpacity={1}
                onPress={() => { navigation.goBack() }}>
                <Image
                    source={AppImages.backIcon}
                    style={styles.backIcon} />
            </TouchableHighlight>
            <Text style={styles.ForgotPasswordText}>{AppConstants.forgotPassword}!</Text>
            <IconInput
                image={AppImages.greenMailIcon}
                placeholder={AppConstants.enterYourEmailAddress} />
            <FullButton
                customStyles={styles.button}
                title={AppConstants.submit} />
        </View>
    )

    return (
        <ScrollView bounces={false} keyboardShouldPersistTaps='always'>
            {mainView()}
        </ScrollView>
    )
}

export default ForgotPassword
