import styles from "./styles";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";

const CommentComponent = ({ item, index, likePress, commentPress, flagUser }) => {
  // users comment component
  // console.log('item of comment', item);
  return (
    <View key={index}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginBottom: 10,
          marginTop: 15,
        }}
      >
        <Image
          source={
            item?.attributes?.user_image
              ? { uri: item?.attributes?.user_image }
              : AppImages.commentDummy
          }
          style={styles.commentProfile}
        />
        <Text style={styles.commentProfileUserName}>
          {!item?.attributes?.user_name
            ? "Anonymous"
            : item?.attributes?.user_name}
        </Text>

        <TouchableOpacity
          onPress={flagUser}
          style={styles.commentFlag}>
          <Text style={{color: "#FF0000"}}>Flag</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.commentStyle}>{item?.attributes?.message}</Text>
    </View>
  );
};

export default CommentComponent;
