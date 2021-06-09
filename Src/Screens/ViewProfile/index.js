import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import { getProfileAction } from "../../Redux/Actions/ProfileActions";
import { DataManager } from "../../Support/Datamanager";
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

const ViewProfile = ({ navigation, route }) => {
  const [loadingImage, setLoadingImage] = useState(false);

  const dispatch = useDispatch();
  const profileState = useSelector((state) => state?.ProfileReducer);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getProfileAction(navigation));
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [route]);

  const ItemPressed = (item) => {
    if (item.title == AppConstants.logout) {
      Alert.alert("", "Are you sure you want to logout.", [
        {
          text: "No",
          onPress: () => console.log("pressed no"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            DataManager.clearLocalStorage();
            Methods.navigate(navigation, "SignIn");
          },
        },
      ]);
    } else {
      Methods.navigate(navigation, item.navigate);
    }
  };
  const mainView = () => (
    <View style={styles.container}>
      <Loader load={profileState?.isLoading} />
      <View style={styles.profileContainer}>
        <>
          <Image
            onLoadStart={() => {
              setLoadingImage(true);
            }}
            onLoadEnd={() => {
              setLoadingImage(false);
            }}
            source={
              profileState?.userProfileData?.photo
                ? { uri: profileState?.userProfileData?.photo }
                : AppImages.userDummy
            }
            style={styles.profileImage}
          />
          {loadingImage && (
            <View
              style={{ position: "absolute", alignSelf: "center", bottom: 150 }}
            >
              <ActivityIndicator color="#fff" size="small" />
            </View>
          )}
        </>
        <Text style={styles.profileName}>
          {!profileState?.userProfileData?.first_name ||
          !profileState?.userProfileData?.last_name
            ? "No Name"
            : profileState?.userProfileData?.first_name +
              " " +
              profileState?.userProfileData?.last_name}
        </Text>
        <Text style={styles.profileId}>
          @
          {profileState?.userProfileData?.username == "" ||
          !profileState?.userProfileData?.username
            ? "UserId"
            : profileState?.userProfileData?.username}
        </Text>
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
              onPress={() => ItemPressed(item)}
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
