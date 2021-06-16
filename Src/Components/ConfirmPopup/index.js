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
import { responsiveWidth } from "../../Theme/ResponsiveDimensions";

const ConfirmPopupModal = (props) => {
  return (
    <Modal
      visible={props.load}
      transparent={true}
      // onRequestClose={() => props.onClose()}
    >
      {/* <TouchableWithoutFeedback onPress={() => {}}> */}
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
            // height: 150,
            width: responsiveWidth(80),
            borderRadius: 10,
          }}
        >
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                {props.text}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              // flex: 1,
              alignItems: "center",
              marginBottom: 10,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={{
                padding: 20,
                flex: 0.4,
              }}
              onPress={() => props.onClose()}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: "#EF6586",
                }}
              >
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                padding: 20,
                flex: 0.4,
              }}
              onPress={() => props.onAction()}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: "#4BCEA6",
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};

export default ConfirmPopupModal;
