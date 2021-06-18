import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableHighlight,
  ScrollView,
  Share,
  Alert,
  AppState,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ConfirmPopupModal from "../../Components/ConfirmPopup";
import {
  cleardataDetailsReducerAction,
  deleteAffirmationAction,
  getAffirmationByIdAction,
  setSongsInReducerAction,
} from "../../Redux/Actions/AffirmationAction";
import Methods from "../../Support/Methods";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import AffirmationCard from "../../Components/AffirmationCard";
import { getSongsWithAlbumIds } from "../../Support/NapsterApi";
import { Audio } from "expo-av";

const ViewAffirmation = ({ navigation, route }) => {
  const [id, setscreenTitle] = useState(route?.params?.id); // will be recieved from routes params
  const [screenColor, setScreenColor] = useState(route?.params?.screenColor); // same as above

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [Item, setItem] = useState({});
  const [openShare, setOpenShare] = useState(false);
  const [stopAudio, setStopAudio] = useState(false);
  const [playIndex, setPlayIndex] = useState(null);

  const dispatch = useDispatch();
  const AffirmationState = useSelector((state) => state.AffirmationReducer);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      Audio.setIsEnabledAsync(true);
      dispatch(getAffirmationByIdAction({ id }, navigation));
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      Audio.setIsEnabledAsync(false);
      dispatch(cleardataDetailsReducerAction({ id }, navigation));
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    if (AffirmationState?.isDeleted || AffirmationState?.isEdited)
      dispatch(getAffirmationByIdAction({ id }, navigation));
  }, [AffirmationState?.isDeleted, AffirmationState?.isEdited]);

  useEffect(() => {
    getSongsWithAlbumIds()
      .then((res) => {
        if (res.tracks.length > 0) {
          dispatch(setSongsInReducerAction(res.tracks));
        }
      })
      .catch((err) => {
        console.log("errrs", err);
      });
  }, []);
  // useEffect(() => {
  //   AppState.addEventListener("change", _handleAppStateChange);

  //   return () => {
  //     AppState.removeEventListener("change", _handleAppStateChange);
  //   };
  // }, []);
  // const _handleAppStateChange = (nextAppState) => {
  //   // if (
  //   //   appState.current.match(/inactive|background/) &&
  //   //   nextAppState === "active"
  //   // ) {
  //   //   console.log("App has come to the foreground!");
  //   // }
  //   if (nextAppState === "background") {
  //     setStopAudio(true);
  //   } else {
  //     setStopAudio(false);
  //   }

  //   console.log("AppState", nextAppState);
  // };

  function goBack() {
    Methods.goBack(navigation);
    setStopAudio(true);
    Audio.setIsEnabledAsync(false);
  }
  const onShare = async (item) => {
    setStopAudio(true);
    // Audio.setIsEnabledAsync(false);
    try {
      const result = await Share.share({
        message: `${item?.attributes?.category_name}
        Description: ${item?.attributes?.description}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
    setStopAudio(false);
  };
  const deleteAffirmation = () => {
    setShowDeleteModal(false);

    dispatch(deleteAffirmationAction({ id: Item.id, itemId: id }, navigation));
  };

  const Header = () => (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="stretch"
        style={styles.curveHeaderImage}
        source={AppImages.curveLightGreenHeaderImage}
      />
      <TouchableHighlight
        underlayColor={"rgba(255,255,255,0.5)"}
        style={styles.curveHeaderIconButton}
        onPress={() => {
          goBack();
        }}
      >
        <Image source={AppImages.backWhite} style={styles.curveHeaderIcon} />
      </TouchableHighlight>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          Methods.navigate(navigation, "CreateAffirmation");
        }}
      >
        <ImageBackground
          style={styles.addMyAffirmation}
          source={AppImages.GradientButtonTransparent}
        >
          <Image
            source={AppImages.editWhiteIcon}
            resizeMode="contain"
            style={styles.addAffirmationIcon}
          />
          <Text style={styles.addAffirmationText}>
            {AppConstants.addMyOwnAffirmation}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  const mainView = () => {
    return AffirmationState?.dataDetails?.length > 0 ? (
      <FlatList
        data={AffirmationState.dataDetails}
        extraData={AffirmationState}
        bounces={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={{
          flex: 1,
        }}
        ListHeaderComponent={() => <Header />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <AffirmationCard
              item={item}
              screenColor={screenColor}
              AffirmationState={AffirmationState}
              index={index}
              onPlay={(i) => setPlayIndex(i)}
              playedIndex={playIndex}
              onShare={() => onShare(item)}
              deleteAffirmation={() => {
                setStopAudio(true);
                setShowDeleteModal(true);
                setItem(item);
                setTimeout(() => {
                  setStopAudio(false);
                }, 100);
                // setStopAudio(false);
              }}
              editAffirmation={() => {
                Audio.setIsEnabledAsync(false);
                navigation.navigate("CreateAffirmation", { item: item });
              }}
              navigation={navigation}
              stopAudio={stopAudio}
            />
          );
        }}
      />
    ) : (
      <>
        <Header />
        <View style={{ backgroundColor: screenColor, flex: 1 }} />
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          AffirmationState.dataDetails.length == 1
            ? screenColor
            : AppColors.white,
      }}
    >
      <ConfirmPopupModal
        load={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setItem({});
        }}
        text="Are you sure, you want to delete the affirmation?"
        onAction={() => deleteAffirmation()}
      />
      {mainView()}
    </View>
  );
};

export default ViewAffirmation;
