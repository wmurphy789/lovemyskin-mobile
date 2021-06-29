import { StyleSheet } from "react-native";
import { isDeviceTablet } from "../../Support/DeviceInfo";

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
    // height: 250,
    backgroundColor: AppColors.white,
  },
  headerImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(27),
    justifyContent: "space-between",
    paddingBottom: 50,
    backgroundColor: AppColors.white,
  },
  logoImage: {
    height: responsiveWidth(18),
    width: responsiveWidth(18),
    alignSelf: "center",
    marginTop: responsiveHeight(1.5),
  },
  welcomeBackText: {
    marginLeft: responsiveWidth(5),
    fontFamily: AppFonts.regular,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(6.5),
    color: AppColors.darkGrey,
  },
  introText: {
    color: AppColors.darkGrey,
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.5),
    width: responsiveWidth(90),
    // alignSelf: "center",
    // lineHeight: 18,
    // marginTop: -30,
    marginBottom: responsiveHeight(3.2),

  },
  introTextTab: {
    color: AppColors.darkGrey,
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.5),
    width: responsiveWidth(90),
    // alignSelf: "center",
    // lineHeight: 18,
    // marginTop: responsiveHeight(-5),
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
    // marginRight: responsiveWidth(4),
    marginVertical: responsiveHeight(2),
    // marginBottom: responsiveHeight(5),
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
    marginTop: responsiveHeight(1.5),

    borderRadius: responsiveWidth(2),
    // borderWidth: 0.5,
    // borderColor: "#ccc",
    // elevation: 0.5,
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 }, // change this for more shadow
    shadowOpacity: 0.1,
    shadowRadius: 1,
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
    fontSize: responsiveFontSize(1.7),
  },
  fullButton: { marginTop: responsiveHeight(4) },
  socialLoginView: {
    marginTop: responsiveHeight(3),
    alignItems: "center",
    marginBottom: responsiveHeight(5),
  },
  socialLoginButtonsView: { marginVertical: responsiveHeight(2) },
  centerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
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
