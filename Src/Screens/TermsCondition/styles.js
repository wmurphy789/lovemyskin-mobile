import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  paragraph: {
    lineHeight: 20,
    fontFamily: AppFonts.light,
    color: "rgba(63, 63, 63, 0.6)",
    fontSize: responsiveFontSize(1.8),
  },
  customStyles: {
    marginBottom: 50,
  },
});
