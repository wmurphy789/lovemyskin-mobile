import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Keyboard,
} from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
const dummyComments = [
  {
    userName: "Lisa Ray",
    image:
      "https://www.imagediamond.com/blog/wp-content/uploads/2019/07/girls-dpz6.jpg",
    comment: AppConstants.loremIpsum,
    likes: "12K",
    comments: "4K",
  },
  {
    userName: "Lee Wong",
    image:
      "https://i.pinimg.com/600x315/3f/e0/c6/3fe0c626f3330adb28c6b2d20b973d52.jpg",
    comment: AppConstants.loremIpsum,
    likes: "5K",
    comments: "1K",
  },
];
const Tab = createMaterialTopTabNavigator();
const SkinWellbeing = () => {
  const [commentIndex, setCommentIndex] = useState(-1);
  const [expandedComments, setExpandedComments] = useState([]);
  const [KeyBoardVisible, setKeyBoardVisible] = useState(false);

  const _renderItem = ({ item, index }) => {
    // render upper list
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.itemView}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const __renderItem = (
    { item, index } // render tabs data
  ) => (
    <View>
      <View
        style={[
          styles.PillarItemView,
          {
            borderBottomRightRadius: expandedComments.includes(index) ? 0 : 10,
            borderBottomLeftRadius: expandedComments.includes(index) ? 0 : 10,
            marginBottom: expandedComments.includes(index) ? 0 : responsiveHeight(2),
          },
        ]}
      >
        <Image source={{ uri: item.image }} style={styles.pillarImage} />
        <View style={styles.pillarInfoView}>
          <Text style={styles.pillerHeading}>{item.title}</Text>
          <View style={styles.pillarStatusInfo}>
            <View style={styles.PillarlikeCommentView}>
              <TouchableOpacity>
                <Image
                  source={AppImages.redHeartIcon}
                  style={styles.PillarlikeCommentImage}
                />
              </TouchableOpacity>
              <Text style={styles.pillarLikesCount}>{item.likes}</Text>
              <Text style={styles.pillarLikes}>{AppConstants.likes}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // comment press
                // setCommentIndex(index)
                setKeyBoardVisible(true);
                let TEMP = [...expandedComments];
                TEMP.push(index);
                setExpandedComments(TEMP);
              }}
            >
              <View style={styles.PillarlikeCommentView}>
                <Image
                  source={AppImages.greenChatIcon}
                  style={styles.PillarlikeCommentImage}
                />
                <Text style={styles.pillarComments}>
                  {AppConstants.comments}
                </Text>
                <Text style={styles.pillarCommentsCount}>{item.comments}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {expandedComments.includes(index) && (
        <View style={styles.pillarItemCommentsContainer}>
          {/* Add comment View */}
          <View style={styles.commentFieldView}>
            <TextInput
              placeholder={AppConstants.addYourCommenthere}
              style={styles.commentInput}
              autoFocus={KeyBoardVisible ? true : false}
              //   onFocus={() => setKeyBoardVisible(true)}
              onSubmitEditing={() => setKeyBoardVisible(false)}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                top: -1
              }}
              onPress={() => {
                setKeyBoardVisible(false);
                let TEMP = [...expandedComments];
                TEMP.splice(TEMP.indexOf(index), 1);
                setExpandedComments(TEMP);
              }}
            >
              {/* send button Image */}
              <Image
                source={AppImages.sendButton}
                resizeMode='contain'
                style={styles.sendButtonIcon}
              />
            </TouchableOpacity>
          </View>
          {dummyComments.map((item, index) => (
            // dummy comments View
            <View key={index}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.commentProfile}
                />
                <Text style={styles.commentProfileUserName}>
                  {item.userName}
                </Text>
              </View>
              <Text style={styles.commentStyle}>{item.comment}</Text>
              <View
                style={[styles.pillarStatusInfo, styles.pillarStatusInfoCustom]}
              >
                <View style={styles.PillarlikeCommentView}>
                  <TouchableOpacity>
                    <Image
                      source={AppImages.greenHeartIcon}
                      style={styles.PillarlikeCommentImage}
                    />
                  </TouchableOpacity>
                  <Text style={styles.pillarLikesCount}>{item.likes}</Text>
                  <Text style={styles.pillarLikes}>{AppConstants.likes}</Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.PillarlikeCommentView}>
                    <Image
                      source={AppImages.greenChatIcon}
                      style={styles.PillarlikeCommentImage}
                    />
                    <Text style={styles.pillarComments}>
                      {AppConstants.comments}
                    </Text>
                    <Text style={styles.pillarCommentsCount}>
                      {item.comments}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
  const renderPillars = (data) => {
    // convert data to Tabs content
    return (
      <FlatList
        data={data}
        bounces={false}
        keyboardShouldPersistTaps='always'
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[
          styles.tabsContentFlatlist,
          {
            paddingBottom: !KeyBoardVisible ? responsiveHeight(15) : "auto",
          },
        ]}
        renderItem={__renderItem}
      />
    );
  };

  // pages for material top tabnav
  const Articles = () => {
    return renderPillars(AppConstants.dummydata);
  }; // render Article Tab data
  const Videos = () => {
    return renderPillars(AppConstants.dummydata);
  }; // render Videos Tab data
  const Podcasts = () => {
    return renderPillars(AppConstants.dummydata);
  }; // render Podcasts Tab data
  const Stories = () => {
    return renderPillars(AppConstants.dummydata);
  }; // render Stories Tab data

  const MyTabs = () => {
    // material Top tab nav
    return (
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: styles.indicator,
          pressColor: AppColors.white,
          style: {
            elevation: 0,
            shadowColor: "#ffffff",
            shadowOffset: { width: 0, height: 0 }, // change this for more shadow
            shadowOpacity: 0.4,
            shadowRadius: 6,
            borderBottomWidth: 0.2,
            borderBottomColor: AppColors.lightGrey,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={styles.selected}>{AppConstants.articles}</Text>
              ) : (
                <Text style={styles.notSelected}>{AppConstants.articles}</Text>
              ),
          }}
          name="Articles"
          component={Articles}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={styles.selected}>{AppConstants.videos}</Text>
              ) : (
                <Text style={styles.notSelected}>{AppConstants.videos}</Text>
              ),
          }}
          name="Videos"
          component={Videos}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={styles.selected}>{AppConstants.podcasts}</Text>
              ) : (
                <Text style={styles.notSelected}>{AppConstants.podcasts}</Text>
              ),
          }}
          name="Podcasts"
          component={Podcasts}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={styles.selected}>{AppConstants.stories}</Text>
              ) : (
                <Text style={styles.notSelected}>{AppConstants.stories}</Text>
              ),
          }}
          name="Stories"
          component={Stories}
        />
      </Tab.Navigator>
    );
  };

  const LineHider = () => {
    // hides the line under tabs from horizontal ends
    return (
      <View style={styles.lineHiderView}>
        <View style={styles.lineHiders} />
        <View style={styles.lineHiders} />
      </View>
    );
  };
  //   useEffect(() => {
  //     Keyboard.addListener("keyboardDidShow", keyboardWillShow);
  //     Keyboard.addListener("keyboardDidHide", keyboardWillHide);
  //     // return () => {
  //     //   keyboardWillShowSub.remove();
  //     //   keyboardWillHideSub.remove();
  //     // };
  //   }, []);
  const keyboardWillShow = (event) => {
    setKeyBoardVisible(true);
  };

  const keyboardWillHide = (event) => {
    setKeyBoardVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.curveHeaderContainer}>
        <ImageBackground
          resizeMode="stretch"
          source={AppImages.curveBigHeaderImage}
          style={styles.curveHeaderImage}
        >
          <Text style={styles.title}>{AppConstants.skinWellbeing}</Text>
          <Text style={styles.infoText}>
            {AppConstants.chooseFromOurPillarsOfWellness}
          </Text>
        </ImageBackground>
      </View>
      {/* <ScrollView contentContainerStyle={{ height: responsiveHeight(120) }}> */}
      <View style={styles.container}>
        <View
          style={{
            marginBottom: 20,
            display: KeyBoardVisible ? "none" : "flex",
          }}
        >
          <FlatList
            data={AppConstants.wellNessPillars}
            renderItem={_renderItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.pillarsFlatlistStyle}
            horizontal
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View
          style={[
            styles.tabsContainer,
            // { height: responsiveHeight(20) * AppConstants.dummydata.length },
          ]}
        >
          <LineHider />
          {MyTabs()}
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default SkinWellbeing;
