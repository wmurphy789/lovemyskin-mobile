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
    // width: "100%",
    flex: 1,
    // backgroundColor: AppColors.white,
    marginHorizontal: responsiveWidth(5),

  },
  backbutton: {
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: responsiveHeight(8),
    marginLeft: -responsiveWidth(1.5)
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  ForgotPasswordText: {
    fontFamily: AppFonts.regular,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(2),
    color: AppColors.darkGrey,
    marginBottom: responsiveHeight(3),
  },
  button: {
    marginTop: responsiveHeight(12),
  },
  input: {
    alignSelf: "center",
    width: responsiveWidth(88),
    // marginTop: responsiveHeight(2),
    marginTop: responsiveHeight(2),
  },
  dontHaveAccountButton: {
    alignSelf: "center",
    marginRight: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  dontHaveAccountText: {
    fontFamily: AppFonts.regular,
    color: AppColors.black,
  },
});
