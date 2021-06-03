import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  profileImageContainer: {
    width: responsiveWidth(100),
    alignItems: "center",
    marginTop: -20,
  },
  profileImage: {
    height: responsiveWidth(42),
    width: responsiveWidth(42),
    borderRadius: responsiveWidth(10),
    alignSelf: "center",
    marginBottom: responsiveHeight(2),
  },
  input: {
    alignSelf: "center",
    width: responsiveWidth(85),
    // marginTop: responsiveHeight(2),
    marginTop: responsiveHeight(2),
  },
  changePasswordButton: {
    alignSelf: "flex-start",
    marginLeft: responsiveWidth(7.5),
    marginVertical: responsiveHeight(4),
    marginBottom: responsiveHeight(5),
  },
  changePasswordText: {
    fontFamily: AppFonts.semiBold,
    color: "#218381",
    textDecorationLine: "underline",
    marginBottom: responsiveHeight(4),
  },
  editButton: {
    position: "absolute",
    bottom: -1,
    right: responsiveWidth(25.5),
    // backgroundColor: "#f11"
  },
  editImage: {
    height: responsiveWidth(11),
    width: responsiveWidth(11),
  },
});
