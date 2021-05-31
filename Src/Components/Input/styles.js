import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  iconInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(90),
    paddingHorizontal: responsiveWidth(2),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    // alignSelf: "center",
  },
  iconInputIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  iconInputField: {
    width: responsiveWidth(82),
    // height: responsiveHeight(5),
    marginLeft: responsiveWidth(1.5),
    fontFamily: AppFonts.regular,
  },
  simpleInputContainer: {
    // alignItems: "center",
    width: responsiveWidth(92),
    // backgroundColor: "#f11",
    height: 37,
    paddingHorizontal: responsiveWidth(2),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
  },
  simpleInputField: {
    width: responsiveWidth(89),
    // height: responsiveHeight(5),
    fontSize: 12,
    fontFamily: AppFonts.regular,
  },
});
