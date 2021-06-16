"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _AppColors = require("../../Theme/AppColors");

var _AppFonts = require("../../Theme/AppFonts");

var _ResponsiveDimensions = require("../../Theme/ResponsiveDimensions");

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var _default = _reactNative.StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: (0, _ResponsiveDimensions.responsiveWidth)(5),
    zIndex: 9999
  },
  // mainGreenTab: {
  //   height: responsiveWidth(19),
  //   width: responsiveWidth(19),
  //   bottom: 28,
  //   bottom: responsiveHeight(4.05),
  //   left: 1,
  //   borderRadius: responsiveWidth(100),
  //   backgroundColor: "#00CDA9",
  //   alignSelf: "center",
  //   // elevation: 8,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   zIndex: 99999,
  // },
  mainGreenTab: {
    height: (0, _ResponsiveDimensions.responsiveWidth)(19),
    width: (0, _ResponsiveDimensions.responsiveWidth)(19),
    bottom: _reactNative.Platform.OS == "android" ? (0, _ResponsiveDimensions.responsiveHeight)(3.92) : (0, _ResponsiveDimensions.responsiveHeight)(3.52),
    left: (0, _ResponsiveDimensions.responsiveWidth)(0.1),
    borderRadius: (0, _ResponsiveDimensions.responsiveWidth)(100),
    backgroundColor: "#00CDA9",
    alignSelf: "center",
    // elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999
  },
  tabIcon: {
    height: 20,
    width: 20
  },
  centerTab: {
    height: 50,
    width: 50
  },
  myTrackerImage: {
    height: 17,
    width: 35
  },
  normalTabs: {
    width: (0, _ResponsiveDimensions.responsiveWidth)(19),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500
  },
  tabsTitle: {
    fontFamily: _AppFonts.AppFonts.light,
    fontSize: (0, _ResponsiveDimensions.responsiveFontSize)(1.2),
    marginTop: 3,
    color: _AppColors.AppColors.black
  },
  backgroundImage: {
    height: 100,
    // height: 63,
    width: (0, _ResponsiveDimensions.responsiveWidth)(100),
    // backgroundColor: "transparent",
    // backgroundColor: "#0000",
    // alignItems: "center",
    justifyContent: "center",
    borderRadius: (0, _ResponsiveDimensions.responsiveWidth)(5),
    position: "absolute",
    bottom: _reactNative.Platform.OS == "android" ? -20 : height > 900 ? 0 : -20 // left: 0,
    // bottom: responsiveHeight(0),

  },
  backgroundImage_1: {
    // position: "absolute",
    shadowOffset: {
      width: -1,
      height: -1
    },
    shadowColor: "#ccc",
    shadowOpacity: 1,
    // elevation: 3,
    // background color must be set
    backgroundColor: "#0000"
  }
});

exports["default"] = _default;