import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { FullButton } from '../../Components/Button'
import { CurvedHeader } from '../../Components/Header'
import { SimpleInput } from '../../Components/Input/Input'
import Methods from '../../Support/Methods'

import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'
const PrivacyPolicy = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CurvedHeader
                title={AppConstants.privacyPolicy}
                leftIcon={AppImages.backIcon}
                leftPress={() => { Methods.goBack(navigation) }}
            />
            <ScrollView keyboardShouldPersistTaps='always' >
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
                <Text style={styles.paragraph}>{AppConstants.loremIpsum}</Text>
            </ScrollView>
        </View >
    )
}
export default PrivacyPolicy


