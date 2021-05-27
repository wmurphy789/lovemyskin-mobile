import { StyleSheet } from "react-native";

import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    uploadImageContainer: {
        height: responsiveWidth(88),
        width: responsiveWidth(88),
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: responsiveHeight(4),
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'rgba(33, 131, 129, 0.1)'
    },
    cameraButton: {
        alignItems: "center"
    },
    cameraText: {
        marginTop: responsiveHeight(1),
        fontFamily: AppFonts.light,
        color: AppColors.main
    },
    cameraIcon: {
        height: responsiveWidth(8),
        width: responsiveWidth(8)
    },
    infoText: {
        fontFamily: AppFonts.light,
        color: AppColors.mediumGrey,
        marginLeft: responsiveWidth(6)
    },
    button: {
        width: responsiveWidth(88)
    },
    feedbackButton: {
        backgroundColor: 'rgba(33, 131, 129, 0.5)',
        paddingHorizontal: responsiveWidth(7),
        borderRadius: 5,
        marginTop: responsiveHeight(3),
        paddingVertical: responsiveHeight(0.2)
    },
    feedbacktext: {
        fontFamily: AppFonts.semiBold,
        color: AppColors.white
    },
    poweredbyAutoderm: {
        fontSize:responsiveFontSize(1.2),
        marginTop:responsiveHeight(1),
        color:AppColors.mediumGrey
    }


})