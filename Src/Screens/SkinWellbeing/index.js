import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, FlatList, Image, TouchableOpacity, Dimensions, TextInput, Keyboard, ActivityIndicator, } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import { responsiveHeight, responsiveWidth, } from "../../Theme/ResponsiveDimensions";
import WellbeingTabs from "../../Components/WellbeingTopTab";
import { useDispatch, useSelector } from "react-redux";
import { getWellbeingCategories } from "../../Redux/Actions/WellbeingActions";
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
const HeaderComponent = () => (                             // Header Component View
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
)
let LineHiderComponent = null
const WellbeingCategories = ({ data }) => (                 // Wellbeing Component View  
  <View style={{ marginBottom: 20, }}  >
    <FlatList
      data={data}
      extraData={data}
      renderItem={renderWellbeingCategories}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.pillarsFlatlistStyle}
      horizontal
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
)
const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
const renderWellbeingCategories = ({ item, index }) => {    // renderItem of Wellbeing Component View
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.itemView}>
        <Image source={{ uri: item?.image == '' || item.image == null ? noImage : item.image }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item?.attributes?.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const PostComponent = ({ item, index, likePress, commentPress }) => (                // view post component
  <View style={styles.PillarItemView}>
    <Image source={{ uri: item.image }} style={styles.pillarImage} />
    <View style={styles.pillarInfoView}>
      <Text style={styles.pillerHeading}>{item.title}</Text>
      <View style={styles.pillarStatusInfo}>
        <View style={styles.PillarlikeCommentView}>
          <TouchableOpacity onPress={likePress}>
            <Image source={AppImages.redHeartIcon} style={styles.PillarlikeCommentImage} />
          </TouchableOpacity>
          <Text style={styles.pillarLikesCount}>{item.likes}</Text>
          <Text style={styles.pillarLikes}>{AppConstants.likes}</Text>
        </View>
        <TouchableOpacity onPress={commentPress}>
          <View style={styles.PillarlikeCommentView}>
            <Image source={AppImages.greenChatIcon} style={styles.PillarlikeCommentImage} />
            <Text style={styles.pillarComments}>{AppConstants.comments}</Text>
            <Text style={styles.pillarCommentsCount}>{item.comments}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
const CommentInput = ({ onChangeText, onSendPress }) => (   // comment Input component
  <View style={styles.commentFieldView}>
    <TextInput
      placeholder={AppConstants.addYourCommenthere}
      style={styles.commentInput}
      onChangeText={onChangeText}
      // editable={false}
      //   autoFocus={KeyBoardVisible ? true : false}
      //   onFocus={() => setKeyBoardVisible(true)}
      onSubmitEditing={() => setKeyBoardVisible(false)}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        right: -1,
        top: -1,
      }}
      onPress={onSendPress}
    >
      {/* send button Image */}
      <Image
        source={AppImages.sendButton}
        resizeMode="contain"
        style={styles.sendButtonIcon}
      />
    </TouchableOpacity>
  </View>
)
const CommentComponent = ({ item, index, likePress, commentPress }) => {             // users comment component
  return (
    <View key={index}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
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
          <TouchableOpacity onPress={likePress}>
            <Image source={AppImages.greenHeartIcon} style={styles.PillarlikeCommentImage}
            />
          </TouchableOpacity>
          <Text style={styles.pillarLikesCount}>{item.likes}</Text>
          <Text style={styles.pillarLikes}>{AppConstants.likes}</Text>
        </View>
        <TouchableOpacity onPress={commentPress}>
          <View style={styles.PillarlikeCommentView}>
            <Image source={AppImages.greenChatIcon} style={styles.PillarlikeCommentImage} />
            <Text style={styles.pillarComments}>{AppConstants.comments}</Text>
            <Text style={styles.pillarCommentsCount}>{item.comments}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
let TabContent = null                                       // initialized TabContent Component

const SkinWellbeing = ({ navigation }) => {
  const [expandedComments, setExpandedComments] = useState([])
  const [KeyBoardVisible, setKeyBoardVisible] = useState(false);
  const dispatch = useDispatch()
  const state = useSelector(state => state.WellbeingReducer)
  const isLoading = state.isLoading
  console.log(state.wellBeingCategories, "CATE");
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getWellbeingCategories())
    });
    return unsubscribe;

  }, [])
  useEffect(() => {                                       // keyboard handeler
    Keyboard.addListener("keyboardDidShow", () => setKeyBoardVisible(true));
    Keyboard.addListener("keyboardDidHide", () => setKeyBoardVisible(false));
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow")
      Keyboard.removeAllListeners("keyboardDidHide")
    };
  }, [KeyBoardVisible]);
  //----------------------------------------------------Functions
  function handleCommentClick(postId) {
    let TEMP = [...expandedComments]
    TEMP.push(postId)
    setExpandedComments(TEMP)
  }
  //----------------------------------------------------
  // { console.log(expandedComments); }

  TabContent = ({ data }) => (
    <FlatList
      data={data}
      extraData={data}
      bounces={false}
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[styles.tabsContentFlatlist, {}]}
      renderItem={renderTabContent}
    />
  )

  const renderTabContent = ({ item, index }) => (
    <View style={styles.pillerMainContainer}>
      <PostComponent                                      // View Post Component
        item={item}
        index={index}
        likePress={() => {

        }}
        commentPress={() => {
          handleCommentClick(item.postId)
        }}
      />
      <View style={{
        flex: 1,
        paddingTop: 10
      }}>
        {expandedComments.includes(item.postId) && < CommentInput                                       // Input comment component
          onChangeText={() => { }}
          onSendPress={() => {
            setKeyBoardVisible(false)
            let TEMP = [...expandedComments];
            TEMP.splice(TEMP.indexOf(item.postId), 1);
            setExpandedComments(TEMP);
          }} />}
        {expandedComments.includes(item.postId) && < View style={styles.pillarItemCommentsContainer}>
          {dummyComments.map((item, index) => (
            <CommentComponent                               // View Comment Component
              item={item}
              index={index}
              likePress={() => {

              }}
              commentPress={(() => {

              })} />
          ))}
        </View>}
      </View>
    </View >
  );
  LineHiderComponent = () => {                          // Hides the line under the tabs
    // hides the line under tabs from horizontal ends
    return (
      <View style={styles.lineHiderView}>
        <View style={styles.lineHiders} />
        <View style={styles.lineHiders} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ?
        (<View style={styles.container}>
          <HeaderComponent />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <ActivityIndicator
              color={AppColors.main}
              size='small' />
          </View>
        </View>)
        : (<View style={styles.container}>
          <HeaderComponent />
          {!KeyBoardVisible && <WellbeingCategories data={state.wellBeingCategories} />}
          <View style={[styles.tabsContainer,]}>
            <LineHiderComponent />
            <WellbeingTabs />
          </View>
        </View>)}
    </View>
  );
};


// pages for material top tabnav

const Articles = () => {// render Article Tab data
  return (
    <View style={styles.container}>
      <TabContent data={AppConstants.WellbeingDummyData.Articles} />
    </View>
  )
};
const Videos = () => {  // render Videos Tab data
  return (
    <View style={styles.container}>
      <TabContent data={AppConstants.WellbeingDummyData.Videos} />
    </View>
  )
};
const Podcasts = () => {  // render Podcasts Tab data
  return (
    <View style={styles.container}>
      <TabContent data={AppConstants.WellbeingDummyData.Podcasts} />
    </View>
  )
};
const Stories = () => {     // render Stories Tab data
  return (
    <View style={styles.container}>
      <TabContent data={AppConstants.WellbeingDummyData.Stories} />
    </View>
  )
};

export const Tabs = { Articles, Videos, Podcasts, Stories }         // exported to materialTabBar navigator
export default SkinWellbeing;
