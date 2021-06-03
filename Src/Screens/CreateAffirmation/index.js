import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const CreateAffirmation = ({ navigation }) => {
  function goBack() {
    Methods.goBack(navigation);
  }
  return (
    <View style={styles.container}>
      {/* <CurvedHeader
        title={AppConstants.myAffirmation}
        leftIcon={AppImages.backIcon}
        infoText={AppConstants.createYourAffirmation}
        leftPress={() => {
          goBack();
        }}
      /> */}
      <View style={styles.curveHeaderContainer}>
        <ImageBackground
          resizeMode="stretch"
          source={AppImages.curveBigHeaderImage}
          style={styles.curveHeaderImage}
        >
          <View style={styles.curveHeaderButtonsView}>
            <TouchableHighlight
              style={styles.curveheaderButton}
              underlayColor={"rgba(33, 131, 129, 0.5)"}
              activeOpacity={1}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={AppImages.backIcon}
                style={styles.curveHeaderIcon}
              />
            </TouchableHighlight>
          </View>
          <Text style={[styles.title, { marginTop: 12 }]}>
            {AppConstants.myAffirmation}
          </Text>
        </ImageBackground>
      </View>
      <Text style={styles.infoText}>{AppConstants.createYourAffirmation}</Text>
      {/* <View style={{ height: 10, width: "100%", marginTop: 20, backgroundColor: "#fff" }} /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          marginBottom: responsiveHeight(5),
          // marginTop: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            marginLeft: responsiveWidth(3.5),
            marginTop: 0,
            marginBottom: 10,
          }}
        ></View>

        <TextInput
          multiline
          maxLength={500}
          placeholder={AppConstants.typeYourAffirmationHere}
          style={styles.input}
        />
        <View style={styles.addMusicView}>
          {/* <Text style={styles.addMusicText}>{}</Text> */}
          <TextInput
            style={styles.addMusicText}
            placeholder={AppConstants.addMusicToYourAffirmation}
          />
          <TouchableOpacity>
            <Image source={AppImages.searchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={AppConstants.dummyMusic}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.musicflatlist}
          renderItem={({ item, index }) => (
            <View style={styles.musicView}>
              <ImageBackground
                source={{ uri: item.albumPoster }}
                style={styles.musicAlbumPoster}
              >
                {item.playing ? (
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image
                      source={AppImages.pauseGreenIcon}
                      style={styles.playPauseButton}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image
                      source={AppImages.playGreenIcon}
                      style={styles.playPauseButton}
                    />
                  </TouchableOpacity>
                )}
              </ImageBackground>
              <View style={styles.musicDetailsView}>
                <View>
                  <Text style={styles.musicAlbumTitle}>{item.albumTitle}</Text>
                  <Text style={styles.musicAlbumSong}>{item.albumSong}</Text>
                </View>
                <TouchableOpacity style={styles.useThisAudioButton}>
                  <Text style={styles.useThisAudio}>
                    {AppConstants.useThisAudio}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <FullButton
          title={AppConstants.createAffirmation}
          customStyles={styles.button}
          onPress={() => Methods.navigate(navigation, "AffirmationStack")}
        />
      </ScrollView>
      {/* </View> */}
    </View>
  );
};

export default CreateAffirmation;
