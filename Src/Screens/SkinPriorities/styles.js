import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "../../Theme/ResponsiveDimensions";

export default StyleSheet.create({
    backButton: {
        height: responsiveWidth(9),
        width: responsiveWidth(9),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(4)
    },
    backImage: {
        height: responsiveWidth(5.5),
        width: responsiveWidth(5.5)
    },
    titleText: {
        marginLeft: responsiveWidth(5),
        fontFamily: AppFonts.semiBold,
        fontSize: responsiveFontSize(3),
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(3),
        width: responsiveWidth(90),
        color: AppColors.darkGrey,
        // backgroundColor:"#f11"
    },
    listItem: {
        borderWidth: 1,
        width: responsiveWidth(90),
        borderRadius: 10,
        paddingHorizontal: responsiveWidth(2),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        paddingVertical: responsiveHeight(2),
        marginBottom: responsiveHeight(3)
    },
    listText: {
        textAlign: "center",
        
    },
    dontAnswerButton: {
        alignSelf: "center",
        marginRight: responsiveWidth(4),
        marginTop: responsiveHeight(2),
        marginBottom:responsiveHeight(6)
    },
    dontAnswerText: {
        fontFamily: AppFonts.regular,
        color: AppColors.black,
        textDecorationLine: "underline",
    }


})