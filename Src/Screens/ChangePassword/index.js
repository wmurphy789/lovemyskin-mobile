import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { FullButton } from '../../Components/Button'
import { CurvedHeader } from '../../Components/Header'
import { SimpleInput } from '../../Components/Input/Input'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import { responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'
const ChangePassword = ({ navigation }) => {
    const mainView = () => (
        <View style={styles.container}>
            <CurvedHeader
                title={AppConstants.changePassword}
                leftIcon={AppImages.backIcon}
                leftPress={() => { Methods.goBack(navigation) }}
            />
            <SimpleInput
                placeholder={AppConstants.enterOldPassword}
                customStyles={styles.input} />
            <SimpleInput
                placeholder={AppConstants.enterNewPassword}
                customStyles={styles.input} />
            <SimpleInput
                placeholder={AppConstants.confirmNewPassword}
                customStyles={styles.input} />
            <FullButton
                title={AppConstants.changePassword}
                customStyles={styles.button} />
        </View>
    )
    return (
        <ScrollView keyboardShouldPersistTaps='always'>
            {mainView()}
        </ScrollView>
    )
}

export default ChangePassword


