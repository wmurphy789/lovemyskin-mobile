import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import { AppColors } from '../../Theme/AppColors'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white
    },
    paragraph: {
        lineHeight: 20,
        marginHorizontal:20,
        fontFamily: AppFonts.regular,
        color: "#3F3F3F",
        fontSize: responsiveFontSize(1.5)
    },
    customStyles: {
        marginBottom: 50
    }
})