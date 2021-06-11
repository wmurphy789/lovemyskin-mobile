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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImagePickerModal = (props) => {
  return (
    <Modal
      visible={props.load}
      transparent={true}
      onRequestClose={() => props.onClose()}
    >
      {/* <TouchableWithoutFeedback onPress={() => props.onClose()}> */}
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
            borderRadius: 10,
          }}
        >
          {/* <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              position: "absolute",
              top: -15,
              right: -15,
            }}
          > */}
          {/* <TouchableOpacity
            // activeOpacity={1}
            onPress={() => props.onClose()}
            style={{
              height: 30,
              width: 30,
              backgroundColor: AppColors.main,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              position: "absolute",
              zIndex: 99999,
              right: -10,
              top: -10,
            }}
          > */}
          {/* <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              X
            </Text> */}
          <MaterialCommunityIcons
            name={"close-circle"}
            size={35}
            color={AppColors.main}
            style={{
              position: "absolute",
              right: -9,
              top: -9,
              zIndex: 99999,
            }}
            onPress={() => props.onClose()}
          />
          {/* </TouchableOpacity> */}
          {/* </View> */}
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Pick an image
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
            <Text style={{ fontSize: 16 }}>Open Camera</Text>
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
            <Text style={{ fontSize: 16 }}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};

export default ImagePickerModal;
