import React from 'react'
import { View, Text, ScrollView, } from 'react-native'
import { CurvedHeader } from '../../Components/Header'
import Methods from '../../Support/Methods'

import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'
const TermsCondition = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CurvedHeader
                title={AppConstants.termsAndConditions}
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

export default TermsCondition




