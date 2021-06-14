import React, { useRef, useEffect } from "react";
import { Image, Platform, TextInput, View } from "react-native";
import { AppColors } from "../../Theme/AppColors";
import { AppFonts } from "../../Theme/AppFonts";
import styles from "./styles";

// InputField with Icon
export const IconInput = ({
  image,
  placeholder,
  text,
  onChangeText,
  customStyles,
  secureInput,
  type,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.setNativeProps({ style: { fontFamily: AppFonts.light } });
  }, []);
  return (
    <View style={[styles.iconInputContainer, customStyles]}>
      <Image source={image} resizeMode="contain" style={styles.iconInputIcon} />
      <TextInput
        placeholder={placeholder}
        value={text}
        keyboardType={type ? "email-address" : "default"}
        ref={inputRef}
        selectionColor={AppColors.black}
        secureTextEntry={secureInput}
        onChangeText={(text) =>
          secureInput
            ? onChangeText(text?.trim())
            : onChangeText(text?.trimLeft())
        }
        placeholderTextColor={"#ccc"}
        style={[styles.iconInputField, customStyles, { color: "#000" }]}
      />
    </View>
  );
};

// Input field without Icon
export const SimpleInput = ({
  placeholder,
  text,
  onChangeText,
  customStyles,
  customFontStyles,
  secureInput,
  defaultValue,
  type,
  image,
  maxLength,
  editable,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.setNativeProps({ style: { fontFamily: AppFonts.light } });
  }, []);

  return (
    <View style={[styles.simpleInputContainer, customStyles]}>
      <Image source={image} resizeMode="contain" style={styles.iconInputIcon} />
      <TextInput
        secureTextEntry={secureInput}
        value={text}
        ref={inputRef}
        editable={editable}
        maxLength={maxLength}
        defaultValue={defaultValue}
        selectionColor={AppColors.black}
        onChangeText={(text) =>
          secureInput
            ? onChangeText(text?.trim())
            : onChangeText(text?.trimLeft())
        }
        placeholder={placeholder}
        placeholderTextColor={"#ccc"}
        keyboardType={type ? "email-address" : "ascii-capable"}
        style={[styles.simpleInputField, customFontStyles, { color: "#000" }]}
      />
    </View>
  );
};
