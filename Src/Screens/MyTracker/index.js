import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
import CalendarStrip from "../../Components/swipeableCalenderCustom/CalendarStrip";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteTrackerEntryAction,
  editTrackerEntryAction,
  getTrackerALLEntryAction,
  getTrackerEntryAction,
} from "../../Redux/Actions/TrackerActions";
import moment from "moment";
import Loader from "../../Components/Loader";
import { showmessage } from "../../Support/Validations";
import ConfirmPopupModal from "../../Components/ConfirmPopup";

const MyTracker = (props) => {
  const TrackerState = useSelector((state) => state.TrackerReducer);
  const [viewType, setViewType] = useState(1);
  const [expandIndex, setExpandIndex] = useState([]);
  const [selectedDate, setSelectedDate] = useState(TrackerState?.selectedDate);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUpListView, setShowPopUpListView] = useState(false);
  const [popupIndex, setPopupIndex] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const dispatch = useDispatch();
  const getDayInWord = (day) => {
    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const text = weekNames[day];
    return text;
  };
  const getMonthInWord = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const text = monthNames[month];
    return text;
  };
  const changeMonth = (value) => {
    var selected_Date = new Date(TrackerState?.selectedDate);
    var changedDate = selected_Date.setMonth(selected_Date.getMonth() + value);
    // setSelectedDate(moment(changedDate));
    ApiHit(moment(changedDate));
  };
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      setViewType(1);
      // setSelectedDate(TrackerState?.selectedDate);
      setPopupIndex([]);
      setShowPopUpListView(false);
      setShowPopUp(false);
      setExpandIndex([]);
      // ApiHit();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);
  useEffect(() => {
    ApiHit();
  }, []);
  useEffect(() => {
    if (TrackerState?.isDeleted) {
      ApiHit();
      setDeleteItem({});
    }
  }, [TrackerState?.isDeleted]);
  const ApiHit = (date) => {
    if (date) {
      const selectedDateMonth = moment(date).get("M") + 1;
      const selectedDateYear = moment(date).get("Y");
      const NoOfdaysInSelectedMonth = moment(date).daysInMonth();
      const startDate = moment(
        selectedDateMonth + "/" + "01/" + selectedDateYear
      );
      const endDate = moment(
        selectedDateMonth +
          "/" +
          NoOfdaysInSelectedMonth +
          "/" +
          selectedDateYear
      );
      console.log("startDate-->", startDate, endDate);
      dispatch(
        getTrackerALLEntryAction(
          {
            startDate: moment(startDate).format("YYYY-MM-DD"),
            endDate: moment(endDate).format("YYYY-MM-DD"),
            selectedDate: date,
          },
          props.navigation
        )
      );
    } else {
      const selectedDateMonth = moment(TrackerState?.selectedDate).get("M") + 1;
      const selectedDateYear = moment(TrackerState?.selectedDate).get("Y");
      const NoOfdaysInSelectedMonth = moment(
        TrackerState?.selectedDate
      ).daysInMonth();
      const startDate = moment(
        selectedDateMonth + "/" + "01/" + selectedDateYear
      );
      const endDate = moment(
        selectedDateMonth +
          "/" +
          NoOfdaysInSelectedMonth +
          "/" +
          selectedDateYear
      );
      console.log("startDate-->", startDate, endDate);
      dispatch(
        getTrackerALLEntryAction(
          {
            startDate: moment(startDate).format("YYYY-MM-DD"),
            endDate: moment(endDate).format("YYYY-MM-DD"),
            selectedDate: TrackerState?.selectedDate,
          },
          props.navigation
        )
      );
    }
  };
  const deleteEntry = () => {
    setShowDeleteModal(false);
    setPopUpIndexView(deleteItem?.index);
    setShowPopUp(false);
    dispatch(
      deleteTrackerEntryAction(
        { id: deleteItem?.id, selectedDate: TrackerState?.selectedDate },
        props.navigation
      )
    );
  };
  const editEntry = (item, index) => {
    setPopUpIndexView(index);
    props.navigation.navigate("CreateJournalEntry", { item: item });
  };

  const setExpandedView = (index) => {
    let arr = expandIndex;
    if (!arr.includes(index)) {
      //checking weather array contain the id
      arr.push(index); //adding to array because value doesnt exists
    } else {
      arr.splice(arr.indexOf(index), 1); //deleting
    }
    setExpandIndex([...arr]);
  };
  const setPopUpIndexView = async (index) => {
    let arr = [...popupIndex];
    if (!arr.includes(index)) {
      //checking weather array contain the id
      arr.length = 0;
      arr[0] = index; //adding to array because value doesnt exists
    } else {
      arr.splice(arr.indexOf(index), 1); //deleting
    }
    setPopupIndex([...arr]);
    setShowPopUpListView(!showPopUpListView);
  };
  const onTabPress = (index) => {
    setViewType(index);
    setPopupIndex([]);
    setShowPopUpListView(false);
    setShowPopUp(false);
    setExpandIndex([]);
  };
  const createJournalentry = () => {
    if (!TrackerState?.entry?.id) {
      setViewType(0);
      props.navigation.navigate("CreateJournalEntry", {
        selectedDate: selectedDate,
      });
    } else {
      showmessage("Entry already created for the selected date.");
    }
  };
  const renderCalendarListView = (item, index) => {
    return (
      <View
        style={[
          styles.calendarLsitMain,
          {
            marginBottom: expandIndex.includes(index)
              ? responsiveHeight(5)
              : responsiveHeight(1.8),
          },
        ]}
        key={index}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.calendarLsitViewDate}>
            <Text style={styles.calendarLsitViewDateText}>
              {getDayInWord(new Date(item.date).getDay())}
            </Text>
            <View style={styles.calendarLsitViewDateView}>
              <Text style={styles.calendarLsitViewDateText_1}>
                {new Date(item.date).getDate()}
              </Text>
            </View>
          </View>
          <View style={styles.greenDot} />
        </View>

        <View
          style={[
            styles.calendarLsitViewContent,
            {
              height: !expandIndex.includes(index)
                ? responsiveHeight(13)
                : "auto",
              backgroundColor:
                item.smile == 0
                  ? "#4BCEA6"
                  : item.smile == 1
                  ? "#EF6586"
                  : item.smile == 2
                  ? "#5DB1CC"
                  : "#fff",
              elevation: 2,
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 2 }, // change this for more shadow
              shadowOpacity: 0.2,
              shadowRadius: 3,
              // borderBottomWidth: 0.2,
              // borderRightWidth: 0.2,
              // borderBottomColor: AppColors.lightGrey,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => (item.smile != 3 ? setExpandedView(index) : null)}
            activeOpacity={1}
          >
            {item.smile != 3 && (
              <View>
                <TouchableOpacity
                  // style={{ padding: responsiveWidth(2) }}
                  onPress={() => {
                    setPopUpIndexView(index);
                  }}
                >
                  <Image
                    source={AppImages.ThreedotsWhite}
                    style={styles.dotsImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                {popupIndex.includes(index) && (
                  <View
                    style={{
                      position: "absolute",
                      backgroundColor: "#F0F9F7",
                      top: responsiveHeight(2),
                      left: responsiveWidth(0),
                      width: responsiveWidth(24),
                      borderRadius: responsiveWidth(2),
                      zIndex: 9999,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: responsiveWidth(4),
                        paddingVertical: responsiveHeight(1.5),
                      }}
                      onPress={() => {
                        editEntry(item, index);
                      }}
                    >
                      <Text
                        style={{
                          fontSize: responsiveFontSize(2),
                          fontFamily: AppFonts.regular,
                        }}
                      >
                        Edit
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: responsiveWidth(4),
                        paddingTop: responsiveHeight(0.5),
                        paddingVertical: responsiveHeight(2),
                      }}
                      onPress={() => {
                        setShowDeleteModal(true);
                        setDeleteItem({
                          id: TrackerState?.entry?.id,
                          index: index,
                        });
                        // onPress={() => {
                        //   Alert.alert(
                        //     "",
                        //     "Are you sure you want to delete this entry.",
                        //     [
                        //       {
                        //         text: "No",
                        //         onPress: () => setPopUpIndexView(index),
                        //         style: "cancel",
                        //       },
                        //       {
                        //         text: "Yes",
                        //         onPress: () => deleteEntry(item, index),
                        //       },
                        //     ]
                        //   );
                      }}
                    >
                      <Text
                        style={{
                          fontSize: responsiveFontSize(2),
                          fontFamily: AppFonts.regular,
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
            <View
              style={{
                // flex: 1,
                justifyContent: "center",
                height: responsiveHeight(9),
                marginBottom: responsiveHeight(0.6),
              }}
            >
              <View style={styles.calendarLsitViewContentTextView}>
                <Text
                  style={
                    item.smile == 3
                      ? styles.calendarLsitViewContentText_1
                      : styles.calendarLsitViewContentText
                  }
                >
                  {item?.text || "No Entry on this Day"}
                </Text>
                {item.smile != 3 && (
                  <View style={styles.smileView}>
                    <Image
                      source={
                        item.smile == 0
                          ? AppImages.goodSmile
                          : item.smile == 1
                          ? AppImages.badSmile
                          : AppImages.okSmile
                      }
                      style={styles.smileImage}
                      resizeMode="contain"
                    />
                    <Image
                      source={
                        expandIndex.includes(index)
                          ? AppImages.simpleDownArrow
                          : AppImages.simpleRightArrow
                      }
                      style={
                        expandIndex.includes(index)
                          ? styles.simpleDownArrowImage
                          : styles.simpleArrowImage
                      }
                      resizeMode="contain"
                    />
                  </View>
                )}
              </View>
            </View>
            {item.smile == 3 && (
              <View
                style={{
                  alignItems: "center",
                  marginTop: responsiveHeight(0.5),
                }}
              >
                <Image
                  resizeMode="contain"
                  source={AppImages.simpleDownArrowDark}
                  style={{ height: 6.2, width: 10 }}
                />
              </View>
            )}
            <View
              style={{ display: expandIndex.includes(index) ? "flex" : "none" }}
            >
              <View style={styles.calendarLsitViewContentTextView}>
                <Text style={styles.calendarLsitViewContentSubText}>
                  {item?.subText}
                </Text>
              </View>
              {item?.image && (
                <View style={styles.calendarLsitImageView}>
                  <Image
                    onLoadStart={() => {
                      setLoadingImage(true);
                    }}
                    onLoadEnd={() => {
                      setLoadingImage(false);
                    }}
                    source={{ uri: item?.image }}
                    style={styles.calendarLsitImage}
                    // resizeMode="stretch"
                  />
                  {loadingImage && (
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        bottom: responsiveHeight(8.5),
                      }}
                    >
                      <ActivityIndicator color={"#fff"} size="small" />
                    </View>
                  )}
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderCalenderGridView = () => {
    return (
      <>
        <CalendarStrip
          selectedDate={TrackerState?.selectedDate}
          onPressDate={(date) => {
            // setSelectedDate(moment(date));
            ApiHit(moment(date));
          }}
          markedDate={[]}
        />
        {TrackerState?.entry?.id ? (
          <View style={{ padding: responsiveWidth(3), paddingTop: 4 }}>
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{ padding: responsiveWidth(2) }}
                onPress={() => {
                  setShowPopUp(!showPopUp);
                }}
              >
                <Image
                  source={AppImages.dots}
                  style={styles.dotsImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {showPopUp && (
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "#F0F9F7",
                    top: responsiveHeight(3),
                    right: responsiveWidth(1),
                    width: responsiveWidth(24),
                    borderRadius: responsiveWidth(2),
                    zIndex: 9999,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: responsiveWidth(4),
                      paddingVertical: responsiveHeight(1.5),
                    }}
                    onPress={() => {
                      editEntry(TrackerState?.entry, 0);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontFamily: AppFonts.regular,
                      }}
                    >
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: responsiveWidth(4),
                      paddingTop: responsiveHeight(0.5),
                      paddingVertical: responsiveHeight(2),
                    }}
                    onPress={() => {
                      setShowDeleteModal(true);
                      setDeleteItem({
                        id: TrackerState?.entry?.id,
                        index: 0,
                      });
                      // Alert.alert(
                      //   "",
                      //   "Are you sure you want to delete this entry?",
                      //   [
                      //     {
                      //       text: "No",
                      //       onPress: () => setShowPopUp(false),
                      //       style: "cancel",
                      //     },
                      //     {
                      //       text: "Yes",
                      //       onPress: () =>
                      //         deleteEntry({ id: TrackerState?.entry?.id }, 0),
                      //     },
                      //   ]
                      // );
                    }}
                  >
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontFamily: AppFonts.regular,
                      }}
                    >
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                backgroundColor:
                  TrackerState?.entry?.attributes?.feeling == "good"
                    ? "#4BCEA6"
                    : TrackerState?.entry?.attributes?.feeling == "bad"
                    ? "#EF6586"
                    : "#5DB1CC",
                marginTop: responsiveHeight(1),
                flexDirection: "row",
                justifyContent: "space-between",
                // paddingHorizontal: responsiveWidth(10),
                paddingLeft: responsiveWidth(5),
                paddingRight: responsiveWidth(7),
                paddingTop: responsiveHeight(4),
                paddingBottom: responsiveHeight(0.5),
                margin: responsiveWidth(2),
                borderTopRightRadius: responsiveWidth(5),
                borderBottomLeftRadius: responsiveWidth(5),
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: responsiveFontSize(2.5),
                    fontFamily: AppFonts.regular,
                  }}
                >
                  How were you feeling on this day?
                </Text>
              </View>
              <View
                style={{
                  flex: 0.3,
                  marginLeft: responsiveWidth(2),
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: responsiveHeight(2),
                }}
              >
                <Image
                  source={
                    TrackerState?.entry?.attributes?.feeling == "good"
                      ? AppImages.goodSmile
                      : TrackerState?.entry?.attributes?.feeling == "bad"
                      ? AppImages.badSmile
                      : AppImages.okSmile
                  }
                  style={styles.smileImage}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: responsiveFontSize(1.6),
                    marginVertical: responsiveHeight(0.6),
                    fontFamily: AppFonts.semiBold,
                  }}
                >
                  {TrackerState?.entry?.attributes?.feeling
                    .charAt(0)
                    .toUpperCase() +
                    TrackerState?.entry?.attributes?.feeling.slice(1)}
                  {}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "rgba(173, 161, 161, 0.08)",
                borderRadius: responsiveWidth(5),
                paddingHorizontal: responsiveWidth(3),
                marginBottom: responsiveHeight(15),
                paddingBottom: responsiveHeight(2),
              }}
            >
              <Text
                style={{
                  color: AppColors.main,
                  fontSize: responsiveFontSize(2.3),
                  fontFamily: AppFonts.regular,
                  marginTop: responsiveHeight(2.5),
                }}
              >
                Journal Entry
              </Text>
              <Text
                style={{
                  color: AppColors.main,
                  fontSize: responsiveFontSize(1.7),
                  fontFamily: AppFonts.light,
                  marginTop: responsiveHeight(1.5),
                  marginBottom: TrackerState?.entry?.attributes?.image
                    ? 0
                    : responsiveHeight(2),
                }}
              >
                {TrackerState?.entry?.attributes?.description}
              </Text>
              {TrackerState?.entry?.attributes?.image && (
                <>
                  <Image
                    onLoadStart={() => {
                      setLoadingImage(true);
                    }}
                    onLoadEnd={() => {
                      setLoadingImage(false);
                    }}
                    source={{ uri: TrackerState?.entry?.attributes?.image }}
                    style={{
                      marginTop: responsiveHeight(2),
                      height: responsiveHeight(25),
                      width: responsiveWidth(90),
                      borderRadius: 10,
                      alignSelf: "center",
                    }}
                    // resizeMode="stretch"
                  />
                  {loadingImage && (
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        bottom: responsiveHeight(12.5),
                      }}
                    >
                      <ActivityIndicator color={"#48CDA5"} size="small" />
                    </View>
                  )}
                </>
              )}
            </View>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              height: responsiveHeight(40),
              marginBottom: responsiveHeight(10),
              // backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: AppColors.main,
                fontSize: responsiveFontSize(1.7),
                fontFamily: AppFonts.light,
              }}
            >
              No entry found
            </Text>
          </View>
        )}
      </>
    );
  };

  const RenderCalenderView = () => {
    return (
      <View style={styles.lowerContainer}>
        <View style={styles.lowerInnerContainer}>
          {viewType == 2 && (
            <FlatList
              data={TrackerState?.allEntry}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              // numColumns={1}
              // horizontal
              extraData={TrackerState?.allEntry}
              style={[
                styles.flatListView,
                { display: viewType == 2 ? "flex" : "none" },
              ]}
              contentContainerStyle={styles.tilesflatlist}
              renderItem={({ item, index }) => {
                return renderCalendarListView(item, index);
              }}
            />
          )}

          {viewType == 1 && renderCalenderGridView()}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Loader load={TrackerState.onLoad} />
      <ConfirmPopupModal
        load={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setPopUpIndexView(deleteItem?.index);
          setShowPopUp(false);
          setDeleteItem({});
        }}
        text="Are you sure you want to delete this entry?"
        onAction={() => deleteEntry()}
      />
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.upperContainer}>
          <View style={styles.circle} />
          <Text style={styles.affirmationText}>{AppConstants.myTracker}</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <ImageBackground
              source={AppImages.bigRectangleRound}
              style={styles.addMyAffirmation}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.percantageView}>
                  <Text style={styles.percantageText}>
                    {Math.abs(TrackerState?.totalPercentage * 100)} %
                  </Text>
                  <Image
                    source={
                      Math.sign(TrackerState?.totalPercentage) == -1
                        ? AppImages.downArrow
                        : AppImages.upArrow
                    }
                    resizeMode="contain"
                    style={styles.upArrowImage}
                  />
                </View>
                <View style={styles.percentageEntryView}>
                  <Image
                    source={AppImages.editEntry}
                    style={styles.editEntryImage}
                    resizeMode="contain"
                  />
                  <View style={styles.percentageEntryTextView}>
                    <Text style={styles.percentageEntryText}>
                      {TrackerState?.totalEntry}{" "}
                      {TrackerState?.totalEntry > 1 ? "Entries" : "Entry"} this
                      month
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.optionView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                createJournalentry();
              }}
            >
              <Image source={AppImages.edit} style={styles.optionsImage} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => onTabPress(1)}>
              <Image source={AppImages.calender} style={styles.optionsImage} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => onTabPress(2)}>
              <Image source={AppImages.toggle} style={styles.optionsImage} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.calenderViewUpper,
              { display: viewType == 2 ? "flex" : "none" },
            ]}
          >
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => changeMonth(-1)}
              >
                <Image
                  source={AppImages.leftArrow}
                  style={styles.leftRightArrowImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.calenderViewDateUpper}>
              <Image
                source={AppImages.calenderWhite}
                style={styles.calendarImage}
              />
              <Text style={styles.calenderDateUpper}>
                {getMonthInWord(
                  new Date(TrackerState?.selectedDate).getMonth()
                )}{" "}
                {new Date(TrackerState?.selectedDate).getFullYear()}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => changeMonth(1)}
              >
                <Image
                  source={AppImages.rightArrow}
                  style={styles.leftRightArrowImage}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {RenderCalenderView()}
      </ScrollView>
    </View>
  );
};

export default MyTracker;
