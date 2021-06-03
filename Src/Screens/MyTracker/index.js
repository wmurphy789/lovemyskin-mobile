import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
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
const dummyImage =
  "https://media.istockphoto.com/photos/woman-touching-face-looking-at-skin-in-mirror-at-bathroom-picture-id1178909320?k=6&m=1178909320&s=612x612&w=0&h=XcsN4pWw7el_VcD3sUwG5E5_M5R0zHeF92IcukhjkyI=";
const options = [
  {
    date: new Date(),
    text: "Good",
    smile: 0,
    subText:
      "Tell us about your day and how things are going with your skin condition....",
    image: AppImages.dummyImage,
  },
  {
    date: new Date(),
    text: "Bad",
    smile: 1,
    subText:
      "Tell us about your day and how things are going with your skin condition....",
    image: AppImages.dummyImage,
  },
  {
    date: new Date(),
    text: "Ok",
    smile: 2,
    subText:
      "Tell us about your day and how things are going with your skin condition....",
    image: AppImages.dummyImage,
  },
  {
    date: new Date(),
    text: null,
    smile: 3,
    subText: null,
    image: null,
  },
  {
    date: new Date(),
    text: "Good",
    smile: 0,
    subText:
      "Tell us about your day and how things are going with your skin condition....",
    image: AppImages.dummyImage,
  },
  {
    date: new Date(),
    text: "Bad",
    smile: 1,
    subText:
      "Tell us about your day and how things are going with your skin condition....",
    image: AppImages.dummyImage,
  },
  {
    date: new Date(),
    text: "Ok",
    smile: 2,
    subText:
      "Tell us about your day and how things are going with your skin condition....",
    image: AppImages.dummyImage,
  },
];

const MyTracker = (props) => {
  const [viewType, setViewType] = useState(1);
  const [expandIndex, setExpandIndex] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUpListView, setShowPopUpListView] = useState(false);
  const [popupIndex, setPopupIndex] = useState([]);
  const getDayInWord = (day) => {
    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const text = weekNames[day];
    return text;
  };
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      setViewType(1);
      setSelectedDate(new Date());
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);
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
              elevation: 20,
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 10 }, // change this for more shadow
              shadowOpacity: 0.4,
              shadowRadius: 6,
              // borderBottomWidth: 0.2,
              // borderRightWidth: 0.2,
              // borderBottomColor: AppColors.lightGrey,
            },
          ]}
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
                      setShowPopUpListView(false);
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
                      setShowPopUpListView(false);
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
            <TouchableOpacity
              onPress={() => (item.smile != 3 ? setExpandedView(index) : null)}
            >
              <View style={styles.calendarLsitViewContentTextView}>
                <Text
                  style={
                    item.smile == 3
                      ? styles.calendarLsitViewContentText_1
                      : styles.calendarLsitViewContentText
                  }
                >
                  {item?.text ? item?.text : "No Entry on this Day"}
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
            </TouchableOpacity>
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
                {item.subText}
              </Text>
            </View>
            <View style={styles.calendarLsitImageView}>
              <Image source={item.image} style={styles.calendarLsitImage} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderCalenderGridView = () => {
    return (
      <>
        <CalendarStrip
          selectedDate={selectedDate}
          onPressDate={(date) => {
            setSelectedDate(date);
          }}
          markedDate={[]}
        />
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
                    setShowPopUp(false);
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
                    setShowPopUp(false);
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
              backgroundColor: "#48CDA5",
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
                source={AppImages.goodSmile}
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
                Good
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "rgba(173, 161, 161, 0.08)",
              borderRadius: responsiveWidth(5),
              paddingHorizontal: responsiveWidth(3),
              marginBottom: responsiveHeight(15),
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
              }}
            >
              Tell us about your day and how things are going with your skin
              condition....Tell us about your day and how things are going with
              your skin condition....Tell us about your day and how things are
              going with your skin condition....
            </Text>
            <Image
              source={{ uri: dummyImage }}
              style={{
                marginTop: responsiveHeight(2),
                height: responsiveHeight(30),
                width: responsiveWidth(90),
                borderRadius: 10,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </>
    );
  };

  const RenderCalenderView = () => {
    return (
      <View style={styles.lowerContainer}>
        <View style={styles.lowerInnerContainer}>
          {viewType == 2 && (
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              // numColumns={1}
              // horizontal
              extraData={options}
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
                  <Text style={styles.percantageText}>35.2%</Text>
                  <Image
                    source={AppImages.upArrow}
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
                      29 Entries this month
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
                setViewType(0), props.navigation.navigate("CreateJournalEntry");
              }}
            >
              <Image source={AppImages.edit} style={styles.optionsImage} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setViewType(1)}
            >
              <Image source={AppImages.calender} style={styles.optionsImage} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setViewType(2)}
            >
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
              <TouchableOpacity activeOpacity={0.8}>
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
              <Text style={styles.calenderDateUpper}>May 2021</Text>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.8}>
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
