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
    height: 300,
    width: responsiveWidth(100),
    backgroundColor: AppColors.main,
    alignItems: "center",
    // justifyContent: 'center',
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  menuContainer: {
    flex: 1,
  },
  profileImage: {
    height: responsiveWidth(40),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(10),
  },
  profileName: {
    color: AppColors.white,
    fontFamily: AppFonts.semiBold,
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1),
  },
  profileId: {
    color: AppColors.white,
    fontFamily: AppFonts.regular,
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
  menuItemTitle: {
    fontFamily: AppFonts.light,
  },
  scrollContainer: {
    backgroundColor: AppColors.white,
    paddingTop: 50,
  },
});
