import { StyleSheet } from "react-native";

import { AppColors } from '../../Theme/AppColors'
import AppConstants from '../../Theme/AppConstants'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    imageContainer: {
        height: responsiveWidth(68),
        width: responsiveWidth(88),
        alignSelf: "center",
        borderRadius: 10,
        marginTop: responsiveHeight(4),
    },
    answerText: {
        fontFamily: AppFonts.light
    },
    pillIcon: {
        width: responsiveWidth(5),
        height: responsiveHeight(1.5),
        marginRight: responsiveWidth(2.5)
    },
    infoText: {
        fontFamily: AppFonts.semiBold,
        color: AppColors.mediumGrey,
        alignSelf: "center",
        textDecorationLine: "underline",
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(4)
    },
    readMoreButton: {
        backgroundColor: 'rgba(33, 131, 129, 0.3)',
        paddingHorizontal: responsiveWidth(1),
        borderRadius: 5,
        paddingVertical: responsiveHeight(0.5)
    },
    readMoreText: {
        fontFamily: AppFonts.light,
        fontSize: responsiveFontSize(1.2)
    },
    listView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: responsiveWidth(8),
        alignItems: 'center',
        marginVertical: responsiveHeight(1)
    }

})