import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../Theme/ResponsiveDimensions";
import { AppColors } from "../../Theme/AppColors"
import { AppFonts } from "../../Theme/AppFonts"

export default StyleSheet.create({
    buttonImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width:responsiveWidth(95),
        height: responsiveHeight(6.5),
        alignSelf: "center",
    },
    buttonTitle: {
        color: AppColors.white,
        fontFamily: AppFonts.regular
    }
})