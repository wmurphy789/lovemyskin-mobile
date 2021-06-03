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
    backgroundColor: "#fff",
  },
  // infoText: {
  //   fontFamily: AppFonts.light,
  //   color: AppColors.mediumGrey,
  //   marginLeft: responsiveWidth(20),
  //   backgroundColor: "#f11",
  // },
  input: {
    width: responsiveWidth(90),
    alignSelf: "center",
    // height: responsiveHeight(30),
    height: 200,
    borderWidth: 2,
    borderColor: AppColors.lightGrey,
    borderRadius: 10,
    textAlignVertical: "top",
    paddingVertical: Platform.OS == "android" ? 20 : 40,
    paddingHorizontal: Platform.OS == "android" ? 20 : 20,
    fontFamily: AppFonts.light,
    // marginTop: responsiveHeight(4),
    // marginTop: 20,
  },
  playPauseButton: {
    height: 30,
    width: 30,
  },
  musicDetailsView: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  addMusicView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    marginHorizontal: responsiveWidth(5),
    // paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(3),
    alignItems: "center",
    paddingBottom: responsiveHeight(0),
  },
  addMusicText: {
    color: "#000",
    flex: 1,
    paddingHorizontal: responsiveWidth(2),
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1.8),
  },
  searchIcon: {
    // height: responsiveWidth(5),
    // width: responsiveWidth(5),
    height: 15,
    width: 15,
  },
  musicflatlist: {
    paddingTop: responsiveHeight(3),
  },
  musicView: {
    flexDirection: "row",
    // justifyContent: 'space-around',
    alignItems: "center",
    marginBottom: responsiveHeight(4),
    marginHorizontal: responsiveWidth(5),
  },
  musicAlbumPoster: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: responsiveWidth(2),
  },
  musicAlbumTitle: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: AppFonts.light,
  },
  musicAlbumSong: {
    // marginTop: responsiveHeight(0.2),
    marginTop: 7,
    fontSize: responsiveFontSize(1.1),
    fontFamily: AppFonts.light,
  },
  useThisAudioButton: {
    borderColor: AppColors.main,
    borderWidth: 1,
    paddingVertical: responsiveHeight(0.3),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(1.5),
  },
  useThisAudio: {
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(1),
    textAlignVertical: "center",
    textAlign: "center",
  },
  button: {
    marginVertical: responsiveHeight(5),
  },
  infoText: {
    fontFamily: AppFonts.light,
    color: AppColors.mediumGrey,
    marginLeft: responsiveWidth(6),
    marginTop: 0,
    marginBottom: 20,
  },
  curveHeaderImage: {
    flex: 1,
    paddingTop: responsiveHeight(10),
    // paddingHorizontal: responsiveWidth(5),
    // paddingTop: 70,
    paddingHorizontal: 15,
  },
  curveHeaderContainer: {
    // height: responsiveHeight(17),
    height: 185,
    width: responsiveWidth(110),
    backgroundColor: "#fff",
    marginBottom: -20,
  },
  curveHeaderButtonsView: {
    flexDirection: "row",
    // width: responsiveWidth(92),
    justifyContent: "space-between",
  },
  curveheaderButton: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  curveHeaderIcon: {
    // height: responsiveWidth(5.5),
    // width: responsiveWidth(5.5)
    height: 20,
    width: 20,
  },
  title: {
    color: AppColors.TitleGreen,
    // fontSize: responsiveFontSize(2.5),
    fontSize: 18,
    fontFamily: AppFonts.semiBold,
    // marginTop: responsiveHeight(2),

    marginLeft: responsiveWidth(2),
  },
});
