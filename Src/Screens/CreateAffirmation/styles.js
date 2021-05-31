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
  infoText: {
    fontFamily: AppFonts.light,
    color: AppColors.mediumGrey,
    marginLeft: responsiveWidth(6),
  },
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
    marginTop: 20,
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
    borderBottomColor: AppColors.mediumGrey,
    marginHorizontal: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(1),
    marginTop: responsiveHeight(2.5),
    alignItems: "center",
    paddingBottom: responsiveHeight(0.5),
  },
  addMusicText: {
    color: AppColors.mediumGrey,
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
    marginBottom: responsiveHeight(2),
    marginHorizontal: responsiveWidth(3),
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
    marginTop: 30,
    marginBottom: 10,
  },
});
