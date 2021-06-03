import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  Image,
} from "react-native";
import Weeks from "./Weeks";
import moment from "moment";
import { AppImages } from "../../Theme/AppImages";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveFontSize,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";

const width = Dimensions.get("window").width;
const ITEM_LENGTH = width / 7;
// FORMAT: Wed May 16 2018 00:00:00 GMT+0800 (CST)

class DateItem extends PureComponent {
  render() {
    const { item, marked, highlight, onItemPress } = this.props;
    const solar = moment(item?.date).get("D");
    const highlightBgColor = "#5CCAAB";
    const normalBgColor = "white";
    const hightlightTextColor = "#fff";
    const normalTextColor = "rgba(0,0,0,0.9)";
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          disabled={!item?.enabled}
          underlayColor="#008b8b"
          style={styles.itemWrapButton}
          onPress={onItemPress}
        >
          <View
            style={[
              styles.itemView,
              {
                backgroundColor: highlight ? highlightBgColor : normalBgColor,
              },
            ]}
          >
            <Text
              style={[
                styles.itemDateText,
                {
                  color: item?.enabled
                    ? highlight
                      ? hightlightTextColor
                      : normalTextColor
                    : "#ccc",
                },
              ]}
            >
              {solar}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class CalendarStrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      isTodayVisible: true,
      expand: false,
      monthChangedDate: this.props.selectedDate,
      pageOfToday: 2, // page of today in calendar, start from 0
      currentPage: 2, // current page in calendar,  start from 0
    };
  }

  componentWillMount() {
    this.getInitialDates(this.props.selectedDate);
    const touchThreshold = 50;
    const speedThreshold = 0.2;
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dy, vy } = gestureState;
        if (dy > touchThreshold && vy > speedThreshold) {
          const { onSwipeDown } = this.props;
          onSwipeDown && onSwipeDown();
        }
        return false;
      },
      onPanResponderRelease: () => {},
    });
  }

  getInitialDates(d) {
    const date = d;
    const selectedDate = moment(date).get("D");
    const selectedDateMonth = moment(date).get("M") + 1;
    const selectedDateYear = moment(date).get("Y");
    const NoOfdaysInSelectedMonth = moment(date).daysInMonth();
    const NoOfdaysInSelectedPreMonth = moment(
      moment(date).subtract(1, "month")
    ).daysInMonth();
    const NoOfdaysInSelectedNextMonth = moment(
      moment(date).add(1, "month")
    ).daysInMonth();

    var allDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = "Sunday";
    var daysInPreMonth = [];
    var daysInSelectedMonth = [];
    var daysInNextMonth = [];

    let firstDayOfYear = moment(
      selectedDateMonth + "/" + "01/" + selectedDateYear
    ).format("dddd"); // FIrst Day of the year
    let gapBetweenFriday =
      allDays.indexOf(day) - allDays.indexOf(firstDayOfYear); // Gap between first day to next frday

    // Gives date of next
    if (gapBetweenFriday != 0) {
      let nextfirday = moment(
        selectedDateMonth + "/" + "01/" + selectedDateYear
      ).add(gapBetweenFriday, "day");

      daysInPreMonth.push({
        date: moment(nextfirday),
        enabled: false,
      });
      for (
        let index = 0;
        index <
        NoOfdaysInSelectedPreMonth - moment(daysInPreMonth[0].date).get("D");
        index++
      ) {
        daysInPreMonth.push({
          date: moment(daysInPreMonth[index].date).add(1, "day"),
          enabled: false,
        });
      }
    }

    daysInSelectedMonth.push({
      date: moment(selectedDateMonth + "/" + "01/" + selectedDateYear),
      enabled: true,
    });
    for (let index = 0; index < NoOfdaysInSelectedMonth - 1; index++) {
      daysInSelectedMonth.push({
        date: moment(daysInSelectedMonth[index].date).add(1, "day"),
        enabled: true,
      });
    }

    let lastDayOfMonth = moment(
      selectedDateMonth + "/" + NoOfdaysInSelectedMonth + "/" + selectedDateYear
    ).format("dddd"); // FIrst Day of the year
    let gapBetweenNextMonth =
      allDays.indexOf(day) - allDays.indexOf(lastDayOfMonth); // Gap between first day to next frday
    let nextDayMonth = moment(
      selectedDateMonth + "/" + NoOfdaysInSelectedMonth + "/" + selectedDateYear
    ).add(allDays.length - Math.abs(gapBetweenNextMonth), "day");

    daysInNextMonth.push({
      date: moment(
        daysInSelectedMonth[daysInSelectedMonth.length - 1].date
      ).add(1, "day"),
      enabled: false,
    });
    for (let index = 0; index < moment(nextDayMonth).get("D") - 2; index++) {
      daysInNextMonth.push({
        date: moment(daysInNextMonth[index].date).add(1, "day"),
        enabled: false,
      });
    }

    const data = [
      ...daysInPreMonth,
      ...daysInSelectedMonth,
      ...daysInNextMonth,
    ];
    // const data = [];
    this.setState({ datas: data });
    // return data
  }

  _renderHeader = () => {
    const { selectedDate } = this.props;

    // const dateFormatted_en = format(selectedDate, "");
    const dateFormatted = selectedDate;
    const getDayInWord = (day) => {
      const weekNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
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
      var selectedDate = new Date(this.state.monthChangedDate);
      var changedDate = selectedDate.setMonth(selectedDate.getMonth() + value);
      this.setState({ monthChangedDate: changedDate });
      this.getInitialDates(changedDate);
      // onMonthChange(changedDate);
    };
    return (
      <View style={styles.header}>
        <Text style={styles.headerDate}>
          {getDayInWord(new Date(dateFormatted).getDay())}
          {", "}
          {new Date(dateFormatted).getDate()}
          {", "}
          {new Date(dateFormatted).getFullYear()}
        </Text>
        <View style={{ marginRight: 5 }}>
          <View style={styles.calenderViewDateUpper}>
            <TouchableOpacity onPress={() => changeMonth(-1)}>
              <Image
                resizeMode="contain"
                source={AppImages.simpleLeftArrowdark}
                style={styles.simpleLeftArrowdarkImage}
              />
            </TouchableOpacity>
            <Image
              resizeMode="contain"
              source={AppImages.calenderDark}
              style={styles.calendarImage}
            />
            <Text style={styles.calenderDateUpper}>
              {getMonthInWord(new Date(this.state.monthChangedDate).getMonth())}{" "}
              {new Date(this.state.monthChangedDate).getFullYear()}
            </Text>
            <TouchableOpacity onPress={() => changeMonth(1)}>
              <Image
                resizeMode="contain"
                source={AppImages.simpleRightArrowdark}
                style={styles.simpleLeftArrowdarkImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderDate = (item) => {
    return (
      <DateItem
        item={item}
        onItemPress={(date) =>
          this.props.onPressDate && this.props.onPressDate(item?.date)
        }
        highlight={
          moment(this.props.selectedDate).isSame(item?.date, "day") &&
          moment(this.props.selectedDate).isSame(item?.date, "month") &&
          moment(this.props.selectedDate).isSame(item?.date, "year")
        }
        // marked={marked.find((d) => isSameDay(d, item.date))}
      />
    );
  };

  render() {
    const { onPressDate, selectedDate } = this.props;
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        {this._renderHeader()}
        <Weeks />
        {this.state.expand && (
          <FlatList
            ref={(ref) => (this._calendar = ref)}
            bounces={false}
            // horizontal
            numColumns={7}
            pagingEnabled
            // initialScrollIndex={
            //   7 * (moment(this.props.selectedDate).get("D") / 6)
            // }
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={500}
            getItemLayout={(data, index) => ({
              length: ITEM_LENGTH,
              offset: ITEM_LENGTH * index,
              index,
            })}
            removeClippedSubviews={false}
            onEndReachedThreshold={0.01}
            data={this.state.datas}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => this.renderDate(item)}
          />
        )}
        {!this.state.expand && (
          <FlatList
            ref={(ref) => (this._calendar = ref)}
            bounces={false}
            horizontal
            pagingEnabled
            // initialScrollIndex={
            //   7 * (moment(this.props.selectedDate).get("D") / 6)
            // }
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={500}
            getItemLayout={(data, index) => ({
              length: ITEM_LENGTH,
              offset: ITEM_LENGTH * index,
              index,
            })}
            removeClippedSubviews={false}
            onEndReachedThreshold={0.01}
            data={this.state.datas}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => this.renderDate(item)}
          />
        )}
        <TouchableOpacity
          onPress={() => this.setState({ expand: !this.state.expand })}
        >
          <View
            style={{
              alignItems: "center",
              paddingVertical: 3,
              borderBottomWidth: 1,
              marginHorizontal: 15,
              borderColor: "#ccc",
            }}
          >
            <Image
              resizeMode="contain"
              source={
                this.state.expand
                  ? AppImages.simpleUpArrowDark
                  : AppImages.simpleDownArrowDark
              }
              style={{ height: 8, width: 16 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

CalendarStrip.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  onPressDate: PropTypes.func,
  onPressGoToday: PropTypes.func,
  markedDate: PropTypes.array,
  onSwipeDown: PropTypes.func,
  isChinese: PropTypes.bool,
  showWeekNumber: PropTypes.bool,
  showChineseLunar: PropTypes.bool,
  weekStartsOn: PropTypes.number,
};

CalendarStrip.defaultProps = {
  isChinese: false,
  showWeekNumber: false,
  showChineseLunar: false,
  weekStartsOn: 0,
};

const styles = StyleSheet.create({
  container: {
    width,
    // height: 30 + 30 + 50 + 20,
    paddingTop: 20,
  },
  header: {
    height: 30,
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerDate: {
    color: "#000",
    fontSize: responsiveFontSize(2),
    fontFamily: AppFonts.regular,
  },
  headerDateWeek: {
    color: "#3D6DCF",
    fontSize: 14,
  },
  headerGoTodayButton: {
    borderRadius: 10,
    width: 20,
    height: 20,
    backgroundColor: "#3D6DCF",
    position: "absolute",
    top: 5,
    right: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  todayText: {
    fontSize: 12,
    color: "white",
  },
  itemContainer: {
    width: width / 7,
    height: 50,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "rgba(100,100,100,0.5)",
  },
  itemWrapButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemView: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
    width: 44,
    height: 44,
    borderRadius: 22,
    // marginLeft: responsiveWidth(5),
  },
  itemDateText: {
    fontSize: 15,
    fontFamily: AppFonts.regular,
    lineHeight: Platform.OS === "ios" ? 19 : 15,
  },
  itemLunarText: {
    fontSize: 10,
  },
  itemBottomDot: {
    width: 4,
    left: 20,
    height: 4,
    bottom: 4,
    borderRadius: 2,
    position: "absolute",
  },
  calendarImage: {
    width: 17,
    height: 16,
    marginLeft: 5,
  },
  simpleLeftArrowdarkImage: {
    width: 10,
    height: 9,
    // marginLeft: 5,
  },
  calenderDateUpper: {
    marginLeft: 3,
    color: AppColors.black,
    fontFamily: AppFonts.light,
    marginRight: 5,
  },
  calenderViewDateUpper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default CalendarStrip;
