import AppConstants from "../../Theme/AppConstants";
import axios from "axios";
import { DataManager } from "../../Support/Datamanager";

let APIKit = axios.create({
  baseURL: AppConstants.SERVER_URL,
  timeout: 600000,
});
let APIKit_Autodrum = axios.create({
  baseURL: "https://autoderm.firstderm.com/v1/",
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
APIKit_Autodrum.interceptors.request.use(async (config) => {
  config.headers["Api-Key"] = `yyGN2tv4-gwMDTTV0fIHJz4GTKq6AY0yWy9WEm-6jVI`;

  return config;
});

export { APIKit, APIKit_Autodrum };
