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
        // height: responsiveHeight(35),
        height: 250,
        width: responsiveWidth(100),
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 25
    },
    lowerContainer: {
        backgroundColor: AppColors.main
    },
    lowerInnerContainer: {
        backgroundColor: AppColors.white,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45
    },
    circle: {
        backgroundColor: 'rgba(255,255,255, 0.1)',
        borderRadius: 500,
        height: responsiveWidth(65),
        width: responsiveWidth(65),
        position: "absolute",
        right: -responsiveWidth(30)
    },
    affirmationText: {
        // marginTop: responsiveHeight(20),
        marginBottom: 10,
        color: AppColors.white,
        fontFamily: AppFonts.regular,
        fontSize: responsiveFontSize(3),

    },
    addMyAffirmation: {
        width: '100%',
        // height: responsiveHeight(7),
        height: 50,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: "hidden",
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
        marginBottom: 45
    },
    myAffirmationsTileView: {
        backgroundColor: "#218381",
        height: responsiveHeight(17),
        height: 130,
        width: responsiveWidth(87),
        borderRadius: 10,
        // marginBottom: responsiveWidth(5),
        marginBottom: 25,
        flexDirection: "row"
    },
    myAffirmationsTileImage: {
        // height: responsiveWidth(20),
        // width: responsiveWidth(20),
        height: 80,
        width: 80,
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
        // marginBottom: responsiveWidth(1),
        // marginRight: responsiveWidth(2),
        marginBottom: 10,
        marginRight: 11
    },
    myAffirmationsTileText: {
        textAlign: "center",
        fontFamily: AppFonts.regular,
        color: AppColors.white,
        fontSize: responsiveFontSize(2.25)
    },
    tileView: {
        // height: responsiveHeight(25),
        height: 190,
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
        // height: responsiveWidth(20),
        // width: responsiveWidth(20),
        height: 80,
        width: 80,
        // marginTop: responsiveHeight(6),
        marginTop: 45,
        alignSelf: "center",

    },
    tileCount: {
        fontFamily: AppFonts.regular,
        textAlign: "right",
        fontSize: responsiveFontSize(1.4),
        // margin: responsiveWidth(1.5),
        // marginRight: responsiveWidth(2),
        marginRight: 10,
        marginBottom: 10
    },
    chooseACategory: {
        fontSize: responsiveFontSize(2.7),
        // fontSize:20,
        color: "#3f3f3f",
        fontFamily: AppFonts.regular,
        marginLeft: responsiveWidth(7),
        // marginBottom: responsiveHeight(1),
        // marginTop: responsiveHeight(3),
        marginBottom: 10,
        marginTop: 20,

    }
})