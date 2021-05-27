import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { FullButton } from '../../Components/Button'
import { CurvedHeader } from '../../Components/Header'
import { SimpleInput } from '../../Components/Input/Input'
import Methods from '../../Support/Methods'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import { responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'

const demoImage = "https://s3.amazonaws.com/rentalutions-assets/marketing/personas/Character-Mark.jpg"
const SkinDiagnosis = ({ }) => {
    const mainView = () => (
        <View style={styles.container}>
            <CurvedHeader
                title={AppConstants.skinDiagnosis}
                leftIcon={AppImages.backIcon}
                leftPress={() => { alert("Go back") }}
            />
            <Text style={styles.infoText}>{AppConstants.firstAddPictureOfYourSkinConcern}</Text>
            <View style={styles.uploadImageContainer}>
                <TouchableOpacity
                    onPress={() => { alert("open Iagepicker") }}
                    style={styles.cameraButton}>
                    <Image source={AppImages.greenCameraIcon} style={styles.cameraIcon} />
                    <Text style={styles.cameraText}>{AppConstants.selectPhoto}</Text>
                </TouchableOpacity>
            </View>
            <FullButton
                title={AppConstants.submit}
                customStyles={styles.button} />
            <View style={{ alignItems: 'center', }}>
                <TouchableOpacity style={styles.feedbackButton}>
                    <Text style={styles.feedbacktext}>{AppConstants.feedback.toUpperCase()}</Text>
                </TouchableOpacity>
                <Text style={styles.poweredbyAutoderm}>{AppConstants.poweredbyAutoderm}</Text>
            </View>
        </View>
    )
    return (
        <ScrollView bounces={false} keyboardShouldPersistTaps='always'>
            {mainView()}
        </ScrollView>
    )
}

export default SkinDiagnosis
