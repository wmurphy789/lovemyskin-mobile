import { StyleSheet } from "react-native";
import { AppColors } from '../../Theme/AppColors'
import { AppFonts } from '../../Theme/AppFonts'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    curveHeaderImage: {
        flex: 1,
        paddingTop: responsiveHeight(5.5),
        paddingHorizontal: responsiveWidth(5)
    },
    curveHeaderContainer: {
        height: responsiveHeight(17),
        width: responsiveWidth(100),
        backgroundColor: "#fff"
    },
    title: {
        color: AppColors.TitleGreen,
        fontSize: responsiveFontSize(2.5),
        fontFamily: AppFonts.semiBold,
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(1)
    },
    infoText: {
        fontFamily: AppFonts.light,
        color: AppColors.mediumGrey,
        marginLeft: responsiveWidth(1),
        marginTop: responsiveHeight(0.8)
    },
    itemView: {
        backgroundColor: '#00CDA9',
        alignItems: "center",
        borderRadius: 15,
        marginRight: responsiveWidth(4)
    },
    itemImage: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: responsiveWidth(40),
        height: responsiveHeight(20)
    },
    itemText: {
        color: AppColors.white,
        fontFamily: AppFonts.regular,
        marginVertical: responsiveHeight(1)
    },
    pillarsFlatlistStyle: {
        marginTop: responsiveHeight(1.5),
        paddingLeft: responsiveWidth(5)
    },
    PillarItemView: {
        flexDirection: "row",
        backgroundColor: 'rgba(103, 198, 175, 0.1)',
        marginHorizontal: responsiveWidth(5),
        marginBottom: responsiveHeight(2),
        borderRadius: 10,
        padding: responsiveWidth(3)
    },
    pillarImage: {
        height: responsiveHeight(12),
        borderRadius: 10,
        width: responsiveWidth(20)
    },
    pillarInfoView: {
        justifyContent: "space-between", margin: responsiveWidth(2), flex: 1
    },
    pillerHeading: {
        fontFamily: AppFonts.semiBold,
        color: AppColors.main
    },
    pillarStatusInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: AppColors.lightGrey,
        paddingHorizontal: responsiveWidth(1.5),
        paddingVertical: responsiveHeight(0.3),
        borderRadius: 50
    },
    PillarlikeCommentView: {
        flexDirection: "row",
        alignItems: 'center',
    },
    PillarlikeCommentImage: {
        height: responsiveWidth(5),
        width: responsiveWidth(5)
    },
    pillarLikesCount: {
        fontSize: responsiveFontSize(1.4),
        fontFamily: AppFonts.light,
        marginHorizontal: responsiveWidth(1)
    },
    pillarLikes: {
        fontSize: responsiveFontSize(1.4),
        fontFamily: AppFonts.semiBold,
    },
    pillarComments: {
        fontSize: responsiveFontSize(1.4),
        fontFamily: AppFonts.semiBold,
        marginHorizontal: responsiveWidth(1)
    },
    pillarCommentsCount: {
        fontSize: responsiveFontSize(1.4),
        fontFamily: AppFonts.light,

    }

})