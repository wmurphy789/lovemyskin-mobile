import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../../Theme/ResponsiveDimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    headerContainer: {
        width: responsiveWidth(100),
        // height: responsiveHeight(28),
        height: 190,
        backgroundColor: AppColors.main,
        justifyContent: "flex-end",
        paddingHorizontal: responsiveWidth(5),
        // paddingBottom: responsiveHeight(3)
    },
    curveHeaderImage: {
        width: responsiveWidth(100),
        // height: responsiveHeight(22),
        height: 140,
        position: "absolute",
        top: 0,
        right: 0
    },
    curveHeaderIconButton: {
        height: 30,
        width: 30, alignItems: 'center',
        justifyContent: 'center',
        borderRadius:200
    },
    addMyAffirmation: {
        width: responsiveWidth(90),
        // height: responsiveHeight(7),
        marginBottom: 30,
        marginTop: 10,
        height: 50,
        flexDirection: "row",
        alignItems: 'center',
        overflow: "hidden",
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: "center",
    },
    addAffirmationIcon: {
        height: responsiveWidth(7),
        width: responsiveWidth(5),
        marginRight: responsiveWidth(2)
    },
    addAffirmationText: {
        fontFamily: AppFonts.regular,
        color: AppColors.white,
        fontSize: responsiveFontSize(1.8)
    },
    curveHeaderIcon: {
        // height: responsiveWidth(5.5),
        // width: responsiveWidth(5.5),
        height: 20,
        width: 20,
        // marginBottom: responsiveHeight(4)
    },
    ItemView: {
        // height: responsiveHeight(60),
        minHeight: 400,
        width: responsiveWidth(100),
        // paddingHorizontal: responsiveWidth(5),
        // paddingVertical: responsiveHeight(2),
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontFamily: AppFonts.semiBold,
        fontSize: responsiveFontSize(2.5)
    },
    itemtext: {
        backgroundColor: AppColors.white,
        marginVertical: 20,
        fontFamily: AppFonts.semiBold,
        paddingHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(5),
        paddingVertical: responsiveHeight(2),
        borderRadius: 10,
        fontSize: responsiveFontSize(1.9),
        overflow: "hidden",
        lineHeight: 20,
    },
    itemImage: {
        // height: responsiveWidth(10),
        // width: responsiveWidth(10),
        height: 45,
        width: 45,
        alignSelf: "flex-end"
    },
    customStylesDeleteButton: {
        marginTop: responsiveHeight(1)
    },
    playerTimerView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(6)
    },
    playerButtons: {
        alignSelf: "center"
    },
    playerTime: {
        marginTop: responsiveHeight(0.5),
        color: AppColors.white,
        fontFamily: AppFonts.light,
        fontSize: responsiveFontSize(1.2)
    }
})

