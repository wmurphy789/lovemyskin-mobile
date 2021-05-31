import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";

import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
  },
  input: {
    alignSelf: "center",
    // marginTop: responsiveHeight(2),
    marginTop: 10,
  },
  button: {
    alignSelf: "center",
    marginTop: responsiveHeight(15),
    marginBottom: responsiveHeight(5),
  },
});
