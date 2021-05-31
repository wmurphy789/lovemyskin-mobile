import { Platform, StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    // backgroundColor: "#f11"
  },
  curveHeaderImage: {
    flex: 1,
    // paddingTop: responsiveHeight(5.5),
    // paddingHorizontal: responsiveWidth(5),
    paddingTop: 90,
    paddingLeft: responsiveWidth(5),
  },
  curveHeaderContainer: {
    // height: responsiveHeight(17),
    height: 150,
    width: responsiveWidth(100),
  },
  title: {
    color: AppColors.TitleGreen,
    fontSize: responsiveFontSize(2.5),
    fontFamily: AppFonts.semiBold,
    // marginTop: responsiveHeight(4),
    // marginLeft: responsiveWidth(1)
  },
  infoText: {
    fontFamily: AppFonts.light,
    color: AppColors.mediumGrey,
    // marginLeft: responsiveWidth(1),
    // marginTop: responsiveHeight(0.8)
  },
  itemView: {
    backgroundColor: "#00CDA9",
    alignItems: "center",
    borderRadius: 15,
    marginRight: responsiveWidth(5),
  },
  itemImage: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // width: responsiveWidth(40),
    // height: responsiveHeight(20),
    height: 130,
    width: 120,
  },
  itemText: {
    color: AppColors.white,
    fontFamily: AppFonts.regular,
    marginVertical: responsiveHeight(1),
  },
  pillarsFlatlistStyle: {
    // marginTop: responsiveHeight(1.5),
    // marginBottom: 30,
    paddingLeft: responsiveWidth(5),
    flex: 1,
  },
  PillarItemView: {
    flexDirection: "row",
    backgroundColor: "rgba(103, 198, 175, 0.1)",
    marginHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(2),
    borderRadius: 10,
    padding: responsiveWidth(3),
  },
  pillarImage: {
    height: responsiveHeight(12),
    borderRadius: 10,
    width: responsiveWidth(20),
  },
  pillarInfoView: {
    justifyContent: "space-between",
    margin: responsiveWidth(2),
    flex: 1,
  },
  pillerHeading: {
    fontFamily: AppFonts.semiBold,
    color: AppColors.main,
  },
  pillarStatusInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ebebeb",
    paddingHorizontal: responsiveWidth(1.5),
    paddingVertical: responsiveHeight(0.3),
    borderRadius: 50,
  },
  PillarlikeCommentView: {
    flexDirection: "row",
    alignItems: "center",
  },
  PillarlikeCommentImage: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  pillarLikesCount: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: AppFonts.light,
    marginHorizontal: responsiveWidth(1),
  },
  pillarLikes: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: AppFonts.semiBold,
    color: "#3f3f3f",
  },
  pillarComments: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: AppFonts.semiBold,
    marginHorizontal: responsiveWidth(1),
    color: "#3f3f3f",
  },
  pillarCommentsCount: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: AppFonts.light,
  },
  tabsContainer: {
    // width: responsiveWidth(100),
    // height: Platform.OS == 'ios' ? responsiveHeight(60) : responsiveHeight(63),
    // height:100,
    flex: 1,
  },
  selected: {
    color: AppColors.main,
    fontFamily: AppFonts.regular,
    width: responsiveWidth(15),
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
  notSelected: {
    color: AppColors.black,
    fontFamily: AppFonts.light,
    width: responsiveWidth(15),
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
  indicator: {
    height: responsiveHeight(0.3),
    backgroundColor: "#00CDA9",
    width: responsiveWidth(8),
    marginLeft: responsiveWidth(9),
    marginBottom: responsiveHeight(1.4),
  },
  tabsContentFlatlist: {
    paddingTop: 15,
    backgroundColor: AppColors.white,
    paddingBottom: responsiveHeight(15),
  },
});
