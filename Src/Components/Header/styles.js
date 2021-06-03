import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  infoText: {
    fontFamily: AppFonts.light,
    color: AppColors.mediumGrey,
    marginLeft: responsiveWidth(2),
    marginTop: 10,
  },
  curveHeaderImage: {
    flex: 1,
    paddingTop: responsiveHeight(10),
    // paddingHorizontal: responsiveWidth(5),
    // paddingTop: 70,
    paddingHorizontal: 15,
  },
  curveHeaderContainer: {
    // height: responsiveHeight(17),
    height: 185,
    width: responsiveWidth(110),
    backgroundColor: "#fff",
    marginBottom: -20,
  },
  curveHeaderButtonsView: {
    flexDirection: "row",
    width: responsiveWidth(92),
    justifyContent: "space-between",
  },
  curveheaderButton: {
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  curveHeaderIcon: {
    height: 20,
    width: 20,
  },
  title: {
    color: AppColors.TitleGreen,
    // fontSize: responsiveFontSize(2.5),
    fontSize: 18,
    fontFamily: AppFonts.semiBold,
    // marginTop: responsiveHeight(2),

    marginLeft: responsiveWidth(2),
  },
});
