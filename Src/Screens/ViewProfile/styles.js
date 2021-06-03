import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
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
  profileContainer: {
    // height: responsiveHeight(35),
    height: 310,
    width: responsiveWidth(100),
    backgroundColor: AppColors.main,
    alignItems: "center",
    // justifyContent: 'center',
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  menuContainer: {
    flex: 1,
  },
  profileImage: {
    height: responsiveWidth(42),
    width: responsiveWidth(42),
    borderRadius: responsiveWidth(10),
  },
  profileName: {
    color: AppColors.white,
    fontFamily: AppFonts.semiBold,
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1.8),
  },
  profileId: {
    color: AppColors.white,
    fontFamily: AppFonts.regular,
    marginTop: responsiveHeight(0.5),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: responsiveHeight(1.5),
  },
  menuItemIcon: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    marginLeft: responsiveWidth(7),
    marginRight: responsiveWidth(5),
  },
  scrollContainer: {
    backgroundColor: AppColors.white,
    // paddingTop: 50,
  },
});
