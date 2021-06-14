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
  BackHandler,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FullButton } from "../../Components/Button";
import { IconInput } from "../../Components/Input/Input";
import Methods, { navigationRef } from "../../Support/Methods";
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
import {
  setQuestionIdStateAction,
  updateQuestionIdAction,
} from "../../Redux/Actions/AuthActions";
import Loader from "../../Components/Loader";
import { useEffect } from "react";
import { DataManager } from "../../Support/Datamanager";
const SkinPriorities = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loader, setloader] = useState(false);
  const [view, setView] = useState(true);
  const dispatch = useDispatch();
  const AuthReducerState = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    authenticateUser();
  }, []);
  const authenticateUser = async () => {
    DataManager.getQuestionId().then((id) => {
      console.log("user id---", id);
      // if (id) {
      setView(false);
      // dispatch(setLoginStateAction(true));
      // }
      // setIntial(true);
    });
  };
  const updateQuestionId = () => {
    setloader(true);
    dispatch(updateQuestionIdAction(selectedIndex, navigation));
    setTimeout(() => {
      setloader(false);
    }, 800);
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        let route = navigationRef.current.getCurrentRoute();
        if (route.name == "SkinPriorities") {
          dispatch(setQuestionIdStateAction(5));
          // return true
        }
        // return backHandler.remove();
      }
    );
  }, []);

  return !view ? (
    <View style={{ backgroundColor: AppColors.white, flex: 1 }}>
      <Loader load={loader} />
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="rgba(33, 131, 129, 0.5)"
        activeOpacity={1}
        onPress={() => {
          dispatch(setQuestionIdStateAction(5));
          // navigation.goBack();
          // BackHandler.exitApp();
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
              // Methods.navigate(navigation, "Tabs");
              dispatch(setQuestionIdStateAction(5));
            }}
            style={styles.dontAnswerButton}
          >
            <Text style={styles.dontAnswerText}>
              {AppConstants.iDontWantToAnswerThis}
            </Text>
          </TouchableOpacity>
          <View style={{ marginBottom: responsiveHeight(5) }}>
            <FullButton
              disabled={AuthReducerState?.onLoad}
              title={AppConstants.continue}
              onPress={() => {
                updateQuestionId();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View>
      <Loader load={view} />
    </View>
  );
};
export default SkinPriorities;
