import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FullButton } from "../../Components/Button";
import { AppColors } from "../../Theme/AppColors";
import AppConstants from "../../Theme/AppConstants";
import { AppFonts } from "../../Theme/AppFonts";
import {
  responsiveHeight,
} from "../../Theme/ResponsiveDimensions";
import styles from "./styles";
import {
  updateToc,
} from "../../Redux/Actions/AuthActions";
import Loader from "../../Components/Loader";
import { useEffect } from "react";
import { DataManager } from "../../Support/Datamanager";

const TOC = ({ navigation }) => {
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
      setView(false);
    });
  };
  const updateQuestionId = () => {
    setloader(true);
    dispatch(updateToc(navigation));
    setTimeout(() => {
      setloader(false);
    }, 800);
  };

  return !view ? (
    <View style={{ backgroundColor: AppColors.white, flex: 1 }}>
      <Loader load={loader} />

      <ScrollView bounces={false} keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <Text style={styles.titleText}>
            {AppConstants.whatisthebiggestPriority}
          </Text>
          <View
            style={[
              styles.listItem,
              {
                backgroundColor: AppColors.white,
                borderColor: AppColors.mediumGrey
              },
            ]}
          >
            <Text
              style={[
                styles.listText,
                {
                  fontFamily: AppFonts.light,
                  color: AppColors.mediumGrey
                },
              ]}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </Text>
          </View>

          <View style={{ marginBottom: responsiveHeight(5) }}>
            <FullButton
              disabled={AuthReducerState?.onLoad}
              title="Agree"
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
export default TOC;
