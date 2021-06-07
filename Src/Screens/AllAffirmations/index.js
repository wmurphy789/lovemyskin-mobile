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
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader";
import { getAffirmationAction } from "../../Redux/Actions/AffirmationAction";
import Methods from "../../Support/Methods";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import { responsiveHeight } from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const AllAffirmations = ({ navigation }) => {
  const dispatch = useDispatch();
  const AffirmationState = useSelector((state) => state.AffirmationReducer);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getAffirmationAction({}, navigation));
    });
    return unsubscribe;
  }, []);
  function createAffirmation() {
    Methods.navigate(navigation, "CreateAffirmation");
  }
  function viewAffirmation(id, screenColor) {
    navigation.navigate("ViewAffirmation", {
      id,
      screenColor,
    });
  }

  const HeaderComponent = (props) => {
    const { item, index } = props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => viewAffirmation(item?.id, item.attributes?.hex_color)}
      >
        <View style={styles.myAffirmationsTileView}>
          <View style={styles.myAffirmationsTileViewTop}>
            <Image
              source={{ uri: item?.attributes?.icon_url }}
              style={styles.myAffirmationsTileImage}
            />
            <Text style={styles.myAffirmationsTileText}>
              {item?.attributes?.description}
            </Text>
          </View>
          <View style={styles.myAffirmationsTileViewBottom}>
            <Text style={styles.myAffirmationsTileCount}>
              {item?.attributes?.count}
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
                // ListHeaderComponent={(prp) => <HeaderComponent props={prp} />}
                renderItem={({ item, index }) => {
                  if (item?.attributes?.description == "My Affirmations") {
                    return <HeaderComponent item={item} index={index} />;
                  } else {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                          viewAffirmation(item?.id, item.attributes?.hex_color);
                        }}
                      >
                        <View
                          style={[
                            styles.tileView,
                            { backgroundColor: item?.attributes?.hex_color },
                          ]}
                        >
                          <View style={styles.tileInner}>
                            <Image
                              source={{ uri: item?.attributes?.icon_url }}
                              style={styles.tileImage}
                            />
                            <Text style={styles.tileText}>
                              {item?.attributes?.description}
                            </Text>
                          </View>
                          <Text style={styles.tileCount}>
                            {item?.attributes?.count}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }
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
