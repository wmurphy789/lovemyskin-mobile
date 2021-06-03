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
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const ViewAffirmation = ({ navigation, route }) => {
  const [screenTitle, setScreenTitle] = useState(route?.params?.screenTitle); // will be recieved from routes params
  const [screenColor, setScreenColor] = useState(route?.params?.screenColor); // same as above
  const [isPlaying, setisPlaying] = useState(false);
  const [timeElapsed, settimeElapsed] = useState("0:54");
  const [timeRemaining, setTimeRemaining] = useState("2:34");
  // create dummy data just for UI purpose
  const [screenData, setScreenData] = useState([]); // before removing this check flatlist itemstyle (USED TO MAINTAIN CHECK)
  const [myAffirmationData, setMyAffirmationData] = useState([]);
  useEffect(() => {
    let TEMP = [],
      TEMP2 = [];
    for (let i = 0; i < 12; i++) {
      TEMP.push({
        title: screenTitle,
        content: AppConstants.loremIpsum,
      });
      TEMP2.push({
        title: screenTitle,
        content: AppConstants.loremIpsum,
        containsMusic: i == 0 ? true : false,
      });
    }
    setMyAffirmationData(TEMP2);
    setScreenData(TEMP);
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
          marginBottom: index == screenData.length - 1 ? 0 : 12,
        },
      ]}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemtext}>{item.content}</Text>
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
          marginBottom: index == screenData.length - 1 ? 0 : 12,
        },
      ]}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View>
          <CustomIconButton icon={AppImages.editBlackIcon} />
          <CustomIconButton
            icon={AppImages.deleteBlackIcon}
            customStyles={styles.customStylesDeleteButton}
          />
        </View>
      </View>
      <View>
        <Text style={styles.itemtext}>{item.content}</Text>
        {item.containsMusic && (
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
    if (screenTitle == AppConstants.myAffirmations) {
      return (
        <FlatList
          data={myAffirmationData}
          bounces={false}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <Header />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderMyAffirmations}
        />
      );
    } else {
      return (
        <FlatList
          data={screenData}
          bounces={false}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => <Header />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderAffirmations}
        />
      );
    }
  };

  return <View style={{ flex: 1 }}>{mainView()}</View>;
};

export default ViewAffirmation;
