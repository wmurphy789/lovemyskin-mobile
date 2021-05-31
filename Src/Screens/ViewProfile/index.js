import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
const demoImage =
  "https://s3.amazonaws.com/rentalutions-assets/marketing/personas/Character-Mark.jpg";
const options = [
  {
    image: AppImages.lightGreenEditIcon,
    title: AppConstants.editProfile,
    navigate: "EditProfile",
  },
  {
    image: AppImages.contactUsIcon,
    title: AppConstants.contactUs,
    navigate: "ContactUs",
  },
  {
    image: AppImages.greenNoteIcon,
    title: AppConstants.privacyPolicy,
    navigate: "PrivacyPolicy",
  },
  {
    image: AppImages.greenLockIcon,
    title: AppConstants.termsAndConditions,
    navigate: "TermsCondition",
  },
  {
    image: AppImages.redLogOutIcon,
    title: AppConstants.logout,
    navigate: "SignIn",
  },
];

const ViewProfile = ({ navigation }) => {
  const mainView = () => (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: demoImage }} style={styles.profileImage} />
        <Text style={styles.profileName}>Andrew Philip</Text>
        <Text style={styles.profileId}>@Andrew</Text>
      </View>
      <View style={styles.menuContainer}>
        <ScrollView
          bounces={false}
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: responsiveHeight(10) }}
        >
          {options.map((item, index) => (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              onPress={() => {
                Methods.navigate(navigation, item.navigate); // action for navigation
              }}
            >
              <View
                style={[
                  styles.menuItem,
                  {
                    marginBottom: index == options.length - 1 ? 100 : 30,
                  },
                ]}
                key={index}
              >
                <Image source={item.image} style={styles.menuItemIcon} />
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
  return (
    // <ScrollView
    //     contentContainerStyle={styles.container}
    //     bounces={false}
    //     showsVerticalScrollIndicator={false}>
    //     {mainView()}
    // </ScrollView>
    <View style={styles.container}>{mainView()}</View>
  );
};

export default ViewProfile;
