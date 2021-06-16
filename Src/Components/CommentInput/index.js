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
import { AppColors } from "../../Theme/AppColors";

const CommentInput = (props) => {
  // comment Input component
  // console.log('props value', props.value);
  return (
    <View style={styles.commentFieldView}>
      <TextInput
        placeholder={AppConstants.addYourCommenthere}
        style={styles.commentInput}
        onChangeText={(t) => props.onChangeText(t)}
        value={props.value}
        selectionColor={AppColors.main}
        // multiline={true}
        
        // editable={false}
        //   autoFocus={KeyBoardVisible ? true : false}
        //   onFocus={() => setKeyBoardVisible(true)}
        // onSubmitEditing={() => setKeyBoardVisible(false)}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: -1.5,
            top: -1,
        }}
        onPress={() => props.onSendPress()}
      >
        {/* send button Image */}
        <Image
          source={AppImages.sendButton}
          resizeMode="contain"
          style={styles.sendButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommentInput;
