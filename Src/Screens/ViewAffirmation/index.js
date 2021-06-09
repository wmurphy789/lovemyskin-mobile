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
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteAffirmationAction,
  getAffirmationByIdAction,
} from "../../Redux/Actions/AffirmationAction";
import Methods from "../../Support/Methods";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const ViewAffirmation = ({ navigation, route }) => {
  const [id, setscreenTitle] = useState(route?.params?.id); // will be recieved from routes params
  const [screenColor, setScreenColor] = useState(route?.params?.screenColor); // same as above
  const [isPlaying, setisPlaying] = useState(false);
  const [timeElapsed, settimeElapsed] = useState("0:54");
  const [timeRemaining, setTimeRemaining] = useState("2:34");
  // create dummy data just for UI purpose
  const dispatch = useDispatch();
  const AffirmationState = useSelector((state) => state.AffirmationReducer);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getAffirmationByIdAction({ id }, navigation));
    });
    return unsubscribe;
  }, []);
  const DummyMusicBar = () => (
    // dummy UI of Music SeekBar
    <View
      style={{
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
        marginHorizontal: 25,
      }}
    >
      <View
        style={{
          flex: 0.4,
          height: 5,
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
      />
      <View
        style={{
          flex: 0.6,
          height: 2,
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
      />
    </View>
  );

  function goBack() {
    Methods.goBack(navigation);
  }
  const onShare = async (item) => {
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
  };
  const deleteAffirmation = (item) => {
    dispatch(deleteAffirmationAction({ id: item.id, itemId: id }, navigation));
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

  const CustomIconButton = ({ icon, onPress, customStyles }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.itemImage, customStyles]}
      onPress={onPress}
    >
      <Image source={icon} resizeMode="contain" style={styles.itemImage} />
    </TouchableOpacity>
  );

  // render all affirmations
  const _renderAffirmations = ({ item, index }) => (
    <View
      style={[
        styles.ItemView,
        {
          backgroundColor: screenColor,
          marginBottom:
            index == AffirmationState.dataDetails.length - 1 ? 0 : 12,
        },
      ]}
    >
      <Text style={styles.itemTitle}>
        {AffirmationState.dataDetails?.attributes?.category_name}
      </Text>
      <Text style={styles.itemtext}>
        {AffirmationState.dataDetails?.attributes?.description}
      </Text>
      <CustomIconButton
        icon={AppImages.shareBlackIcon}
        // onPress={() => {
        //   alert("Share!");
        // }}
      />
    </View>
  );
  //render my affirmations    #note : created seprately because myaffirmations may containe music
  const _renderMyAffirmations = ({ item, index }) => (
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
            icon={AppImages.editBlackIcon}
            onPress={() =>
              navigation.navigate("CreateAffirmation", { item: item })
            }
          />
          <CustomIconButton
            icon={AppImages.deleteBlackIcon}
            customStyles={styles.customStylesDeleteButton}
            onPress={() =>
              Alert.alert(
                "",
                "Are you sure you want to delete this affirmation.",
                [
                  {
                    text: "No",
                    onPress: () => console.log("pressed no"),
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: () => deleteAffirmation(item),
                  },
                ]
              )
            }
          />
        </View>
      </View>
      <View>
        <View style={styles.itemtextView}>
          <Text style={styles.itemtext}>{item?.attributes?.description}</Text>
        </View>
        {item?.attributes?.song_id && (
          <View>
            <DummyMusicBar />
            <View style={styles.playerTimerView}>
              <Text style={styles.playerTime}>{timeElapsed}</Text>
              <Text style={styles.playerTime}>-{timeRemaining}</Text>
            </View>
            <CustomIconButton
              // icon={
              //  isPlaying ? AppImages.pauseWhiteIcon : AppImages.playWhiteIcon
              // }
              icon={AppImages.pauseWhiteIcon}
              customStyles={styles.playerButtons}
              // onPress={() => { setisPlaying(!isPlaying) }}
            />
          </View>
        )}
      </View>
      <CustomIconButton
        icon={AppImages.shareBlackIcon}
        onPress={() => {
          onShare(item);
        }}
      />
    </View>
  );

  const mainView = () => {
    // if (screenTitle == AppConstants.myAffirmations) {
    //   return (
    //     <FlatList
    //       data={myAffirmationData}
    //       bounces={false}
    //       stickyHeaderIndices={[0]}
    //       showsVerticalScrollIndicator={false}
    //       ListHeaderComponent={() => <Header />}
    //       keyExtractor={(item, index) => index.toString()}
    //       renderItem={_renderMyAffirmations}
    //     />
    //   );
    // } else {
    return (
      <FlatList
        data={AffirmationState.dataDetails}
        bounces={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderMyAffirmations}
      />
      // <>
      //   <Header />
      //   {_renderMyAffirmations()}
      //   {/* {_renderMyAffirmations()} */}
      // </>
    );
    // }
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
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: screenColor }}
      > */}
      {mainView()}
      {/* </ScrollView> */}
      {/* <Header /> */}
    </View>
  );
};

export default ViewAffirmation;
