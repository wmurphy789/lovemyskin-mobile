import { StyleSheet } from "react-native";
import { AppColors } from '../../Theme/AppColors'
import { AppFonts } from '../../Theme/AppFonts'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    curveHeaderImage: {
        flex: 1,
        // paddingTop: responsiveHeight(5),
        // paddingHorizontal: responsiveWidth(5),
        paddingTop: 70,
        paddingHorizontal: 15
    },
    curveHeaderContainer: {
        // height: responsiveHeight(17),
        height: 185,
        width: responsiveWidth(110),
        backgroundColor: "#fff",
        marginBottom: -20
    },
    curveHeaderButtonsView: {
        flexDirection: "row",
        width: responsiveWidth(92),
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
        // height: responsiveWidth(5.5),
        // width: responsiveWidth(5.5)
        height: 20,
        width: 20
    },
    title: {
        color: AppColors.TitleGreen,
        // fontSize: responsiveFontSize(2.5),
        fontSize: 18,
        fontFamily: AppFonts.semiBold,
        // marginTop: responsiveHeight(2),
        marginTop: 10,
        marginLeft: responsiveWidth(2)
    }
})