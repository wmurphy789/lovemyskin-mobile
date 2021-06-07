import React, { useRef, useEffect } from "react";
import { Image, TextInput, View } from "react-native";
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
        secureTextEntry={secureInput}
        onChangeText={onChangeText}
        style={[styles.iconInputField, customStyles]}
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
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={type ? "email-address" : "default"}
        style={[styles.simpleInputField, customFontStyles]}
      />
    </View>
  );
};
