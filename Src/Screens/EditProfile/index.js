import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import { SimpleInput } from "../../Components/Input/Input";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const demoImage =
  "https://s3.amazonaws.com/rentalutions-assets/marketing/personas/Character-Mark.jpg";
const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CurvedHeader
        title={AppConstants.editProfile}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          Methods.goBack(navigation);
        }}
      />
      <View style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
        >
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: demoImage }} style={styles.profileImage} />
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                alert("open imagepicker");
              }}
            >
              <Image
                source={AppImages.darkGreenEditIcon}
                style={styles.editImage}
              />
            </TouchableOpacity>
          </View>
          <SimpleInput
            placeholder="First Name"
            customStyles={{ alignSelf: "center" }}
          />
          <SimpleInput placeholder="Last Name" customStyles={styles.input} />
          <SimpleInput placeholder="User Name" customStyles={styles.input} />
          <SimpleInput
            placeholder="Email Address"
            customStyles={styles.input}
          />
          <TouchableOpacity
            onPress={() => Methods.navigate(navigation, "ChangePassword")}
            style={styles.changePasswordButton}
          >
            <Text style={styles.changePasswordText}>
              {AppConstants.changePassword}
            </Text>
          </TouchableOpacity>
          <FullButton title={AppConstants.saveChanges} />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfile;
