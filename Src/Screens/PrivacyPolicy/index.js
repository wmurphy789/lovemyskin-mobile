import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { WebView } from 'react-native-webview';
import { FullButton } from "../../Components/Button";
import { CurvedHeader } from "../../Components/Header";
import { SimpleInput } from "../../Components/Input/Input";
import Methods from "../../Support/Methods";

import AppConstants from "../../Theme/AppConstants";
import { AppImages } from "../../Theme/AppImages";
import styles from "./styles";
const PrivacyPolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CurvedHeader
        title={AppConstants.privacyPolicy}
        leftIcon={AppImages.backIcon}
        leftPress={() => {
          Methods.goBack(navigation);
        }}
      />
      <WebView
                source={{uri : AppConstants.PRIVACY_POLICY_URL}}
                style={{
                    width : '100%',                                          
                }}
            />
    </View>
  );
};
export default PrivacyPolicy;
