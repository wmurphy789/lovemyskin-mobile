import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, FlatList, Image, TouchableOpacity, Dimensions, TextInput, Keyboard, ActivityIndicator, Linking, } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import WellbeingTabs from "../../Components/WellbeingTopTab";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesPosts, getWellbeingCategories, getPostsComments, likeUnlikePost, setPostComments } from "../../Redux/Actions/WellbeingActions";
import Loader from "../../Components/Loader";
let Articles = null, Videos = null, Podcasts = null, Stories = null
let TabContent = null                                       // initialized TabContent Component

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
const HeaderComponent = () => (                                                     // Header Component View
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
const LineHiderComponent = () => {                                                  // Hides the line under the tabs
  // hides the line under tabs from horizontal ends
  return (
    <View style={styles.lineHiderView}>
      <View style={styles.lineHiders} />
      <View style={styles.lineHiders} />
    </View>
  );
};
const PostComponent = ({ item, index, likePress, commentPress }) => (               // view post component
  <View style={styles.PillarItemView}>
    <Image
      source={
        item?.attributes?.image != null
          ? { uri: item?.attributes?.image }
          : AppImages.userDummy
      }
      style={styles.pillarImage} />
    <View style={styles.pillarInfoView}>
      <TouchableOpacity
        onPress={() => {
          item?.attributes?.url_link != null
            ? Linking.openURL(item?.attributes?.url_link)
            : alert("Url not avaliable.")
        }}>
        <Text style={styles.pillerHeading}>{item?.attributes?.description}</Text>
      </TouchableOpacity>
      <View style={styles.pillarStatusInfo}>
        <View style={styles.PillarlikeCommentView}>
          <TouchableOpacity onPress={likePress}>
            <Image source={AppImages.redHeartIcon} style={styles.PillarlikeCommentImage} />
          </TouchableOpacity>
          <Text style={styles.pillarLikesCount}>{item?.attributes?.likes}</Text>
          <Text style={styles.pillarLikes}>{AppConstants.likes}</Text>
        </View>
        <TouchableOpacity onPress={commentPress}>
          <View style={styles.PillarlikeCommentView}>
            <Image source={AppImages.greenChatIcon} style={styles.PillarlikeCommentImage} />
            <Text style={styles.pillarComments}>{AppConstants.comments}</Text>
            <Text style={styles.pillarCommentsCount}>{item?.attributes?.comment_count}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
const CommentInput = ({ onChangeText, onSendPress }) => (                           // comment Input component
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
const CommentComponent = ({ item, index, likePress, commentPress }) => {            // users comment component
  return (
    <View key={index}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginBottom: 10,
          marginTop: 15
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
      {/* <View
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
      </View> */}
    </View>
  )
}
const SkinWellbeing = ({ navigation }) => {
  const [expandedComments, setExpandedComments] = useState([])
  const [KeyBoardVisible, setKeyBoardVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedCategoryType, setSelectedCategoryType] = useState(null)
  const [postsData, setPostsData] = useState(null)
  const dispatch = useDispatch()
  const state = useSelector(state => state.WellbeingReducer)

  const isLoading = state.isLoading

  useEffect(() => {                                       // navigation focus listener
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getWellbeingCategories())
    });
    return unsubscribe;
  }, [])
  useEffect(() => {
    var apiStatus = state.wellBeingApiSucess
    var id
    if (state.wellBeingCategories.length != 0) {
      id = state.wellBeingCategories[0].id
    }
    setSelectedCategoryId(id)
    setSelectedCategoryType('article')
    var infoData = {
      id: id,
      type: "article"
    }
    setTimeout(() => { apiStatus && dispatch(getCategoriesPosts(infoData)) }, 200);
  }, [state.wellBeingApiSucess])
  useEffect(() => {                                       // keyboard handeler
    Keyboard.addListener("keyboardDidShow", () => setKeyBoardVisible(true));
    Keyboard.addListener("keyboardDidHide", () => setKeyBoardVisible(false));
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow")
      Keyboard.removeAllListeners("keyboardDidHide")
    };
  }, [KeyBoardVisible]);
  useEffect(() => {
    let data = state.wellbeingPosts
    data.length != 0 && setPostsData(data)
  }, [state.postsApiSucess])
  useEffect(() => {
    var apiStatus = state.likeApiSucess
    var id
    if (state.wellBeingCategories.length != 0) {
      id = state.wellBeingCategories[0].id
    }
    var infoData = {
      id: id,
      type: 'article'
    }
    setTimeout(() => { apiStatus && dispatch(getCategoriesPosts(infoData)) }, 200);
  }, [state.likeApiSucess])

  // article, video, podcast, story
  const articleFocusEvent = () => {
    setSelectedCategoryType("article")
  }
  const videosFocusEvent = () => {
    setSelectedCategoryType("video");
  }
  const podcastsFocusEvent = () => {
    setSelectedCategoryType("podcast");
  }
  const storiesFocusEvent = () => {
    setSelectedCategoryType("story");
  }

  //----------------------------------------------------Functions
  function handleCommentClick(postId) {
    let TEMP = [...expandedComments]
    TEMP.push(postId)
    setExpandedComments(TEMP)
  }
  //----------------------------------------------------
  const WellbeingCategories = ({ data }) => (                                         // Wellbeing Component View  
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
  const renderWellbeingCategories = ({ item, index }) => {                            // renderItem of Wellbeing Component View
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => {

        var infoData = {
          id: item.id,
          type: selectedCategoryType
        }
        setTimeout(() => { dispatch(getCategoriesPosts(infoData)) }, 10);
        setSelectedCategoryId(item.id);
      }}>
        <View style={styles.itemView}>
          <Image
            source={
              item?.attributes?.icon_url != '' || item?.attributes?.icon_url != null
                ? { uri: item?.attributes?.icon_url }
                : AppImages.userDummy
            }
            style={styles.itemImage} />
          <Text style={styles.itemText}>{item?.attributes?.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  TabContent = ({ data }) => (
    <FlatList
      data={data}
      extraData={data}
      bounces={false}
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      disableVirtualization={true}
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
          let data = {
            postId: item.id
          }
          dispatch(likeUnlikePost(data))

        }}
        commentPress={() => {
          let data = {
            postId: item.id
          }
          dispatch(getPostsComments(data))
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

              })}
            />
          ))}
        </View>}
      </View>
    </View >
  );



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
          {/* <Loader load={state.loader} /> */}
          <HeaderComponent />
          {!KeyBoardVisible && <WellbeingCategories data={state.wellBeingCategories} />}
          <View style={styles.tabsContainer}>
            <LineHiderComponent />
            {<WellbeingTabs
              tabData={postsData != null ? postsData : []}
              articleEvent={() => { articleFocusEvent() }}
              videosEvent={() => { videosFocusEvent() }}
              podcastsEvent={() => { podcastsFocusEvent() }}
              storiesEvent={() => { storiesFocusEvent() }}
            />}
          </View>
        </View>)}
    </View>
  );
};

// pages for material top tabnav
// tabs
Articles = ({ route }) => {  // render Article Tab data
  // console.log(route.params.tabData, "DATA");
  let tabData = route.params.tabData
  return (
    <View style={styles.container}>
      <TabContent data={tabData} />
    </View>
  )
};
Videos = ({ route }) => {    // render Videos Tab data
  let tabData = route.params.tabData
  return (
    <View style={styles.container}>
      <TabContent data={tabData} />
    </View>
  )
};
Podcasts = ({ route }) => {  // render Podcasts Tab data
  let tabData = route.params.tabData
  return (
    <View style={styles.container}>
      <TabContent data={tabData} />
    </View>
  )
};
Stories = ({ route }) => {   // render Stories Tab data
  let tabData = route.params.tabData
  return (
    <View style={styles.container}>
      <TabContent data={tabData} />
    </View>
  )
};
export const Tabs = { Articles, Videos, Podcasts, Stories }         // exported to materialTabBar navigator
export default SkinWellbeing;
