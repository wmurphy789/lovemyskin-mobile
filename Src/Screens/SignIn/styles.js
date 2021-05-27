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
    headerContainer: {
        width: responsiveWidth(100),
        height: responsiveHeight(30),
        backgroundColor: AppColors.white,
    },
    headerImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(30),
        backgroundColor: '#f0f0f0',
    },
    logoImage: {
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        alignSelf: "center",
        marginTop: responsiveHeight(8)
    },
    welcomeBackText: {
        marginLeft: responsiveWidth(5),
        fontFamily: AppFonts.semiBold,
        fontSize: responsiveFontSize(3),
        marginTop: responsiveHeight(10),
        color: AppColors.darkGrey
    },
    introText: {
        color: AppColors.darkGrey,
        fontFamily: AppFonts.light,
        width: responsiveWidth(90),
        alignSelf: "center",
        lineHeight: 20,
        marginBottom: responsiveHeight(2)
    },
    input: {
        marginTop: responsiveHeight(1)
    },
    forgotPasswordButton: {
        alignSelf: "flex-end",
        marginRight: responsiveWidth(4),
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(4)
    },
    forgotPasswordText: {
        fontFamily: AppFonts.regular,
        color: AppColors.black
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