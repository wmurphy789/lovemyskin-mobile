import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAffirmationByIdAction } from "../../Redux/Actions/AffirmationAction";
import Methods from "../../Support/Methods";
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
    dispatch(getAffirmationByIdAction({ id }, navigation));
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
  const _renderMyAffirmations = () => (
    <View
      style={[
        styles.ItemView,
        {
          backgroundColor: screenColor,
          marginBottom: 12,
        },
      ]}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.itemTitle}>
          {AffirmationState?.dataDetails?.attributes?.category_name}
        </Text>
        <View
          style={{
            display:
              AffirmationState?.dataDetails?.attributes?.category_name ==
              "My Affirmations"
                ? "flex"
                : "none",
          }}
        >
          <CustomIconButton icon={AppImages.editBlackIcon} />
          <CustomIconButton
            icon={AppImages.deleteBlackIcon}
            customStyles={styles.customStylesDeleteButton}
          />
        </View>
      </View>
      <View>
        <Text style={styles.itemtext}>
          {AffirmationState?.dataDetails?.attributes?.description}
        </Text>
        {AffirmationState?.dataDetails?.attributes?.song_id && (
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
        // onPress={() => {
        //   alert("Share!");
        // }}
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
      // <FlatList
      //   data={AffirmationState.dataDetails}
      //   bounces={false}
      //   showsVerticalScrollIndicator={false}
      //   stickyHeaderIndices={[0]}
      //   // ListHeaderComponent={() => <Header />}
      //   keyExtractor={(item, index) => index.toString()}
      //   renderItem={_renderAffirmations}
      // />
      <>
        <Header />
        {_renderMyAffirmations()}
        {/* {_renderMyAffirmations()} */}
      </>
    );
    // }
  };

  return (
    <View style={{ flex: 1 }}>
      {mainView()}
      {/* <Header /> */}
    </View>
  );
};

export default ViewAffirmation;
