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
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
} from "../../Theme/ResponsiveDimensions";
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
    title: "Terms & Conditions",
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
          contentContainerStyle={{
            paddingVertical: 30,
          }}
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
                    marginBottom: index == options.length - 1 ? 90 : 30,
                  },
                ]}
                key={index}
              >
                <Image source={item.image} style={styles.menuItemIcon} />
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.9),
                    color:
                      index == options.length - 1
                        ? AppColors.red
                        : AppColors.black,
                    fontFamily:
                      index == options.length - 1
                        ? AppFonts.regular
                        : AppFonts.light,
                  }}
                >
                  {item.title}
                </Text>
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
