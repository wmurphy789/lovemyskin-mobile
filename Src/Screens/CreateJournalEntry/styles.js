import { StyleSheet } from "react-native";
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
    color: AppColors.darkGrey,
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(2.5),
  },
  input: {
    width: responsiveWidth(90),
    alignSelf: "center",
    // alignItems: "center",
    height: responsiveHeight(25),
    borderWidth: 2,
    borderColor: AppColors.lightGrey,
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "top",
    padding: responsiveWidth(4),
    fontFamily: AppFonts.light,
    marginTop: responsiveHeight(4),
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
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  musicflatlist: {
    paddingTop: responsiveHeight(3),
  },
  musicView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsiveHeight(2),
    marginHorizontal: responsiveWidth(3),
  },
  musicAlbumPoster: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    borderRadius: 10,
    marginRight: responsiveWidth(2),
  },
  musicAlbumTitle: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: AppFonts.regular,
  },
  musicAlbumSong: {
    marginTop: responsiveHeight(0.2),
    fontSize: responsiveFontSize(1.4),
    fontFamily: AppFonts.light,
  },
  useThisAudioButton: {
    borderColor: AppColors.main,
    borderWidth: 2,
    paddingVertical: responsiveHeight(0.1),
    paddingHorizontal: responsiveWidth(1),
    borderRadius: 30,
  },
  useThisAudio: {
    fontFamily: AppFonts.regular,
    fontSize: responsiveFontSize(1.2),
    textAlignVertical: "center",
    textAlign: "center",
  },
  button: {
    marginBottom: responsiveHeight(5),
    marginTop: responsiveHeight(5),
  },
  dropDown: {
    backgroundColor: "#F0F9F7",
    width: responsiveWidth(90),
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    height: responsiveHeight(7),
    borderRadius: 10,
    textAlignVertical: "top",
    paddingLeft: responsiveWidth(8),
    paddingRight: responsiveWidth(4),
    marginTop: responsiveHeight(4),
    flexDirection: "row",
  },
  dropDownText: {
    color: AppColors.mediumGrey,
    fontFamily: AppFonts.light,
    fontSize: responsiveFontSize(2),
  },
  dropDownImage: { height: responsiveWidth(8), width: responsiveWidth(8) },
  mikeImage: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    position: "absolute",
    right: responsiveWidth(7),
    bottom: responsiveHeight(1),
  },
  uploadImageContainer: {
    height: responsiveHeight(25),
    width: responsiveWidth(90),
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: responsiveHeight(4),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(33, 131, 129, 0.1)",
  },
  cameraButton: {
    alignItems: "center",
  },
  cameraText: {
    marginTop: responsiveHeight(1),
    fontFamily: AppFonts.light,
    color: AppColors.main,
  },
  cameraIcon: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
  },
});
