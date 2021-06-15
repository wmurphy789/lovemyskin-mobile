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
    width: "100%",
    flex: 1,
    backgroundColor: AppColors.white,
  },
  headerContainer: {
    width: responsiveWidth(100),
    height: 250,
    backgroundColor: AppColors.white,
  },
  headerImage: {
    width: responsiveWidth(100),
    height: 250,
    justifyContent: "space-between",
    paddingBottom: 50,
    backgroundColor: AppColors.white,
  },
  logoImage: {
    height: responsiveWidth(18),
    width: responsiveWidth(18),
    alignSelf: "center",
    marginTop: responsiveHeight(6.5),
  },
  welcomeBackText: {
    marginLeft: responsiveWidth(5),
    fontFamily: AppFonts.regular,
    fontSize: responsiveFontSize(3),
    marginTop: 60,
    color: AppColors.darkGrey,
  },
  introText: {
    color: AppColors.darkGrey,
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.5),
    width: responsiveWidth(90),
    // alignSelf: "center",
    lineHeight: 18,
    marginTop: -20,
    marginBottom: responsiveHeight(3.2),
  },
  input: {
    // marginTop: responsiveHeight(1.5),
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginVertical: responsiveHeight(2),
  },
  forgotPasswordText: {
    fontFamily: AppFonts.regular,
    color: AppColors.black,
  },
  dontHaveAccountButton: {
    alignSelf: "center",
    marginRight: responsiveWidth(4),
    marginVertical: responsiveHeight(2),
    marginBottom: responsiveHeight(5),
  },
  dontHaveAccountText: {
    fontFamily: AppFonts.regular,
    color: AppColors.black,
  },

  socialLoginButton: {
    width: responsiveWidth(90),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: responsiveHeight(2),
    marginTop: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    elevation: 0.5,
  },
  socialLoginImage: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
  },
  orText: {
    color: AppColors.darkGrey,
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.5),
  },
  socialLoginText: {
    color: AppColors.darkGrey,
    fontFamily: AppFonts.light,
    marginLeft: responsiveWidth(5),
    fontSize: responsiveFontSize(1.5),
  },
  fullButton: { marginTop: responsiveHeight(8) },
  socialLoginView: { marginTop: responsiveHeight(5), alignItems: "center" },
  socialLoginButtonsView: { marginVertical: responsiveHeight(2) },
  centerView: { flexDirection: "row", alignItems: "center" },
  inputView: { marginTop: responsiveHeight(3) },
  mainView: {
    paddingHorizontal: responsiveWidth(5),
  },
  socialLoginButtonsImageView: {
    flex: 1,
    alignItems: "flex-end",
  },
  socialLoginButtonsTextView: { flex: 2.5 },
});
