import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
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
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
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
        marginBottom: responsiveHeight(1),
        color: AppColors.white,
        fontFamily: AppFonts.regular,
        marginLeft: responsiveWidth(2.5),
        fontSize: responsiveFontSize(3),

    },
    addMyAffirmation: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: "center"
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
    tilesflatlist: {
        alignItems: "center",
    },
    myAffirmationsTileView: {
        backgroundColor: "#218381",
        height: responsiveHeight(17),
        width: responsiveWidth(87),
        borderRadius: 10,
        marginBottom: responsiveWidth(5),
        flexDirection: "row"
    },
    myAffirmationsTileImage: {
        height: responsiveWidth(20),
        width: responsiveWidth(20),
        alignSelf: "center",
    },
    myAffirmationsTileViewTop: {
        justifyContent: 'center',
        paddingLeft: responsiveWidth(9),
        flex: 1
    },
    myAffirmationsTileViewBottom: {
        justifyContent: 'flex-end',
    },
    myAffirmationsTileCount: {
        fontFamily: AppFonts.light,
        color: AppColors.white,
        marginBottom: responsiveWidth(1),
        marginRight: responsiveWidth(2)
    },
    myAffirmationsTileText: {
        textAlign: "center",
        fontFamily: AppFonts.regular,
        color: AppColors.white,
        fontSize: responsiveFontSize(2.3)
    },
    tileView: {
        height: responsiveHeight(25),
        width: responsiveWidth(40),
        marginHorizontal: responsiveWidth(3.5),
        marginBottom: responsiveWidth(7),
        borderRadius: 10,
        justifyContent: "space-between"
    },
    tileInner: {
        flex: 1,
        justifyContent: 'space-between',
    },
    tileText: {
        fontSize: responsiveFontSize(1.7),
        // marginTop: responsiveHeight(2),
        fontFamily: AppFonts.regular,
        paddingHorizontal: responsiveWidth(3),
        textAlign: "center",
    },
    tileImage: {
        height: responsiveWidth(20),
        width: responsiveWidth(20),
        marginTop: responsiveHeight(6),
        alignSelf: "center",

    },
    tileCount: {
        fontFamily: AppFonts.regular,
        textAlign: "right",
        fontSize: responsiveFontSize(1.6),
        margin: responsiveWidth(1.5),
        marginRight: responsiveWidth(2)
    },
    chooseACategory: {
        fontSize: responsiveFontSize(3),
        fontFamily: AppFonts.regular,
        marginLeft: responsiveWidth(7),
        marginBottom: responsiveHeight(1),
        marginTop: responsiveHeight(3)
    }
})