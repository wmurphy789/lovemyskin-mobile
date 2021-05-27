import { StyleSheet } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../../Theme/ResponsiveDimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    infoText: {
        fontFamily: AppFonts.light,
        color: AppColors.mediumGrey,
        marginLeft: responsiveWidth(6),
        marginTop: -responsiveHeight(0.5)
    },
    input: {
        width: responsiveWidth(90),
        alignSelf: "center",
        height: responsiveHeight(30),
        borderWidth: 2,
        borderColor: AppColors.lightGrey,
        borderRadius: 10,
        textAlignVertical: 'top',
        padding: responsiveWidth(4),
        fontFamily: AppFonts.light,
        marginTop: responsiveHeight(4)
    },
    addMusicView: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: AppColors.mediumGrey,
        marginHorizontal: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(1),
        marginTop: responsiveHeight(2.5),
        alignItems: 'center',
        paddingBottom: responsiveHeight(0.5)
    },
    addMusicText: {
        color: AppColors.mediumGrey,
        fontFamily: AppFonts.light,
        fontSize: responsiveFontSize(1.8)
    },
    searchIcon: {
        height: responsiveWidth(5),
        width: responsiveWidth(5)
    },
    musicflatlist: {
        paddingTop: responsiveHeight(3)
    },
    musicView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(3)
    },
    musicAlbumPoster: {
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        borderRadius: 10,
        marginRight: responsiveWidth(2)
    },
    musicAlbumTitle: {
        fontSize: responsiveFontSize(1.6),
        fontFamily: AppFonts.regular
    },
    musicAlbumSong: {
        marginTop: responsiveHeight(0.2),
        fontSize: responsiveFontSize(1.4),
        fontFamily: AppFonts.light
    },
    useThisAudioButton: {

        borderColor: AppColors.main,
        borderWidth: 2,
        paddingVertical: responsiveHeight(0.1),
        paddingHorizontal: responsiveWidth(1),
        borderRadius: 30
    },
    useThisAudio: {
        fontFamily: AppFonts.regular,
        fontSize: responsiveFontSize(1.2),
        textAlignVertical: "center",
        textAlign: "center",
    },
    button: {
        marginBottom: responsiveHeight(2)
    }
})