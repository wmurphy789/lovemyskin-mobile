import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  upperContainer: {
    backgroundColor: AppColors.main,
    // height: responsiveHeight(50),
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(3),
  },
  lowerContainer: {
    backgroundColor: AppColors.main,
  },
  lowerInnerContainer: {
    backgroundColor: AppColors.white,
    borderTopRightRadius: responsiveWidth(10),
    borderTopLeftRadius: responsiveWidth(10),
  },
  circle: {
    backgroundColor: "rgba(255,255,255, 0.05)",
    borderRadius: responsiveWidth(100),
    height: responsiveWidth(100),
    width: responsiveWidth(100),
    position: "absolute",
    // left: respon,
    left: responsiveWidth(50),
  },
  affirmationText: {
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(2),
    color: AppColors.white,
    fontFamily: AppFonts.regular,
    marginLeft: responsiveWidth(2.8),
    fontSize: responsiveFontSize(3),
  },
  addMyAffirmation: {
    width: responsiveWidth(75),
    height: responsiveHeight(20),
    alignSelf: "center",
    borderRadius: 10,
    // opacity: 0.9,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  upArrowImage: {
    width: responsiveWidth(7),
    height: responsiveWidth(6),
    marginLeft: responsiveWidth(3),
  },
  editEntryImage: {
    width: responsiveWidth(7.8),
    height: responsiveWidth(8.5),
    marginRight: responsiveWidth(3.5),
  },
  optionView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
  },
  optionsImage: {
    width: responsiveWidth(12),
    height: responsiveWidth(12.35),
    marginHorizontal: responsiveWidth(1),
  },
  leftRightArrowImage: {
    width: responsiveWidth(8),
    height: responsiveWidth(8.05),
  },
  calendarImage: {
    width: responsiveWidth(6),
    height: responsiveWidth(5.2),
  },
  tilesflatlist: {
    // alignItems: "center",
    padding: responsiveWidth(3),
  },
  flatListView: {
    // height: responsiveHeight(90),
    paddingVertical: responsiveHeight(1.3),
    paddingBottom: responsiveHeight(15),
    paddingTop: 30,
    // overflow: "hidden",
  },
  tileView: {
    height: responsiveHeight(25),
    width: responsiveWidth(40),
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveWidth(5),
    borderRadius: 20,
    justifyContent: "space-between",
  },
  tileInner: {
    flex: 1,
    justifyContent: "center",
    paddingTop: responsiveHeight(1),
  },
  tileText: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    fontFamily: AppFonts.regular,
    paddingHorizontal: responsiveWidth(1),
    textAlign: "center",
  },
  tileImage: {
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    alignSelf: "center",
  },
  tileCount: {
    fontFamily: AppFonts.regular,
    textAlign: "right",
    fontSize: responsiveFontSize(1.6),
    margin: responsiveWidth(1.5),
  },
  percantageText: {
    color: AppColors.white,
    fontFamily: AppFonts.semiBold,
    fontSize: responsiveFontSize(4),
  },
  percantageView: {
    flexDirection: "row",
    alignItems: "center",
  },
  percentageEntryView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: responsiveWidth(43),
    marginTop: responsiveHeight(2),
  },
  percentageEntryText: {
    color: AppColors.white,
    fontSize: responsiveFontSize(1.9),
    textAlign: "center",
    marginLeft: -responsiveWidth(7.5),
    // alignSelf: "center",
    // height: responsiveWidth(8.5),

    fontFamily: AppFonts.regular,
    width: responsiveWidth(40),
  },
  percentageEntryTextView: {
    // height: responsiveWidth(8.5),

    // position: "absolute",
    // marginLeft: -responsiveWidth(10),
    width: responsiveWidth(40),
  },
  dateViewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    height: "auto",
  },
  dateStyle: {
    color: "#2079B3",
    fontSize: 18,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    marginTop: 30,
    height: 50,
  },
  textStyle: {
    fontSize: 18,
    margin: 5,
  },
  calenderViewUpper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: responsiveHeight(2),
  },
  calenderViewDateUpper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#3D928D",
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(7),
    borderRadius: 20,
  },
  calenderDateUpper: {
    marginLeft: responsiveWidth(2),
    color: AppColors.white,
    fontFamily: AppFonts.regular,
  },
  smileImage: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
  },
  simpleArrowImage: {
    height: responsiveWidth(3),
    width: responsiveWidth(2),
    marginLeft: responsiveWidth(2),
    // marginTop: responsiveHeight(1),
  },
  simpleDownArrowImage: {
    height: responsiveWidth(2),
    width: responsiveWidth(3),
    marginLeft: responsiveWidth(2),
  },
  calendarLsitMain: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  calendarLsitViewDate: {
    height: responsiveHeight(14),
    // flex: 1,
    borderRadius: responsiveWidth(100),
    backgroundColor: AppColors.main,
    alignItems: "center",
    justifyContent: "center",
  },
  greenDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#65C7AF",
    marginTop: responsiveHeight(1),
    alignSelf: "center",
  },
  calendarLsitViewDateText: {
    fontSize: responsiveFontSize(2),
    color: AppColors.white,
  },
  calendarLsitViewDateText_1: {
    fontSize: responsiveFontSize(2),
    color: "#218381",
  },
  calendarLsitViewDateView: {
    backgroundColor: AppColors.white,
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(100),
    marginTop: responsiveHeight(1),
  },
  calendarLsitViewContent: {
    minHeight: responsiveHeight(10),
    flex: 5,
    // marginTop: responsiveHeight(1),
    borderRadius: 10,
    padding: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    marginLeft: responsiveWidth(3),
  },
  dotsImage: {
    width: responsiveWidth(6),
    height: responsiveWidth(2),
  },
  calendarLsitViewContentTextView: {
    // marginTop: responsiveHeight(1.3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendarLsitViewContentText: {
    fontSize: responsiveFontSize(2.5),
    color: AppColors.white,
    fontFamily: AppFonts.regular,
  },
  calendarLsitViewContentText_1: {
    fontSize: responsiveFontSize(2.5),
    color: AppColors.black,
    fontFamily: AppFonts.regular,
  },
  calendarLsitViewContentSubText: {
    fontSize: responsiveFontSize(1.5),
    color: AppColors.white,
    fontFamily: AppFonts.light,
  },
  smileView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendarLsitImageView: {
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(1),
    alignItems: "center",
    justifyContent: "center",
  },
  calendarLsitImage: {
    height: responsiveHeight(18),
    width: responsiveWidth(70),
    borderRadius: responsiveWidth(2),
  },
});
