import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: responsiveWidth(5),
    zIndex: 9999,
  },
  // mainGreenTab: {
  //   height: responsiveWidth(19),
  //   width: responsiveWidth(19),
  //   bottom: 28,
  //   bottom: responsiveHeight(4.05),
  //   left: 1,
  //   borderRadius: responsiveWidth(100),
  //   backgroundColor: "#00CDA9",
  //   alignSelf: "center",
  //   // elevation: 8,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   zIndex: 99999,
  // },
  mainGreenTab: {
    height: responsiveWidth(19),
    width: responsiveWidth(19),
    bottom: responsiveHeight(3.92),
    left: responsiveWidth(0.1),
    borderRadius: responsiveWidth(100),
    backgroundColor: "#00CDA9",
    alignSelf: "center",
    // elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
  },
  tabIcon: {
    height: 20,
    width: 20,
  },
  centerTab: {
    height: 50,
    width: 50,
  },
  myTrackerImage: {
    height: 17,
    width: 35,
  },
  normalTabs: {
    width: responsiveWidth(19),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
  },
  tabsTitle: {
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.2),
    marginTop: 3,
    color: AppColors.black,
  },
  backgroundImage: {
    height: 100,
    // height: 63,
    width: responsiveWidth(100),
    // backgroundColor: "transparent",
    // backgroundColor: "#0000",
    // alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(5),
    position: "absolute",
    bottom: -20,
    // left: 0,
    // bottom: responsiveHeight(0),
  },
  backgroundImage_1: {
    // position: "absolute",
    shadowOffset: { width: -1, height: -1 },
    shadowColor: "#ccc",
    shadowOpacity: 1,
    // elevation: 3,
    // background color must be set
    backgroundColor: "#0000",
  },
});
