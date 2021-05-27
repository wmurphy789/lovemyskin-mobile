import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
import { AppColors } from '../../Theme/AppColors'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
export default StyleSheet.create({
    container: { flex: 1 },
    paragraph: {
        lineHeight: 25,
        marginHorizontal: responsiveWidth(5),
        fontFamily: AppFonts.regular
    }
})