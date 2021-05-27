import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../../Theme/ResponsiveDimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    upperContainer: {
        backgroundColor: AppColors.main,
        height: responsiveHeight(35),
        width: responsiveWidth(100)
    },
    lowerContainer: {
        backgroundColor: AppColors.main
    },
    lowerInnerContainer: {
        backgroundColor: AppColors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    circle: {
        backgroundColor: 'rgba(255,255,255, 0.05)',
        borderRadius: 500,
        height: responsiveWidth(65),
        width: responsiveWidth(65),
        position: "absolute",
        right: -responsiveWidth(40)
    },
    affirmationText: {
        marginTop: responsiveHeight(20),
        marginBottom: responsiveHeight(2),
        color: AppColors.white,
        fontFamily: AppFonts.regular,
        marginLeft: responsiveWidth(2.5),
        fontSize: responsiveFontSize(3),

    },
    addMyAffirmation: {
        width: responsiveWidth(95),
        height: responsiveHeight(6.5),
        alignSelf: "center"
    },
    tilesflatlist: {
        alignItems: "center",
    },
    tileView: {
        height: responsiveHeight(25),
        width: responsiveWidth(40),
        marginHorizontal: responsiveWidth(5),
        marginVertical: responsiveWidth(5),
        borderRadius: 20,
        justifyContent: "space-between"
    },
    tileInner: {
        flex: 1, justifyContent: 'center', paddingTop: responsiveHeight(1)
    },
    tileText: {
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(2),
        fontFamily: AppFonts.regular,
        paddingHorizontal:responsiveWidth(1),
        textAlign: "center",
    },
    tileImage: {
        height: responsiveWidth(25),
        width: responsiveWidth(25),
        alignSelf: "center",

    },
    tileCount: {
        fontFamily: AppFonts.regular,
        textAlign: "right",
        fontSize: responsiveFontSize(1.6),
        margin: responsiveWidth(1.5)
    }
})