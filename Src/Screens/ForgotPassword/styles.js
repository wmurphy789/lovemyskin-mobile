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
    backgroundColor: AppColors.white,
    paddingHorizontal: responsiveWidth(5),
  },
  backbutton: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: responsiveHeight(10),
  },
  backIcon: {
    height: responsiveWidth(5.5),
    width: responsiveWidth(5.5),
  },
  ForgotPasswordText: {
    fontFamily: AppFonts.regular,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(2),
    color: AppColors.darkGrey,
    marginBottom: responsiveHeight(3),
  },
  button: {
    marginTop: responsiveHeight(8),
  },
  input: {
    marginTop: responsiveHeight(1),
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
