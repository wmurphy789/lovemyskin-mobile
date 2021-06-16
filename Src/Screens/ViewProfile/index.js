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
  RefreshControl,
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
import ConfirmPopupModal from "../../Components/ConfirmPopup";
import { StackActions } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveHeight,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
import NetInfo from "@react-native-community/netinfo";
import { showmessage } from "../../Support/Validations";
import { setLoginStateAction } from "../../Redux/Actions/AuthActions";
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
  const [shhowLogoutModal, setShowLogoutModal] = useState(false);
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state?.ProfileReducer);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      // const internetStatus = await NetInfo.fetch();
      // if (!internetStatus.isConnected) {
      // showmessage("Please check your internet connection");
      dispatch(getProfileAction(navigation));
      // }
    });

    return unsubscribe;
    // Return the function to unsubscribe from the event so it gets removed on unmount
  }, []);

  const ItemPressed = (item) => {
    if (item.title == AppConstants.logout) {
      setShowLogoutModal(true);
    } else {
      Methods.navigate(navigation, item.navigate);
    }
  };
  const logout = async () => {
    setShowLogoutModal(false);
    const internetStatus = await NetInfo.fetch();
    if (!internetStatus.isConnected) {
      showmessage("Please check your internet connection");
    } else {
      DataManager.clearLocalStorage();
      dispatch(setLoginStateAction(false));
    }
  };
  const mainView = () => (
    <View style={styles.container}>
      <Loader load={profileState?.isLoading || profileState?.isImageUpdated} />
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
            ? ""
            : profileState?.userProfileData?.first_name +
              " " +
              profileState?.userProfileData?.last_name}
        </Text>
        <Text style={styles.profileId}>
          {profileState?.userProfileData?.username == "" ||
          !profileState?.userProfileData?.username
            ? ""
            : "@" + profileState?.userProfileData?.username}
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
          // refreshControl={
          //   <RefreshControl refreshing={true} onRefresh={alert("njkjln")} />
          // }
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
    <View style={styles.container}>
      <ConfirmPopupModal
        load={shhowLogoutModal}
        onClose={() => {
          setShowLogoutModal(false);
        }}
        text="Are you sure, you want to logout?"
        onAction={() => logout()}
      />
      {mainView()}
    </View>
  );
};

export default ViewProfile;
