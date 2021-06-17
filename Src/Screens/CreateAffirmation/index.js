import React from "react";
import { useState } from "react";
import { useEffect ,useRef} from "react";
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
  Keyboard,
  Modal,
  KeyboardAvoidingView,
  Alert,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import Loader from "../../Components/Loader";
import {
  createAffirmationAction,
  updateAffirmationAction,
} from "../../Redux/Actions/AffirmationAction";
import Methods from "../../Support/Methods";
import { getSongsWithAlbumIds } from "../../Support/NapsterApi";
import { showmessage } from "../../Support/Validations";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
import { Audio } from "expo-av";
import { color } from "react-native-reanimated";
import ConfirmPopupModal from "../../Components/ConfirmPopup";

const CreateAffirmation = (props) => {
  const id = props?.route?.params?.item?.id;
  console.log("console of dayta", props?.route?.params?.item?.attributes);

  const [description, setDescription] = useState(
    props?.route?.params?.item?.attributes?.description || ""
  );
  const [prevSelected, setPrevSelected] = useState([]);
  const [load, setLoader] = useState(false);
  const [song, setSong] = useState("");
  const [playerState, setPlayerState] = useState(false);
  const [showRemoveModal, toggleRemoveModal]= useState(false)
  var isPlaying = false;
  const [songs, setSongs] = useState([]);
  const [filterSongs, setFilterSongs] = useState([]);
  const [sound, setSound] = React.useState();
  const [selectedSong, setSelectedSongId] = useState(
    props?.route?.params?.item?.attributes?.song_id || null
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoding] = React.useState(false);
  const [searchText, setSearchText] = useState("");
  let textinputref= useRef()
  // const events = [
  //   TrackPlayerEvents.PLAYBACK_STATE,
  //   TrackPlayerEvents.PLAYBACK_ERROR
  // ];
  const dispatch = useDispatch();
  const AffirmationState = useSelector((state) => state.AffirmationReducer);
  const createAffirmation = () => {
    setTimeout(() => {
      setLoding(false);
    }, 200);
    const des = description?.trim();

    if (des.length > 2) {
      dispatch(
        createAffirmationAction(
          { description: des, songId: selectedSong },
          props.navigation
        )
      );
    } else if (des.length > 0) {
      showmessage("Affirmation should be at least 3 characters long");
    } else {
      showmessage("Please enter your affirmation");
    }
  };
  const updateAffirmation = () => {
    setTimeout(() => {
      setLoding(false);
    }, 200);
    const des = description?.trim();

    if (des.length > 2) {
      dispatch(
        updateAffirmationAction(
          { id: id, description: des, songId: selectedSong },
          props.navigation
        )
      );
    } else if (des.length > 0) {
      showmessage("Affirmation should be at least 3 characters long");
    } else {
      showmessage("Please enter your affirmation");
    }
  };
  function goBack() {
    Methods.goBack(props.navigation);
  }

  useEffect(() => {
    if (selectedSong != null && songs.length > 0) {
      let arr = [];
      let filter = songs.filter((i) =>
        i.id.toLowerCase().includes(selectedSong.toLowerCase())
      );
      console.log("filter selected song", filter);
      // setFilterSongs(filter)
      setPrevSelected(filter);
    }
  }, [selectedSong, songs]);

  useEffect(() => {
    Audio.setIsEnabledAsync(true);
    setLoader(true);
    getSongsWithAlbumIds()
      .then((res) => {
        console.log("inside useEffect ", res);
        setLoader(false);
        if (res.tracks.length > 0) {
          setSongs(res.tracks);
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log("errrs", err);
      });
  }, []);

  const setSearch = (t) => {
    setSearchText(t);
    if (songs.length > 0) {
      setSearchText(t);
      if (t.length > 0) {
        let arr = [];
        let filter = songs.filter((i) =>
          i.name.toLowerCase().includes(t.toLowerCase())
        );
        console.log("filter songs", filter);
        setFilterSongs(filter);
      } else {
        setFilterSongs([]);
      }
    } else {
      console.log("No songs Available");
    }
  };

  useEffect(() => {
    const unsubscribe1 = props.navigation.addListener("blur", () => {
      if (sound != null) {
        sound.unloadAsync();
      }
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe1;
  }, []);

  function _onPlaybackStatusUpdate(status) {
    console.log("status of playback", status.isPlaying);
    isPlaying = status?.isPlaying == true ? true : false;

    if (isPlaying == true && playerState == false) {
      setPlayerState(true);
    }

    if (isPlaying == undefined || isPlaying == "undefined") {
      setPlayerState(false);
      setSong("");
    }
    //  isPlaying=status?.isPlaying==true ? true : false;
  }
  async function playSong(i) {
    setSong(i);
    const initialStatus = {
      shouldPlay: true,
    };
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri: i },
      initialStatus,
      _onPlaybackStatusUpdate
    );

    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const stopSound = () => {
    if (sound != null) {
      sound.unloadAsync();
      setSong("");
    }
  };
  console.log("setSongsetSong", isPlaying);

  const removeSong = () => {
    setPrevSelected([]);
    setSelectedSongId(null);
    stopSound()
    toggleRemoveModal(false);

  };

  const selectSongAction = (id) => {
    setSelectedSongId(id);
    setModalVisible(false);
    setSearch("");
  };
  const closeModal = () => {
    stopSound();
    setModalVisible(false);
    setSearch("");
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>
        <Loader load={AffirmationState.onLoad} />

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
                onPress={() => props.navigation.goBack()}
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
        <Text style={styles.infoText}>
          {id ? "Update your affirmation" : AppConstants.createYourAffirmation}
        </Text>
        {/* <View style={{ height: 10, width: "100%", marginTop: 20, backgroundColor: "#fff" }} /> */}
        <ScrollView
          // onPress={()=> Keyboard.dismiss()}
          keyboardShouldPersistTaps={'handled'}
          onScroll={() => Keyboard.dismiss()}
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
              // marginLeft: responsiveWidth(3.5),
              marginTop: 0,
              marginBottom: 10,
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
            <View style={styles.inputBox}>
              <TextInput
                multiline
                maxLength={500}
                selectionColor={AppColors.main}
                defaultValue={description}
                placeholder={AppConstants.typeYourAffirmationHere}
                style={styles.input}
                selectionColor={AppColors.main}
                autoCapitalize="sentences"
                onChangeText={(text) => setDescription(text)}
              />
            </View>
          
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true),
                stopSound();
                setTimeout(() => {
                  textinputref.current.focus()
                }, 1000);
              }}
              style={styles.addMusicView}
            >
              {/* <Text style={styles.addMusicText}>{}</Text> */}
              {/* <TextInput
              style={styles.addMusicText}
              editable={false}
              onPress={() => setModalVisible(true)}
              placeholder={AppConstants.addMusicToYourAffirmation}
              // onChangeText={(t)=>setSearch(t)}
            /> */}
              <Text style={([styles.addMusicText], { color: "#ccc" })}>
                {AppConstants.addMusicToYourAffirmation}
              </Text>

              {/* <TouchableOpacity> */}
              <Image source={AppImages.searchIcon} style={styles.searchIcon} />
              {/* </TouchableOpacity> */}
            </TouchableOpacity>
            <View>
              <FlatList
                data={prevSelected}
                keyboardShouldPersistTaps={'handled'}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.musicflatlist}
                renderItem={({ item, index }) => (
                  <View style={styles.musicView}>
                    <ImageBackground
                        source={AppImages.musicIcon}
                      style={styles.musicAlbumPoster}
                    >
                      {item.previewURL == song ? (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => stopSound()}
                        >
                          <Image
                            source={AppImages.pauseGreenIcon}
                            style={styles.playPauseButton}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => playSong(item.previewURL)}
                        >
                          <Image
                            source={AppImages.playGreenIcon}
                            style={styles.playPauseButton}
                          />
                        </TouchableOpacity>
                      )}
                    </ImageBackground>
                    <View style={styles.musicDetailsView}>
                      <View>
                        <Text style={styles.musicAlbumTitle}>
                          {item.albumName}
                        </Text>
                        <Text style={styles.musicAlbumSong}>{item.name}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          selectedSong == item.id
                            ? toggleRemoveModal(true)
                            : setSelectedSongId(item.id)
                        }
                        style={styles.useThisAudioButton}
                      >
                        <Text style={styles.useThisAudio}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
            <Modal
              animationType="slide"
              // transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >        
              <StatusBar barStyle={'dark-content'} />
            <SafeAreaView style={{flex:1 , backgroundColor : 'white'}}
            keyboardShouldPersistTaps={'always'}
            >
                <TouchableOpacity
                  style={{
                    marginVertical: responsiveHeight(2),
                    // marginTop:responsiveHeight(5),
                    marginHorizontal: responsiveWidth(5),
                  }}
                  onPress={() => closeModal()}
                >
                  <Image source={AppImages.backIcon} style={styles.closeIcon} />
                </TouchableOpacity>
                <View style={styles.addMusicView}>
                  {/* <Text style={styles.addMusicText}>{}</Text> */}
                  <TextInput
                    style={styles.addMusicText}
                    placeholder={AppConstants.addMusicToYourAffirmation}
                    onChangeText={(t) => setSearch(t)}
                    selectionColor={AppColors.main}
                    // autoFocus={true}
                    ref={textinputref}
                  />

                  <TouchableOpacity>
                    <Image
                      source={AppImages.searchIcon}
                      style={styles.searchIcon}
                    />
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={searchText.length >0? filterSongs:songs }
                  keyExtractor={(item, index) => index.toString()}
                  keyboardShouldPersistTaps={'handled'}
                  contentContainerStyle={styles.musicflatlist}
                  ListEmptyComponent={<Text style={styles.info}>No songs found</Text>}
                  renderItem={({ item, index }) => (
                    <View style={styles.musicView}>
                      <ImageBackground
                        source={AppImages.musicIcon}
                        style={styles.musicAlbumPoster}
                      >
                        {item.previewURL == song ? (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => stopSound()}
                          >
                            <Image
                              source={AppImages.pauseGreenIcon}
                              style={styles.playPauseButton}
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => playSong(item.previewURL)}
                          >
                            <Image
                              source={AppImages.playGreenIcon}
                              style={styles.playPauseButton}
                            />
                          </TouchableOpacity>
                        )}
                      </ImageBackground>
                      <View style={styles.musicDetailsView}>
                        <View>
                          <Text style={styles.musicAlbumTitle}>
                            {item.albumName}
                          </Text>
                          <Text style={styles.musicAlbumSong}>{item.name}</Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            selectedSong == item.id
                              ? setSelectedSongId(null)
                              : selectSongAction(item.id);
                            stopSound();
                          }}
                          style={styles.useThisAudioButton}
                        >
                          <Text style={styles.useThisAudio}>
                            {selectedSong == item.id
                              ? AppConstants.usedAudio
                              : AppConstants.useThisAudio}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              </SafeAreaView>
            </Modal>
            <ConfirmPopupModal
        load={showRemoveModal}
        onClose={() => {
          toggleRemoveModal(false);
        }}
        text="Are you sure, you want to remove the selected song?"
        onAction={() => removeSong()}
      />
            <FullButton
              disabled={AffirmationState?.isLoad || loading}
              title={id ? "Update Affirmation" : AppConstants.createAffirmation}
              customStyles={styles.button}
              onPress={() => (id ? updateAffirmation() : createAffirmation())}
            />
          </View>
        </ScrollView>
        {/* </View> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateAffirmation;
