import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { FullButton } from '../../Components/Button'
import { CurvedHeader } from '../../Components/Header'
import { SimpleInput } from '../../Components/Input/Input'
import Methods from '../../Support/Methods'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import { responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import styles from './styles'

const demoImage = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/eye_color_and_shape_slideshow/493ss_thinkstock_rf_blue_eye.jpg?resize=375px:250px&output-quality=50"

const SkinDiagnosisReport = ({ navigation }) => {

    const _renderItem = ({ item, index }) => (
        <View style={styles.listView}>
            <View style={{ flexDirection: "row", alignItems: 'center', }}>
                <Image
                    resizeMode='contain'
                    source={AppImages.greenPillIcon}
                    style={styles.pillIcon} />
                <Text style={styles.answerText}>{item}</Text>
            </View>
            <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>{AppConstants.readMore}</Text>
            </TouchableOpacity>
        </View>
    )
    const mainView = () => (
        <View style={styles.container}>
            {/* <CurvedHeader
                title={AppConstants.skinDiagnosis}
                leftIcon={AppImages.backIcon}
                leftPress={() => { alert("Go back") }}
            /> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}>
                <Image
                    source={{ uri: demoImage }}
                    style={styles.imageContainer} />
                <Text style={styles.infoText}>{AppConstants.topAnswersranked}</Text>
                <FlatList
                    data={AppConstants.dummyAnswers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={_renderItem}
                />
            </ScrollView>
        </View>
    )
    return (
        // <ScrollView bounces={false} keyboardShouldPersistTaps='always'>
        //     {mainView()}
        // </ScrollView>
        <View style={styles.container}>
            <CurvedHeader
                title={AppConstants.skinDiagnosis}
                leftIcon={AppImages.backIcon}
                leftPress={() => { Methods.goBack(navigation) }}
            />
            {mainView()}
        </View>
    )
}

export default SkinDiagnosisReport
