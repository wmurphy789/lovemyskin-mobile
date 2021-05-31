import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { FullButton } from "../../Components/Button";
import { IconInput } from "../../Components/Input/Input";
import Methods from "../../Support/Methods";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import { AppImages } from "../../Theme/AppImages";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";

const SkinPriorities = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={{ backgroundColor: AppColors.white, flex: 1 }}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="rgba(33, 131, 129, 0.5)"
        activeOpacity={1}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={AppImages.backIcon} style={styles.backImage} />
      </TouchableHighlight>

      <ScrollView bounces={false} keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <Text style={styles.titleText}>
            {AppConstants.whatisthebiggestPriority}
          </Text>
          {AppConstants.priorities.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedIndex(index);
              }}
              key={index}
            >
              <View
                style={[
                  styles.listItem,
                  {
                    backgroundColor:
                      index == selectedIndex
                        ? "rgba(33, 131, 129, 0.3)"
                        : AppColors.white,
                    borderColor:
                      index == selectedIndex
                        ? AppColors.main
                        : AppColors.mediumGrey,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.listText,
                    {
                      fontFamily: AppFonts.light,
                      color:
                        index == selectedIndex
                          ? AppColors.main
                          : AppColors.mediumGrey,
                    },
                  ]}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => {
              Methods.navigate(navigation, "Tabs");
            }}
            style={styles.dontAnswerButton}
          >
            <Text style={styles.dontAnswerText}>
              {AppConstants.iDontWantToAnswerThis}
            </Text>
          </TouchableOpacity>
          <FullButton
            title={AppConstants.continue}
            onPress={() => {
              Methods.navigate(navigation, "Tabs");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default SkinPriorities;
