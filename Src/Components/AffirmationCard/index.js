import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import React, { useRef, useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Animated } from "react-native";
import { showMessage } from "react-native-flash-message";
import { responsiveWidth } from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
// import Slider from '@react-native-community/slider';
import { AppColors } from "../../Theme/AppColors";

const AffirmationCard = (props) => {
  const [sound, setSound] = useState(null);
  const pendingWidth = useRef(new Animated.Value(0)).current;
  const completedWidth = useRef(new Animated.Value(0)).current;
  const [isPlaying, setisPlaying] = useState(false);
  const [timeElapsed, settimeElapsed] = useState("0:00");
  const [timeRemaining, setTimeRemaining] = useState("0:00");
  const [openShare, setOpenShare] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const {
    item,
    AffirmationState,
    screenColor,
    index,
    playedIndex,
    stopAudio,
  } = props;

  useEffect(() => {
    console.log("songs at card", AffirmationState.songs);
    setSong();
  }, []);

  const setSong = async () => {
    let song_id = item.attributes.song_id;
    let songs = AffirmationState.songs;
    let song = songs.find((item) => item.id == song_id);
    Animated.timing(completedWidth, {
      toValue: 0,
    }).start();
    Animated.timing(pendingWidth, {
      toValue: responsiveWidth(80),
    }).start();

    const initialStatus = {
      shouldPlay: false,
    };

    if (song != undefined) {
      const { sound } = await Audio.Sound.createAsync(
        { uri: song.previewURL },
        initialStatus,
        _onPlaybackStatusUpdate
      );

      let d = await sound.getStatusAsync();
      setSoundObject(d);
      setSound(sound);
      console.log("song.previewURL", song);
      let fullTime = msToTime(d.durationMillis);
      setTimeRemaining(fullTime);
    } else {
      // showMessage({
      //     message: 'Unable to find song! Please try again later',
      //     type: 'danger',
      //     duration: 2000
      // })
    }
  };

  // useEffect(() => {
  //     Animated.timing(pendingWidth, {
  //         toValue: responsiveWidth(80 * 1),
  //     }).start();
  // }, [isPlaying]);

  // useEffect(() => {
  //     console.log('is playing', isPlaying);
  //     if (isPlaying)
  //         // soundUpdate();
  // }, [isPlaying])

  useEffect(() => {
    otherSongPlayed();
    if (stopAudio) {
      setisPlaying(false);
      // sound != null && sound.stopAsync();
      sound != null && sound.pauseAsync();
    }
  }, [playedIndex, stopAudio]);

  const otherSongPlayed = async () => {
    console.log(playedIndex, index);

    if (playedIndex != null && playedIndex != index) {
      Animated.timing(completedWidth, {
        toValue: 0,
      }).start();
      Animated.timing(pendingWidth, {
        toValue: responsiveWidth(80),
      }).start();

      sound != null && sound.pauseAsync();
      setisPlaying(false);
      // Animated.timing(completedWidth, {
      //     toValue: 0,
      // }).start();
      // Animated.timing(pendingWidth, {
      //     toValue: responsiveWidth(80),
      // }).start();
      settimeElapsed("0:00");
      // setTimeRemaining('0:00')
      setCurrentPlaying(playedIndex);
    }
  };

  const _onPlaybackStatusUpdate = (onPlaybackStatusUpdate) => {
    if (onPlaybackStatusUpdate?.positionMillis) {
      setStartTime(onPlaybackStatusUpdate?.positionMillis);
      setEndTime(onPlaybackStatusUpdate?.durationMillis);
      let currentTime = msToTime(onPlaybackStatusUpdate?.positionMillis);
      settimeElapsed(currentTime);

      let remainingTime = msToTime(
        onPlaybackStatusUpdate?.durationMillis -
          onPlaybackStatusUpdate?.positionMillis
      );
      setTimeRemaining(remainingTime);
      // setTimeCompleted(onPlaybackStatusUpdate.positionMillis)

      let cWidth =
        onPlaybackStatusUpdate?.positionMillis /
        onPlaybackStatusUpdate?.durationMillis;
      let pWidth =
        (onPlaybackStatusUpdate?.durationMillis -
          onPlaybackStatusUpdate?.positionMillis) /
        onPlaybackStatusUpdate?.durationMillis;

      Animated.timing(pendingWidth, {
        toValue: responsiveWidth(80 * pWidth),
      }).start();

      if (
        onPlaybackStatusUpdate?.positionMillis ==
        onPlaybackStatusUpdate?.durationMillis
      ) {
        setisPlaying(false);

        console.log("stop player", isPlaying);
        Animated.timing(completedWidth, {
          toValue: responsiveWidth(80),
        }).start();
        Animated.timing(pendingWidth, {
          toValue: 0,
        }).start();
      } else {
        Animated.timing(completedWidth, {
          toValue: responsiveWidth(80 * cWidth),
        }).start();
      }
    }
  };

  const onPlayPress = async (song_id, play) => {
    if (startTime == endTime) {
      sound != null && (await sound.replayAsync());
      setisPlaying(true);
      setCurrentPlaying(index);
      props.onPlay(index);
    } else {
      setTimeout(async () => {
        sound != null && (await sound.playAsync());
        setisPlaying(true);
        setCurrentPlaying(index);
        props.onPlay(index);
      }, 500);
    }

    // else {
    //     console.log('coming' , sound)
    //     setisPlaying(!isPlaying)
    //     sound = null;
    //     sound.stopAsync().then((res) => {
    //         console.log('stop async' , res)
    //     });
    //     await sound.setVolumeAsync(0);
    //     await sound.unloadAsync();
    // }
  };

  const stopSong = async () => {
    // Animated.timing(completedWidth, {
    //     toValue: 0,
    // }).start();
    // Animated.timing(pendingWidth, {
    //     toValue: responsiveWidth(80),
    // }).start();

    // settimeElapsed('0:00')
    // sound.unloadAsync();
    setisPlaying(false);
    sound.pauseAsync();
  };

  const msToTime = (s) => {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    if (hrs == 0) {
      return mins + ":" + secs;
    } else {
      return hrs + ":" + mins + ":" + secs;
    }
  };

  const CustomIconButton = ({ icon, onPress, customStyles, iconColor }) => (
    <TouchableOpacity
      disabled={openShare}
      activeOpacity={0.5}
      style={[styles.itemImage, customStyles]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={iconColor ? iconColor : "#fff"}
      />
      {/* <Image source={icon} resizeMode="contain" style={styles.itemImage} /> */}
    </TouchableOpacity>
  );

  const DummyMusicBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
          // marginHorizontal: 25,
          width: responsiveWidth(80),
          alignSelf: "center",
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            width: completedWidth,
            height: 5,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        />
        <Animated.View
          style={{
            height: 2,
            width: pendingWidth,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.ItemView,
        {
          backgroundColor: screenColor,
          flex: 1,
          marginBottom:
            AffirmationState.dataDetails.length - 1 == index ? 0 : 12,
        },
      ]}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.itemTitle}>{item?.attributes?.category_name}</Text>
        <View
          style={{
            display:
              item?.attributes?.category_name == "My Affirmations"
                ? "flex"
                : "none",
          }}
        >
          <CustomIconButton
            icon={"pencil"}
            onPress={() => {
              props.editAffirmation();
              setisPlaying(false);
              // sound != null && sound.pauseAsync();

              // props.navigation.navigate('CreateAffirmation', { item: item });
            }}
          />
          <CustomIconButton
            icon={"delete"}
            customStyles={styles.customStylesDeleteButton}
            onPress={() => {
              props.deleteAffirmation();
              setisPlaying(false);
              sound != null && sound.pauseAsync();
            }}
          />
        </View>
      </View>
      <View style={styles.itemtextView}>
        <Text style={styles.itemtext}>{item?.attributes?.description}</Text>
      </View>
      {item?.attributes?.song_id && (
        <View style={{ display: item?.attributes?.song_id ? "flex" : "none" }}>
          <DummyMusicBar />
          {/* <Slider
                        style={{ width: responsiveWidth(80), alignSelf:'center' }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        thumbImage={null}
                        thumbTintColor={'transparent'}
                        
                    /> */}
          <View style={styles.playerTimerView}>
            <Text style={styles.playerTime}>{timeElapsed}</Text>
            <Text style={styles.playerTime}>
              {timeRemaining == "0:0" ? timeRemaining : "-" + timeRemaining}
            </Text>
          </View>
          <CustomIconButton
            // icon={
            //   isPlaying ? AppImages.pauseWhiteIcon : AppImages.playWhiteIcon
            // }
            icon={isPlaying ? "pause" : "play"}
            customStyles={styles.playerButtons}
            onPress={
              !isPlaying
                ? () =>
                    onPlayPress(
                      item.attributes.song_id,
                      !isPlaying ? true : false
                    )
                : () => stopSong()
            }
            iconColor={AppColors.TitleGreen}
          />
        </View>
      )}

      <CustomIconButton
        icon={"share"}
        onPress={async () => {
          await setOpenShare(true);
          setisPlaying(false);
          // sound.setStatusAsync({ shouldPlay: false });
          // setSound(null);
          sound != null && sound.pauseAsync();
          props.onShare();
          setTimeout(() => {
            setOpenShare(false);
          }, 300);
        }}
      />
    </View>
  );
};

export default AffirmationCard;
