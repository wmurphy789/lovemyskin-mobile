import { StyleSheet } from "react-native";

import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#f0f0f0"
    },
    backbutton: {
        height: responsiveWidth(9),
        width: responsiveWidth(9),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(4)
    },
    backIcon: {
        height: responsiveWidth(5.5),
        width: responsiveWidth(5.5)
    },
    ForgotPasswordText: {

        marginLeft: responsiveWidth(5),
        fontFamily: AppFonts.semiBold,
        fontSize: responsiveFontSize(3),
        marginTop: responsiveHeight(2),
        color: AppColors.darkGrey,
        marginBottom: responsiveHeight(3)
    },
    button: {
        marginTop: responsiveHeight(4)
    },
    input: {
        marginTop: responsiveHeight(1)
    },
    dontHaveAccountButton: {
        alignSelf: "center",
        marginRight: responsiveWidth(4),
        marginTop: responsiveHeight(2)
    },
    dontHaveAccountText: {
        fontFamily: AppFonts.regular,
        color: AppColors.black
    }

})