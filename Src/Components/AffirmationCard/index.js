import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import React, { useRef, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Animated } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { responsiveWidth } from '../../Theme/ResponsiveDimensions';
import styles from './styles'

const AffirmationCard = (props) => {
    // const [sound, setSound] = useState();
    const pendingWidth = useRef(new Animated.Value(0)).current;
    const completedWidth = useRef(new Animated.Value(0)).current;
    const [isPlaying, setisPlaying] = useState(false);
    const [timeElapsed, settimeElapsed] = useState("0:00");
    const [timeRemaining, setTimeRemaining] = useState("0:00");
    const [openShare, setOpenShare] = useState(false);
    const [soundObject, setSoundObject] = useState(null);
    const sound = new Audio.Sound();
    const { item, AffirmationState, screenColor, index, playedIndex, stopAudio } = props;

    useEffect(() => {
        Animated.timing(pendingWidth, {
            toValue: responsiveWidth(70 * 1),
        }).start();
    }, [isPlaying]);

    useEffect(() => {
        console.log('is playing', isPlaying);
        if (isPlaying)
            soundUpdate();
    }, [isPlaying])

    const soundUpdate = async () => {
        let fullTime = msToTime(soundObject.durationMillis);
        setTimeRemaining(fullTime);
        
    }

    useEffect(() => {
        const unsubscribe = props.navigation.addListener("blur", async () => {
            if (playedIndex == index) {
                sound.stopAsync();

                setisPlaying(false);
            }
        });
        return unsubscribe;
    }, [props.navigation]);

    useEffect(() => {
        async () => {
            if ((playedIndex != null) && (playedIndex != index)) {
                if (isPlaying) {
                    await sound.unloadAsync();
                    await sound.stopAsync();
                    setisPlaying(false);
                }
            }
        }

    }, [playedIndex, stopAudio]);

    const onPlayPress = async (song_id, play) => {
        console.log('songid',song_id)
        let songs = AffirmationState.songs;
        console.log('songs aee',songs)
        let song = songs.find(item => item.id == song_id);
        let d = await sound.loadAsync({ uri: song.previewURL })
        console.log('d1', d);
        setSoundObject(d)

        if (play) {
            if (song != undefined) {
                props.onPlay(index)
                console.log('song.previewURL', song);
                await sound.playAsync();
                setisPlaying(true);
               
                sound.setOnPlaybackStatusUpdate((onPlaybackStatusUpdate) => {
                    let currentTime = msToTime(onPlaybackStatusUpdate.positionMillis);
                    settimeElapsed(currentTime);
                    // setTimeCompleted(onPlaybackStatusUpdate.positionMillis)

                    let cWidth = ((onPlaybackStatusUpdate.positionMillis) / onPlaybackStatusUpdate.durationMillis);
                    let pWidth = ((onPlaybackStatusUpdate.durationMillis - onPlaybackStatusUpdate.positionMillis) / onPlaybackStatusUpdate.durationMillis);

                    Animated.timing(pendingWidth, {
                        toValue: responsiveWidth(70 * pWidth),
                    }).start();

                    if (onPlaybackStatusUpdate.positionMillis == onPlaybackStatusUpdate.durationMillis) {
                        setisPlaying(false);
                        sound.stopAsync();

                        console.log('stop player', isPlaying)
                        Animated.timing(completedWidth, {
                            toValue: responsiveWidth(70),
                        }).start();

                    }
                    else {

                        Animated.timing(completedWidth, {
                            toValue: responsiveWidth(70 * cWidth),
                        }).start();

                    }
                })
            }
            else {
                showMessage({
                    message: 'Unable to find song! Please try again later',
                    type: 'danger',
                    duration: 2000
                })
            }
        }
        else {
            console.log('coming' , sound)
            setisPlaying(!isPlaying)
                      
            sound.stopAsync().then((res) => {
                console.log('stop async' , res)
            });            
            await sound.setVolumeAsync(0);            
            await sound.unloadAsync();
        }
    }

    const msToTime = (s) => {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + ':' + mins + ':' + secs;
    }

    const CustomIconButton = ({ icon, onPress, customStyles }) => (
        <TouchableOpacity
            disabled={openShare}
            activeOpacity={0.5}
            style={[styles.itemImage, customStyles]}
            onPress={onPress}
        >
            <MaterialCommunityIcons name={icon} size={25} color="#fff" />
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
                    marginHorizontal: 25,
                    width: responsiveWidth(70),
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
    }


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
                        onPress={() =>
                            props.navigation.navigate("CreateAffirmation", { item: item })
                        }
                    />
                    <CustomIconButton
                        icon={"delete"}
                        customStyles={styles.customStylesDeleteButton}
                        onPress={() => props.deleteAffirmation()}
                    />
                </View>
            </View>
            <View style={styles.itemtextView}>
                <Text style={styles.itemtext}>{item?.attributes?.description}</Text>
            </View>
            {item?.attributes?.song_id &&
                <View style={{ display: item?.attributes?.song_id ? "flex" : "none" }}>
                    <DummyMusicBar />
                    <View style={styles.playerTimerView}>
                        <Text style={styles.playerTime}>{timeElapsed}</Text>
                        <Text style={styles.playerTime}>{timeRemaining}</Text>
                    </View>
                    <CustomIconButton
                        // icon={
                        //   isPlaying ? AppImages.pauseWhiteIcon : AppImages.playWhiteIcon
                        // }
                        icon={isPlaying ? "pause" : "play"}
                        customStyles={styles.playerButtons}
                        onPress={() => onPlayPress(item.attributes.song_id , !isPlaying ? true : false)}
                    />
                </View>
            }

            <CustomIconButton
                icon={"share"}
                onPress={async () => {
                    await setOpenShare(true);
                    props.onShare();
                    setTimeout(() => {
                        setOpenShare(false);
                    }, 300);
                }}
            />
        </View>
    );
}

export default AffirmationCard;
