import styles from "./styles";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Keyboard,
  ActivityIndicator,
  Linking,
} from "react-native";

import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";

const CommentComponent = ({ item, index, likePress, commentPress }) => {
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
            //   {
            //   uri:
            //     item?.attributes?.user_image != null
            //       ? item?.attributes?.user_image
            //       : ,
            // }
          }
          style={styles.commentProfile}
        />
        <Text style={styles.commentProfileUserName}>
          {!item?.attributes?.user_name
            ? "Anonymous"
            : item?.attributes?.user_name}
        </Text>
      </View>
      <Text style={styles.commentStyle}>{item?.attributes?.message}</Text>
      {/* <View
          style={[styles.pillarStatusInfo, styles.pillarStatusInfoCustom]}
        >
          <View style={styles.PillarlikeCommentView}>
            <TouchableOpacity onPress={likePress}>
              <Image source={AppImages.greenHeartIcon} style={styles.PillarlikeCommentImage}
              />
            </TouchableOpacity>
            <Text style={styles.pillarLikesCount}>{item.likes}</Text>
            <Text style={styles.pillarLikes}>{AppConstants.likes}</Text>
          </View>
          <TouchableOpacity onPress={commentPress}>
            <View style={styles.PillarlikeCommentView}>
              <Image source={AppImages.greenChatIcon} style={styles.PillarlikeCommentImage} />
              <Text style={styles.pillarComments}>{AppConstants.comments}</Text>
              <Text style={styles.pillarCommentsCount}>{item.comments}</Text>
            </View>
          </TouchableOpacity>
        </View> */}
    </View>
  );
};

export default CommentComponent;
