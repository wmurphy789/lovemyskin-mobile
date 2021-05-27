import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { FullButton } from '../../Components/Button'
import { IconInput } from '../../Components/Input/Input'
import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'

const SignIn = ({ navigation }) => {
    const mainView = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground
                    resizeMode='stretch'
                    style={styles.headerImage}
                    source={AppImages.curveBigHeaderImage}>
                    <Image source={AppImages.logoIcon} style={styles.logoImage} />
                    <Text style={styles.welcomeBackText}>{AppConstants.welcomeBack}</Text>
                </ImageBackground>

            </View>
            <Text style={styles.introText}>{AppConstants.loremIpsum}</Text>
            <IconInput
                image={AppImages.greenMailIcon}
                placeholder={AppConstants.enterYourEmailAddress}
                customStyles={styles.input} />
            <IconInput
                image={AppImages.greenLockSimpleIcon}
                placeholder={AppConstants.enterYourPassword}
                customStyles={styles.input} />
            <TouchableOpacity
                onPress={() => { navigation.navigate("ForgotPassword") }}
                style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>{AppConstants.forgotPassword}</Text>
            </TouchableOpacity>
            <FullButton title={AppConstants.signIn} />
            <TouchableOpacity
                onPress={() => { navigation.navigate("SignUp") }}
                style={styles.dontHaveAccountButton}>
                <Text style={styles.dontHaveAccountText}>{AppConstants.dontHaveAnAccount}</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <ScrollView bounces={false} keyboardShouldPersistTaps='always'>
            {mainView()}
        </ScrollView>
    )
}

export default SignIn
