import { StyleSheet } from "react-native";
import { AppColors } from '../../Theme/AppColors'
import { AppFonts } from '../../Theme/AppFonts'
import { AppImages } from '../../Theme/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    container: {
        flex: 1
    },
    profileContainer: {
        height: responsiveHeight(35),
        width: responsiveWidth(100),
        backgroundColor: AppColors.main,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuContainer: {
        marginTop: 20
    },
    profileImage: {
        height: responsiveWidth(40),
        width: responsiveWidth(40),
        borderRadius: 20,
        marginTop: responsiveHeight(3)
    },
    profileName: {
        color: AppColors.white,
        fontFamily: AppFonts.semiBold,
        fontSize: responsiveFontSize(2.2),
        marginTop: responsiveHeight(1)
    },
    profileId: {
        color: AppColors.white,
        fontFamily: AppFonts.regular,
    },
    menuItem: {
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        alignItems: 'center',
        paddingVertical: responsiveHeight(1.5)
    },
    menuItemIcon: {
        height: responsiveWidth(12),
        width: responsiveWidth(12),
        marginLeft: responsiveWidth(7),
        marginRight: responsiveWidth(5)
    },
    menuItemTitle: {
        fontFamily: AppFonts.regular
    }
})