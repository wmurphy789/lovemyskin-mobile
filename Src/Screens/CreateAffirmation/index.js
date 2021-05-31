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
} from "react-native";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const CreateAffirmation = ({ navigation }) => {
  function goBack() {
    Methods.goBack(navigation);
  }

  return (
    <View style={styles.container}>
      <CurvedHeader
        title={AppConstants.myAffirmation}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          goBack();
        }}
      />
      {/* <View style={styles.container}> */}
      {/* <CurvedHeader
                 title={AppConstants.myAffirmation}
                 leftIcon={AppImages.backIcon}
                 leftPress={() => {goBack()}} /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: responsiveHeight(5) }}
      >
        <Text style={styles.infoText}>
          {AppConstants.createYourAffirmation}
        </Text>
        <TextInput
          multiline
          maxLength={500}
          placeholder={AppConstants.typeYourAffirmationHere}
          style={styles.input}
        />
        <View style={styles.addMusicView}>
          <Text style={styles.addMusicText}>
            {AppConstants.addMusicToYourAffirmation}
          </Text>
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
        />
      </ScrollView>
      {/* </View> */}
    </View>
  );
};

export default CreateAffirmation;
