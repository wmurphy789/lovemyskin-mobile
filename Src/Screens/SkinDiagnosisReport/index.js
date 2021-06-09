import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
import { useSelector } from "react-redux";
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

const SkinDiagnosisReport = ({ navigation }) => {
  const SkinDiagonseState = useSelector(
    (state) => state.submitFeedbackAutodrumReducer
  );

  const openReadMore = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("cannot open this url.");
    }
  };

  const _renderItem = ({ item, index }) => (
    <View style={styles.listView}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          resizeMode="contain"
          source={AppImages.greenPillIcon}
          style={styles.pillIcon}
        />
        <Text style={styles.answerText}>{item?.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.readMoreButton}
        onPress={() => openReadMore(item?.readMoreUrl)}
      >
        <Text style={styles.readMoreText}>{AppConstants.readMore}</Text>
      </TouchableOpacity>
    </View>
  );
  const mainView = () => (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <Image
          source={{ uri: SkinDiagonseState?.image }}
          style={styles.imageContainer}
        />
        <View style={styles.topAnswersrankedView}>
          <Text style={styles.infoText}>{AppConstants.topAnswersranked}</Text>
        </View>
        <FlatList
          data={SkinDiagonseState?.predictions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </ScrollView>
    </View>
  );
  return (
    <View style={styles.container}>
      <CurvedHeader
        title={AppConstants.skinDiagnosis}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          Methods.goBack(navigation);
        }}
      />
      {mainView()}
    </View>
  );
};

export default SkinDiagnosisReport;
