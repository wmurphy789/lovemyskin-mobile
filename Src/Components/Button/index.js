import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { AppImages } from "../../Theme/AppImages";
import React from "react";
import styles from "./styles";
export const FullButton = ({
  title,
  onPress,
  textStyles,
  customStyles,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      style={[styles.buttonContainer, customStyles]}
      onPress={onPress}
    >
      <ImageBackground
        source={AppImages.gradientButtonImage}
        style={styles.buttonImage}
        resizeMode="stretch"
      >
        <Text style={[styles.buttonTitle, textStyles]}>
          {title.toUpperCase()}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
