import { StyleSheet } from "react-native";
import { AppColors } from '../../Theme/AppColors'
import { AppFonts } from '../../Theme/AppFonts'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    curveHeaderImage: {
        flex: 1,
        paddingTop: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(5)
    },
    curveHeaderContainer: {
        height: responsiveHeight(17),
        width: responsiveWidth(100),
        backgroundColor: "#fff"
    },
    curveHeaderButtonsView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    curveheaderButton: {
        height: responsiveWidth(9),
        width: responsiveWidth(9),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    curveHeaderIcon: {
        height: responsiveWidth(5.5),
        width: responsiveWidth(5.5)
    },
    title: {
        color: AppColors.TitleGreen,
        fontSize: responsiveFontSize(2.5),
        fontFamily: AppFonts.semiBold,
        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(1)
    }
})