import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Methods from '../../Support/Methods'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'
const demoImage = "https://s3.amazonaws.com/rentalutions-assets/marketing/personas/Character-Mark.jpg"
const options = [
    {
        image: AppImages.lightGreenEditIcon,
        title: AppConstants.editProfile,
        navigate: "EditProfile"
    }, {
        image: AppImages.contactUsIcon,
        title: AppConstants.contactUs,
        navigate: "ContactUs"
    }, {
        image: AppImages.greenNoteIcon,
        title: AppConstants.privacyPolicy,
        navigate: "PrivacyPolicy"
    },
    {
        image: AppImages.greenLockIcon,
        title: AppConstants.termsAndConditions,
        navigate: "TermsCondition"
    }, {
        image: AppImages.redLogOutIcon,
        title: AppConstants.logout,
        navigate: "Logout"
    },
]

const ViewProfile = ({ navigation }) => {
    const mainView = () => (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={{ uri: demoImage }} style={styles.profileImage} />
                <Text style={styles.profileName}>Andrew Philip</Text>
                <Text style={styles.profileId}>@Andrew</Text>
            </View>
            <View style={styles.menuContainer}>
                {options.map((item, index) => (
                    <TouchableOpacity
                        activeOpacity={1}
                        key={index}
                        onPress={() => {
                            index == options.length - 1
                                ? alert("Logout")                                            // action for logout
                                : Methods.navigate(navigation, item.navigate)                // action for navigation
                        }}>
                        <View style={styles.menuItem} key={index}>
                            <Image source={item.image} style={styles.menuItemIcon} />
                            <Text style={styles.menuItemTitle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
    return (
        <ScrollView bounces={false} keyboardShouldPersistTaps='always'>
            {mainView()}
        </ScrollView>
    )
}

export default ViewProfile
