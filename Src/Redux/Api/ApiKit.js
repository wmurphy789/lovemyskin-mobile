import AppConstants from "../../Theme/AppConstants";
import axios from "axios";
import { DataManager } from "../../Support/Datamanager";

let APIKit = axios.create({
  baseURL: AppConstants.SERVER_URL,
  timeout: 600000,
});

APIKit.interceptors.request.use(async (config) => {
  const tokenData = await DataManager.getAccessToken();
  console.log("token data --", tokenData);
  if (tokenData) {
    config.headers["Authorization"] = `Bearer ${tokenData}`;
  }
  return config;
});

export default APIKit;
