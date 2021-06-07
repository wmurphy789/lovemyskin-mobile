import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator,
} from "react-native";
import { AppColors } from "../../Theme/AppColors";

const Loader = (props) => {
  return (
    <Modal visible={props.load} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.3)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: AppColors.lightGrey,
            height: 80,
            width: 80,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator color={AppColors.main} size="small" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
