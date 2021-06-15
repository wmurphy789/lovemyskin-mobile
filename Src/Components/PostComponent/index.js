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

function PostComponent({ item, index, likePress, commentPress }) {
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [like, setLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  console.log("Item at Post Component", item);

  useEffect(() => {
    console.log("item attributes", item.attributes);
    setLikes(item.attributes.likes);
    setLiked(item.attributes.liked_by_me);
    setCommentCount(item.attributes?.comment_count);
    setPost(item.attributes);
  }, [item.attributes]);
  return (
    <TouchableOpacity 
    onPress={() => {
      item?.attributes?.url_link != null
        ? Linking.openURL(item?.attributes?.url_link)
        : alert("Url not avaliable.");
    }}
    style={styles.PillarItemView}>
      <Image
        source={
          post?.attributes?.image != null
            ? { uri: post?.attributes?.image }
            : AppImages.postDummy
        }
        style={styles.pillarImage}
      />
      <View style={styles.pillarInfoView}>
        <TouchableOpacity
          onPress={() => {
            item?.attributes?.url_link != null
              ? Linking.openURL(item?.attributes?.url_link)
              : alert("Url not avaliable.");
          }}
        >
          <Text style={styles.pillerHeading}>
            {item?.attributes?.description}
          </Text>
        </TouchableOpacity>
        <View style={styles.pillarStatusInfo}>
          <TouchableOpacity
            onPress={likePress}
            style={styles.PillarlikeCommentView}
          >
            {/* <TouchableOpacity 
            // onPress={likePress}
            > */}
            <Image
              source={like ? AppImages.redHeartIcon : AppImages.greenHeartIcon}
              style={styles.PillarlikeCommentImage}
            />
            {/* </TouchableOpacity> */}
            <Text style={styles.pillarLikesCount}>{likes}</Text>
            <Text style={styles.pillarLikes}>
              {likes != 1 ? AppConstants.likes : AppConstants.like}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={commentPress}>
            <View style={styles.PillarlikeCommentView}>
              <Image
                source={AppImages.greenChatIcon}
                style={styles.PillarlikeCommentImage}
              />
              <Text style={styles.pillarComments}>{item?.attributes?.comment_count !=1 ? AppConstants.comments:AppConstants.comment}</Text>
              <Text style={styles.pillarCommentsCount}>{item?.attributes?.comment_count}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PostComponent;
