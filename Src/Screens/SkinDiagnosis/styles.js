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
    backgroundColor: AppColors.white,
  },
  scrollViewContainer: {
    backgroundColor: AppColors.white,
    paddingHorizontal: responsiveWidth(5),
  },

  uploadImageContainer: {
    // height: responsiveWidth(88),
    height: responsiveWidth(65),
    width: responsiveWidth(90),
    alignSelf: "center",
    borderRadius: 10,
    // marginVertical: responsiveHeight(4),
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F9F7",
  },
  cameraButton: {
    alignItems: "center",
  },
  cameraText: {
    marginTop: responsiveHeight(1),
    fontFamily: AppFonts.light,
    color: AppColors.main,
  },
  cameraIcon: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
  },
  infoText: {
    fontFamily: AppFonts.light,
    color: AppColors.mediumGrey,
    fontSize: responsiveFontSize(1.5),
    marginTop: 15,
  },
  button: {
    marginTop: responsiveHeight(5),
  },
  feedbackButton: {
    backgroundColor: "#67C6AF",
    paddingHorizontal: responsiveWidth(15),
    borderRadius: responsiveWidth(1.5),
    marginTop: responsiveHeight(6),
    paddingVertical: responsiveHeight(0.3),
  },
  feedbacktext: {
    fontFamily: AppFonts.regular,
    color: AppColors.white,
    fontSize: responsiveFontSize(1.5),
  },
  poweredbyAutoderm: {
    fontSize: responsiveFontSize(1.1),
    marginTop: responsiveHeight(0.4),
    color: AppColors.mediumGrey,
    marginBottom: 70,
  },
});
