import React, { useState } from "react";
import {
  View,
  Modal,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AppColors } from "../../Theme/AppColors";

const ImagePickerModal = (props) => {
  return (
    <Modal
      visible={props.load}
      transparent={true}
      onRequestClose={() => props.onClose()}
    >
      <TouchableWithoutFeedback onPress={() => props.onClose()}>
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
              backgroundColor: AppColors.white,
              height: 150,
              width: 250,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity activeOpacity={1}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Pick a image
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                borderTopWidth: 0.5,
                borderColor: AppColors.mediumGrey,
                paddingHorizontal: 20,
                paddingVertical: 12,
              }}
              onPress={() => props.openCamera()}
            >
              <Text style={{ fontSize: 16 }}>Open camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                borderTopWidth: 0.5,
                borderColor: AppColors.mediumGrey,
                paddingHorizontal: 20,
                paddingVertical: 12,
              }}
              onPress={() => props.openGallery()}
            >
              <Text style={{ fontSize: 16 }}>Open gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ImagePickerModal;
