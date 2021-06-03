import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Platform,
} from "react-native";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

export const CurvedHeader = ({
  title,
  leftIcon,
  leftPress,
  rightIcon,
  rightPress,
  infoText,
}) => {
  const HeaderButton = ({ image, onPress, underlayColor }) => (
    <TouchableHighlight
      style={styles.curveheaderButton}
      underlayColor={underlayColor}
      activeOpacity={1}
      onPress={onPress}
    >
      <Image source={image} style={styles.curveHeaderIcon} />
    </TouchableHighlight>
  );
  return (
    // <SafeAreaView style={{ backgroundColor: AppColors.main }}>
    <View style={styles.curveHeaderContainer}>
      <ImageBackground
        resizeMode="stretch"
        source={AppImages.curveBigHeaderImage}
        style={styles.curveHeaderImage}
      >
        <View style={styles.curveHeaderButtonsView}>
          <HeaderButton // right button
            image={leftIcon}
            underlayColor="rgba(33, 131, 129, 0.5)"
            onPress={leftPress}
          />

          <HeaderButton // left button for future improvements
            image={rightIcon}
            underlayColor="rgba(255,255,255, 0.5)"
            onPress={rightPress}
          />
        </View>
        <Text
          style={[
            styles.title,
            { marginTop: title == AppConstants.termsAndConditions ? 16 : 12 },
          ]}
        >
          {title}
        </Text>
        <Text style={styles.infoText}>{infoText}</Text>
      </ImageBackground>
    </View>
    // </SafeAreaView >
  );
};
