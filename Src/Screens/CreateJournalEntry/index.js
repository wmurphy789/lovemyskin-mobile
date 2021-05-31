import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const CreateJournalEntry = (props) => {
  const mainView = () => (
    <View style={styles.container}>
      <Text style={styles.infoText}>{AppConstants.HowFeelingToday}</Text>
      <TouchableOpacity>
        <View style={styles.dropDown}>
          <Text style={styles.dropDownText}>Good</Text>
          <Image
            source={AppImages.dropdownicon}
            style={styles.dropDownImage}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <View>
        <TextInput
          multiline
          maxLength={500}
          placeholder={AppConstants.typeYourJournalEntryHere}
          style={styles.input}
        />
        <Image
          source={AppImages.mike}
          style={styles.mikeImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.uploadImageContainer}>
        <TouchableOpacity style={styles.cameraButton}>
          <Image source={AppImages.greenCameraIcon} style={styles.cameraIcon} />
          <Text style={styles.cameraText}>{AppConstants.uploadTakePhoto}</Text>
        </TouchableOpacity>
      </View>

      <FullButton
        title={AppConstants.createAffirmation}
        customStyles={styles.button}
      />
    </View>
  );
  return (
    <>
      <CurvedHeader
        title={AppConstants.CreateJournalEntry}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView bounces={false} keyboardShouldPersistTaps="always">
        {mainView()}
      </ScrollView>
    </>
  );
};

export default CreateJournalEntry;
