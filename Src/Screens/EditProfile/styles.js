import { StyleSheet } from "react-native";

import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    container: {
        flex: 1
    },
    profileImage: {
        height: responsiveWidth(40),
        width: responsiveWidth(40),
        borderRadius: 20,
        alignSelf: "center",
        marginBottom: responsiveHeight(1)
    },
    input: {
        alignSelf: "center",
        marginTop: responsiveHeight(2)
    },
    changePasswordButton: {
        alignSelf: "flex-start",
        marginLeft: responsiveWidth(4),
        marginVertical: responsiveHeight(4),
    },
    changePasswordText: {
        fontFamily: AppFonts.semiBold,
        color: AppColors.TitleGreen,
        textDecorationLine: 'underline',
        marginBottom:responsiveHeight(4)
    }
})