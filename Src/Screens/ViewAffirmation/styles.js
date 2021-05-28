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
        height: responsiveHeight(28),
        backgroundColor: AppColors.main,
        justifyContent: "flex-end",
        paddingHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(3)
    },
    curveHeaderImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(22),
        position: "absolute",
        top: 0,
        right: 0
    },
    addMyAffirmation: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        flexDirection: "row",
        alignItems: 'center',
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
        height: responsiveWidth(5.5),
        width: responsiveWidth(5.5),
        marginBottom: responsiveHeight(4)
    },
    ItemView: {
        height: responsiveHeight(60),
        width: responsiveWidth(100),
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(2),
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontFamily: AppFonts.semiBold,
        fontSize: responsiveFontSize(2)
    },
    itemtext: {
        backgroundColor: AppColors.white,
        fontFamily: AppFonts.regular,
        paddingHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(5),
        paddingVertical: responsiveHeight(2),
        borderRadius: 10,
        lineHeight: 20,
    },
    itemImage: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
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

