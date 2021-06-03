import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 30,
  },
  input: {
    alignSelf: "center",
    width: responsiveWidth(88),
    // marginTop: responsiveHeight(2),
    marginTop: responsiveHeight(2),
  },
  button: {
    alignSelf: "center",
    marginTop: 150,
    marginBottom: responsiveHeight(5),
  },
});
