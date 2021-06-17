import { StyleSheet, Dimensions } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  iconInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // width: responsiveWidth(90),
    paddingHorizontal: responsiveWidth(2),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    // paddingVertical: 3,
    // alignSelf: "center",
  },
  iconInputIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  iconInputField: {
    width: responsiveWidth(78),
    height: 30,
    // height: deviceHeight < 800 ? responsiveHeight(5.7) : responsiveHeight(5),
    fontSize: responsiveFontSize(1.7),
    marginLeft: responsiveWidth(1.5),
    fontFamily: AppFonts.light,
    // backgroundColor: "red",
  },
  simpleInputContainer: {
    // alignItems: "center",
    // width: responsiveWidth(92),
    // backgroundColor: "#f11",
    // height: 33,
    paddingHorizontal: responsiveWidth(2),
    borderBottomWidth: 1,
    // alignItems: "center",
    borderBottomColor: AppColors.lightGrey,
  },
  simpleInputField: {
    // width: responsiveWidth(89),
    // height: deviceHeight < 800 ? responsiveHeight(5.7) : responsiveHeight(5),
    fontSize: responsiveFontSize(1.7),
    fontFamily: AppFonts.light,
    paddingVertical: 3,
  },
});
