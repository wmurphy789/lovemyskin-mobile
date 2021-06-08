import { Platform, StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  tabsContainer: {
    flex: 1,
  },
  selected: {
    color: AppColors.main,
    fontFamily: AppFonts.semiBold,
    width: responsiveWidth(18),
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
  notSelected: {
    color: AppColors.black,
    fontFamily: AppFonts.light,
    width: responsiveWidth(18),
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
  indicator: {
    height: responsiveHeight(0.3),
    backgroundColor: "#00CDA9",
    width: responsiveWidth(8),
    marginLeft: responsiveWidth(9),
    marginBottom: responsiveHeight(1.4),
    borderRadius: 40,
  },
  tabsContentFlatlist: {
    paddingTop: 25,
    backgroundColor: AppColors.white,

    // paddingBottom:110
  },
});
