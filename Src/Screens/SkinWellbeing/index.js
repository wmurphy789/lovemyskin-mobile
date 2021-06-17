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
  ActivityIndicator,
  Linking,
} from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
import WellbeingTabs from "../../Components/WellbeingTopTab";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesPosts,
  getWellbeingCategories,
  getPostsComments,
  likeUnlikePost,
  setPostComments,
} from "../../Redux/Actions/WellbeingActions";
import Loader from "../../Components/Loader";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import PostComponent from "../../Components/PostComponent";
import CommentInput from "../../Components/CommentInput";
import CommentComponent from "../../Components/CommentComponent";
import { Container, Header, Tab, Tabs, TabHeading } from "native-base";
import { AppFonts } from "../../Theme/AppFonts";
import { showmessage } from "../../Support/Validations";

let Articles = null,
  Videos = null,
  Podcasts = null,
  Stories = null;
let TabContent = null; // initialized TabContent Component

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
const HeaderComponent = () => (
  // Header Component View
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
);
const LineHiderComponent = () => {
  // Hides the line under the tabs
  // hides the line under tabs from horizontal ends
  return (
    <View style={styles.lineHiderView}>
      <View style={styles.lineHiders} />
      <View style={styles.lineHiders} />
    </View>
  );
};

const SkinWellbeing = ({ navigation }) => {
  const [expandedComments, setExpandedComments] = useState([]);
  const [KeyBoardVisible, setKeyBoardVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const [selectedCategoryType, setSelectedCategoryType] = useState(null);
  const [commentView, setExtendedViewId] = useState(null);
  const [comment, setCommentText] = useState("");
  const [postsData, setPostsData] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.WellbeingReducer);
  const isLoading = state.isLoading;

  useEffect(() => {
    // console.log('comment in use effect', comment);
  }, [comment]);

  useEffect(() => {
    // navigation focus listener
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getWellbeingCategories());
      setExtendedViewId(null);
      setCommentText("");
    });
    return unsubscribe;
  }, []);

  // useEffect(()=>{

  // },[])
  useEffect(() => {
    console.log("wellbeing api success", state.wellBeingApiSucess);
    var apiStatus = state.wellBeingApiSucess;
    var id;
    if (state.wellBeingCategories.length != 0) {
      id = state.wellBeingCategories[0].id;
    }
    setSelectedCategoryId(id);
    setSelectedCategoryType("article");
    var infoData = {
      id: id,
      type: "article",
    };
    setTimeout(() => {
      apiStatus && dispatch(getCategoriesPosts(infoData));
    }, 200);
  }, [state.wellBeingApiSucess]);
  useEffect(() => {
    // keyboard handeler
    Keyboard.addListener("keyboardDidShow", () => setKeyBoardVisible(true));
    Keyboard.addListener("keyboardDidHide", () => setKeyBoardVisible(false));
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, [KeyBoardVisible]);
  // useEffect(() => {
  //   let data = state.wellbeingPosts;
  //   console.log("useffect well being posts", data);
  //   data.length != 0 && setPostsData(data);
  // }, [state.wellbeingPosts]);
  // useEffect(() => {
  //   var apiStatus = state.likeApiSucess;
  //   var id;
  //   if (state.wellBeingCategories.length != 0) {
  //     id = state.wellBeingCategories[0].id;
  //   }
  //   var infoData = {
  //     id: selectedCategoryId,
  //     type: selectedCategoryType,
  //   };
  //   setTimeout(() => {
  //     apiStatus && dispatch(getCategoriesPosts(infoData));
  //   }, 200);
  // }, [state.likeApiSucess]);

  useEffect(() => {
    var infoData = {
      id: selectedCategoryId,
      type: selectedCategoryType,
    };
    setTimeout(() => {
      dispatch(getCategoriesPosts(infoData));
    }, 10);
    // setSelectedCategoryId(item.id);
  }, [selectedCategoryType, selectedCategoryId]);

  // article, video, podcast, story
  const articleFocusEvent = () => {
    setSelectedCategoryType("article");
    setExpandedComments([]);
  };
  const videosFocusEvent = () => {
    setSelectedCategoryType("video");
    setExpandedComments([]);
  };
  const podcastsFocusEvent = () => {
    setSelectedCategoryType("podcast");
    setExpandedComments([]);
  };
  const storiesFocusEvent = () => {
    setSelectedCategoryType("story");
    setExpandedComments([]);
  };

  //----------------------------------------------------Functions
  function handleCommentClick(postId) {
    // let TEMP = [];
    // TEMP.push(postId);
    // setExpandedComments(TEMP);
    // setKeyBoardVisible(true);
    console.log("postId--->", postId);
    // if (commentView == postId) {
    //   setExtendedViewId(null);
    // }
    // setExtendedViewId(postId);
  }

  const WellbeingCategories = (
    { data } // Wellbeing Component View
  ) => (
    <View style={{ marginBottom: 20 }}>
      <FlatList
        data={data}
        extraData={data}
        // initialScrollIndex={selectedCategoryIndex}
        // onScrollToIndexFailed={()=>console.log(selectedCategoryIndex)}
        renderItem={renderWellbeingCategories}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pillarsFlatlistStyle}
        horizontal
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
  const renderWellbeingCategories = ({ item, index }) => {
    // renderItem of Wellbeing Component View
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          var infoData = {
            id: item.id,
            type: selectedCategoryType,
          };
          setTimeout(() => {
            dispatch(getCategoriesPosts(infoData));
          }, 10);
          setSelectedCategoryId(item.id);
          setSelectedCategoryIndex(index);
        }}
      >
        <View
          style={
            selectedCategoryId == item.id
              ? styles.selectedItemView
              : styles.itemView
          }
        >
          <Image
            source={
              item?.attributes?.icon_url != "" ||
              item?.attributes?.icon_url != null
                ? { uri: item?.attributes?.icon_url }
                : AppImages.userDummy
            }
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>{item?.attributes?.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const postCommentAction = (id) => {
    //  alert('comment',comment);
    if (comment?.trim().length > 0) {
      let data = {
        postId: id,
        message: comment,
      };

      dispatch(setPostComments(data));
      setCommentText("");
      setKeyBoardVisible(false);
      Keyboard.dismiss();
    } else {
      showmessage("Please enter comment");
    }
  };
  function renderPosts() {
    return (
      <FlatList
        data={state.wellbeingPosts}
        onScrollToTop={setKeyBoardVisible(false)}
        // onScrollBeginDrag={setKeyBoardVisible(true)}
        extraData={state}
        bounces={false}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        disableVirtualization={true}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[styles.tabsContentFlatlist, {}]}
        renderItem={renderTabContent}
      />
    );
  }
  const renderTabContent = ({ item, index }) => (
    <View style={styles.pillerMainContainer}>
      <PostComponent // View Post Component
        item={item}
        index={index}
        likePress={() => {
          let data = {
            postId: item.id,
          };
          dispatch(likeUnlikePost(data));
        }}
        commentPress={() => {
          if (commentView == item.id) {
            console.log("Already open");
            handleCommentClick(item?.id);
            setExtendedViewId(null);
            return true;
          }
          console.log("Already closed");
          let data = {
            postId: item?.id,
          };
          dispatch(getPostsComments(data));
          handleCommentClick(item?.id);
          setExtendedViewId(item?.id);
        }}
      />
      <View
        style={{
          flex: 1,
          paddingTop: 10,
        }}
      >
        {/* {expandedComments.includes(item.id) && ( */}
        {commentView == item.id && (
          <CommentInput // Input comment component
            onChangeText={(t) => {
              setCommentText(t);
              console.log("comment text", t);
            }}
            value={comment}
            onSendPress={() => {
              // alert(comment);
              postCommentAction(item.id);
              // setCommentText("");
            }}
          />
        )}

        {commentView == item.id && (
          <View style={styles.pillarItemCommentsContainer}>
            {state.postComments.length > 0 &&
              state.postComments.map((item, index) => (
                <CommentComponent // View Comment Component
                  item={item}
                  index={index}
                  likePress={() => {}}
                  commentPress={() => {}}
                />
              ))}
          </View>
        )}
      </View>
    </View>
  );

  function onChangeTabAction(t) {
    console.log("tab change", t);
    Keyboard.dismiss();
    setCommentText("");
    setExtendedViewId(null);

    if (t.i == 0) {
      setSelectedCategoryType("article");
    }
    if (t.i == 1) {
      setSelectedCategoryType("video");
      setExpandedComments([]);
    }
    if (t.i == 2) {
      setSelectedCategoryType("podcast");
      setExpandedComments([]);
    }
    if (t.i == 3) {
      setSelectedCategoryType("story");
      setExpandedComments([]);
    }
  }

  return (
    <View style={styles.container}>
      {isLoading && <Loader onLoad={isLoading} />}
      <View style={styles.container}>
        <HeaderComponent />
        {/* {!KeyBoardVisible && (
          <WellbeingCategories data={state.wellBeingCategories} />
        )} */}
        {!KeyBoardVisible && (
          <View style={{ marginBottom: 20 }}>
            <FlatList
              data={state.wellBeingCategories}
              extraData={state.wellBeingCategories}
              // initialScrollIndex={selectedCategoryIndex}
              // onScrollToIndexFailed={()=>console.log(selectedCategoryIndex)}
              renderItem={renderWellbeingCategories}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.pillarsFlatlistStyle}
              horizontal
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
        <View style={styles.tabsContainer}>
          {/* <LineHiderComponent /> */}

          <Tabs
            tabContainerStyle={{
              elevation: 0,
              // alignItems:'center',
              alignSelf: "center",
              justifyContent: "center",
              // borderBottomColor:'red'
            }}
            locked={true}
            onChangeTab={(t) => onChangeTabAction(t)}
            tabBarUnderlineStyle={{
              borderBottomWidth: 4,
              borderBottomColor: "#00CDA9",
              width: responsiveWidth(8),
              marginHorizontal: responsiveWidth(9),
              marginVertical: responsiveWidth(3),
              borderRadius: 300,

              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tab
              heading="Articles"
              tabStyle={{ backgroundColor: "#fff" }}
              textStyle={styles.notSelected}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={styles.selected}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
              >
                {state.wellbeingPosts.length > 0 ? (
                  <FlatList
                    data={state.wellbeingPosts}
                    // onScrollBeginDrag={setKeyBoardVisible(true)}
                    extraData={state}
                    bounces={false}
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={false}
                    // disableVirtualization={false}
                    // keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={[styles.tabsContentFlatlist, {}]}
                    renderItem={renderTabContent}
                  />
                ) : (
                  <Text style={styles.info}>
                    {state.postsLoading ? "" : "No data found."}
                  </Text>
                )}
                {state.wellbeingPosts.length > 0 && KeyBoardVisible && (
                  <View style={{ marginBottom: responsiveHeight(25) }}></View>
                )}
              </ScrollView>
            </Tab>
            <Tab
              heading="Videos"
              tabStyle={{ backgroundColor: "#fff" }}
              textStyle={styles.notSelected}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={styles.selected}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
              >
                {state.wellbeingPosts.length > 0 ? (
                  <FlatList
                    data={state.wellbeingPosts}
                    // onScrollBeginDrag={setKeyBoardVisible(true)}
                    extraData={state}
                    bounces={false}
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={false}
                    // disableVirtualization={false}
                    // keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={[styles.tabsContentFlatlist, {}]}
                    renderItem={renderTabContent}
                  />
                ) : (
                  <Text style={styles.info}>
                    {state.postsLoading ? "" : "No data found."}
                  </Text>
                )}
                {state.wellbeingPosts.length > 0 && KeyBoardVisible && (
                  <View style={{ marginBottom: responsiveHeight(25) }}></View>
                )}
              </ScrollView>
            </Tab>
            <Tab
              heading="Podcasts"
              tabStyle={{ backgroundColor: "#fff" }}
              textStyle={styles.notSelected}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={styles.selected}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
              >
                {state.wellbeingPosts.length > 0 ? (
                  <FlatList
                    data={state.wellbeingPosts}
                    extraData={state}
                    bounces={false}
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={false}
                    // disableVirtualization={false}
                    // keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={[styles.tabsContentFlatlist, {}]}
                    renderItem={renderTabContent}
                  />
                ) : (
                  <Text style={styles.info}>
                    {state.postsLoading ? "" : "No data found."}
                  </Text>
                )}
                {state.wellbeingPosts.length > 0 && KeyBoardVisible && (
                  <View style={{ marginBottom: responsiveHeight(25) }}></View>
                )}
              </ScrollView>
            </Tab>
            <Tab
              heading="Stories"
              tabStyle={{ backgroundColor: "#fff" }}
              textStyle={styles.notSelected}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={styles.selected}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
              >
                {state.wellbeingPosts.length > 0 ? (
                  <FlatList
                    data={state.wellbeingPosts}
                    // onScrollBeginDrag={setKeyBoardVisible(true)}
                    extraData={state}
                    bounces={false}
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={false}
                    // disableVirtualization={false}
                    // keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={[styles.tabsContentFlatlist, {}]}
                    renderItem={renderTabContent}
                  />
                ) : (
                  <Text style={styles.info}>
                    {state.postsLoading ? "" : "No data found."}
                  </Text>
                )}
                {state.wellbeingPosts.length > 0 && KeyBoardVisible && (
                  <View style={{ marginBottom: responsiveHeight(25) }}></View>
                )}
              </ScrollView>
            </Tab>
          </Tabs>
          {/* {<WellbeingTabs
            tabData={postsData != null ? postsData : []}
            articleEvent={() => {
              articleFocusEvent()
            }}
            videosEvent={() => {
              videosFocusEvent()
            }}
            podcastsEvent={() => {
              podcastsFocusEvent()
            }}
            storiesEvent={() => {
              storiesFocusEvent()
            }}
          />} */}
        </View>
      </View>
    </View>
  );
};

// pages for material top tabnav
// tabs
// Articles = ({route}) => {
//   // render Article Tab data
//   // console.log(route.params.tabData, "DATA");
//   let tabData = route.params.tabData;
//   const state = useSelector(state => state?.WellbeingReducer?.wellbeingPosts);

//   return (
//     <View style={styles.container}>
//       <TabContent
//        data={state}
//       />
//     </View>
//   );
// };
// Videos = ({route}) => {
//   // render Videos Tab data

//   let tabData = route.params.tabData;
//   const state = useSelector(state => state?.WellbeingReducer?.wellbeingPosts);
//   return (
//     <View style={styles.container}>
//       <TabContent data={state} />
//     </View>
//   );
// };
// Podcasts = ({route}) => {
//   // render Podcasts Tab data
//   let tabData = route.params.tabData;
//   // const state = useSelector(state => state?.WellbeingReducer?.wellbeingPosts);
//   return (
//     <View style={styles.container}>
//       <TabContent />
//     </View>
//   );
// };
// Stories = ({route}) => {
//   // render Stories Tab data
//   let tabData = route.params.tabData;
//   // const state = useSelector(state => state?.WellbeingReducer?.wellbeingPosts);

//   return (
//     <View style={styles.container}>
//       <TabContent data={tabData} />
//     </View>
//   );
// };
// export const Tabs1 = {Articles, Videos, Podcasts, Stories}; // exported to materialTabBar navigator
export default SkinWellbeing;
