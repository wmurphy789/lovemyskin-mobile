import { StyleSheet } from "react-native";

import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    // height: responsiveHeight(47),
    height: 280,
    width: responsiveWidth(93),
    alignSelf: "center",
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(4),
  },
  answerText: {
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.6),
    width: responsiveWidth(60),
  },
  pillIcon: {
    width: responsiveWidth(5),
    height: responsiveHeight(1.5),
    marginRight: responsiveWidth(2.5),
  },
  infoText: {
    fontFamily: AppFonts.regular,
    color: "#807C7C",
    alignSelf: "center",
    // textDecorationLine: "underline",
    // marginTop: responsiveHeight(3),
    // marginBottom: responsiveHeight(4),
  },
  topAnswersrankedView: {
    borderBottomWidth: 0.8,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(4),
    alignSelf: "center",
    borderBottomColor: "#807C7C",
  },
  readMoreButton: {
    backgroundColor: "#F0F9F7",
    paddingHorizontal: responsiveWidth(1.5),
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.5),
  },
  readMoreText: {
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1),
  },
  listView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: responsiveWidth(5),
    alignItems: "center",
    // marginVertical: responsiveHeight(1),
    marginVertical: 12,
  },
  scrollViewContainer: {
    paddingBottom: responsiveHeight(15),
    backgroundColor: AppColors.white,
  },
});
