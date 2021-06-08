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
  lineHiderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 100,
    top: 35,
    right: 0,
    width: "100%",
  },
  lineHiders: {
    backgroundColor: AppColors.white,
    height: responsiveHeight(2.8),
    width: responsiveWidth(5),
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
    borderRadius: 10,
    marginRight: responsiveWidth(2.5),
  },
  itemImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    paddingRight: responsiveWidth(2.5),
    marginBottom: 10,
    marginTop: 5,
    // flex: 2,
  },
  pillarItemCommentsContainer: {
    display: "flex",
  },
  commentProfile: {
    height: 40,
    width: 40,
    borderRadius: 500,
  },
  commentProfileUserName: {
    fontFamily: AppFonts.semiBold,
    marginLeft: 10,
    color: "#565656",
    fontSize: responsiveFontSize(1.6),
  },
  commentStyle: {
    marginTop: -3,
    fontSize: responsiveFontSize(1.4),
    fontFamily: AppFonts.light,
    width: responsiveWidth(75),
    padding: 10,
    borderRadius: 20,
    backgroundColor: "rgba(0, 205, 169, 0.17)",
    color: "#565656",
    alignSelf: "flex-end",
  },
  pillarStatusInfoCustom: {
    width: responsiveWidth(55),
    alignSelf: "flex-end",
    marginTop: 10,
  },
  commentFieldView: {
    flexDirection: "row",
    width: responsiveWidth(60),
    alignSelf: "flex-end",
    borderWidth: 2,
    borderColor: AppColors.main,
    borderRadius: 50,
  },
  sendButtonIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
    // backgroundColor: "#f11",
  },
  commentInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.2),
  },
  pillerMainContainer: {
    backgroundColor: "rgba(103, 198, 175, 0.5)",
    marginHorizontal: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical:responsiveHeight(1.7),
    borderRadius: 10,
    marginBottom: responsiveHeight(2)
  },
  PillarItemView: {
    // will change borderradius later
    flexDirection: "row",
    // backgroundColor: "rgba(103, 198, 175, 0.5)",
    // marginHorizontal: responsiveWidth(5),
    // paddingHorizontal: responsiveWidth(3),
    // marginBottom: responsiveHeight(2),
    borderRadius: 10,
    // paddingTop: responsiveHeight(1.7),
  },
  pillarImage: {
    height: responsiveHeight(13.5),
    borderRadius: 10,
    width: responsiveWidth(23),
  },
  pillarInfoView: {
    justifyContent: "space-between",
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1),
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
    flex: 1,
  },
  selected: {
    color: AppColors.main,
    fontFamily: AppFonts.semiBold,
    width: responsiveWidth(18),
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
  notSelected: {
    color: AppColors.black,
    fontFamily: AppFonts.light,
    width: responsiveWidth(18),
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
  indicator: {
    height: responsiveHeight(0.3),
    backgroundColor: "#00CDA9",
    width: responsiveWidth(8),
    marginLeft: responsiveWidth(9),
    marginBottom: responsiveHeight(1.4),
    borderRadius: 40,
  },
  tabsContentFlatlist: {
    paddingTop: 25,
    paddingBottom:110,
    backgroundColor: AppColors.white,
  },
});
