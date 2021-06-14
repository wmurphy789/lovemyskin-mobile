import { AsyncStorage } from "react-native";
import { localKey } from "./DataMangerKeys";

export const DataManager = {
  //method to set app intro boolean value

  //method to set access token
  async setAccessToken(token) {
    await AsyncStorage.setItem(localKey.accessToken, token);
  },

  //method to get access token
  async getAccessToken() {
    try {
      const token = await AsyncStorage.getItem(localKey.accessToken);
      return token;
    } catch (error) {}
  },

  //method to set device token
  async setDeviceToken(token) {
    await AsyncStorage.setItem(localKey.deviceToken, token);
  },

  //method to get access token
  async getDeviceToken() {
    try {
      const token = await AsyncStorage.getItem(localKey.deviceToken);
      return token;
    } catch (error) {
      console.log("error", error);
    }
  },

  //method to set access token
  async setUserId(id) {
    await AsyncStorage.setItem(localKey.userId, id);
  },

  async getUserId() {
    try {
      const userId = await AsyncStorage.getItem(localKey.userId);
      return userId;
    } catch (error) {
      console.log("error----", error);
    }
  },
  async setQuestionId(id) {
    console.log(id, "decoded.question_id");
    await AsyncStorage.setItem(localKey.questionId, id?.toString());
  },

  async getQuestionId() {
    try {
      const questionId = await AsyncStorage.getItem(localKey.questionId);
      return questionId;
    } catch (error) {
      console.log("error----", error);
    }
  },

  async clearLocalStorage() {
    await AsyncStorage.clear();
  },
};
