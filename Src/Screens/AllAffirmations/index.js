import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  BackHandler,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader";
import { getAffirmationAction } from "../../Redux/Actions/AffirmationAction";
import Methods, { navigationRef } from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const AllAffirmations = (props) => {
  const dispatch = useDispatch();
  const AffirmationState = useSelector((state) => state.AffirmationReducer);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      dispatch(getAffirmationAction({}, props.navigation));
    });
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return unsubscribe;
  }, []);
  const handleBackButton = () => {
    console.log(
      "navigationRef?.current?.getCurrentRoute()",
      navigationRef?.current?.getCurrentRoute()
    );
    const route = navigationRef?.current?.getCurrentRoute();
    if (route?.name == "AllAffirmations" || route?.name == "SignIn") {
      BackHandler.exitApp();
      return true;
    } else {
      return false;
    }
  };

  function createAffirmation() {
    Methods.navigate(props.navigation, "CreateAffirmation");
  }
  function viewAffirmation(id, screenColor) {
    props.navigation.navigate("ViewAffirmation", {
      id,
      screenColor,
    });
  }
  console.log("AffirmationState", AffirmationState?.myAffirmation);
  const HeaderComponent = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          viewAffirmation(
            AffirmationState?.myAffirmation?.id,
            AffirmationState?.myAffirmation.hex_color
          )
        }
      >
        <View style={styles.myAffirmationsTileView}>
          <View style={styles.myAffirmationsTileViewTop}>
            <Image
              source={{ uri: AffirmationState?.myAffirmation?.icon_url }}
              style={styles.myAffirmationsTileImage}
            />
            <Text style={styles.myAffirmationsTileText}>
              {AffirmationState?.myAffirmation?.description}
            </Text>
          </View>
          <View style={styles.myAffirmationsTileViewBottom}>
            <Text style={styles.myAffirmationsTileCount}>
              {AffirmationState?.myAffirmation?.count}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: responsiveHeight(10),
          backgroundColor: "#ffffff",
        }}
      >
        <Loader load={AffirmationState.onLoad} />
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <View style={styles.circle} />
            <Text style={styles.affirmationText}>
              {AppConstants.affirmations}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => createAffirmation()}
            >
              <ImageBackground
                source={AppImages.GradientButtonTransparent}
                style={styles.addMyAffirmation}
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
          <View style={styles.lowerContainer}>
            <View style={styles.lowerInnerContainer}>
              <Text style={styles.chooseACategory}>
                {AppConstants.chooseACategory}
              </Text>
              <FlatList
                data={AffirmationState.data}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                // horizontal
                contentContainerStyle={styles.tilesflatlist}
                ListHeaderComponent={() =>
                  AffirmationState?.myAffirmation?.id ? (
                    <HeaderComponent />
                  ) : null
                }
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.9}
                      onPress={() => {
                        viewAffirmation(item?.id, item.hex_color);
                      }}
                    >
                      <View
                        style={[
                          styles.tileView,
                          { backgroundColor: item?.hex_color },
                        ]}
                      >
                        <View style={styles.tileInner}>
                          <Image
                            source={{ uri: item?.icon_url }}
                            style={styles.tileImage}
                          />
                          <Text style={styles.tileText}>
                            {item?.description}
                          </Text>
                        </View>
                        <Text style={styles.tileCount}>{item?.count}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllAffirmations;
