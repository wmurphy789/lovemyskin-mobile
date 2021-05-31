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
  mainGreenTab: {
    height: responsiveWidth(19),
    width: responsiveWidth(19),
    bottom: responsiveHeight(4.8),
    left: 1,
    borderRadius: responsiveWidth(100),
    backgroundColor: "#00CDA9",
    alignSelf: "center",
    elevation: 1,
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
    height: responsiveHeight(8),
    // height: 70,
    width: responsiveWidth(100),
    // backgroundColor: "transparent",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(5),
    position: "absolute",
    // left: 0,
    bottom: responsiveHeight(0),
  },
});
