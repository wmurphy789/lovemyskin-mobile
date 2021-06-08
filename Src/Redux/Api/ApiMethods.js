import APIKit from "./ApiKit";
import { Platform } from "react-native";
import { showmessage } from "../../Support/Validations";
// let internetStatus = null;
const StatusCodes = {
  Success: 1,
  Failure: 0,
  ServerDown: 2,
  Unauthenticate: 3,
};

const Method = {
  POST(url, body) {
    console.log("post url", url);
    return APIKit.post(url, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then(async (data) => {
        console.log("data->>>>>", data);
        if (data) {
          if (data.status === 201 || data.status === 200) {
            return {
              status: StatusCodes.Success,
              result: data.data,
            };
          } else {
            return {
              result: { message: data.data.message },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Something went wrong.");
          return {
            result: { message: "Something went wrong." },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        if (error.response == undefined) {
          return {
            result: { msg: "Server Timed Out" },
            status: StatusCodes.Failure,
          };
        } else {
          if (error.response.status == 400) {
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Failure,
            };
          } else if (
            error.response.status == 403 ||
            error.response.status == 401
          ) {
            showmessage("Unauthenticated");
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Unauthenticate,
            };
          } else if (error.response.status == 404) {
            showmessage("Invalid credentials");
            return {
              result: { msg: "Invalid credentials" },
              status: StatusCodes.Unauthenticate,
            };
          } else if (error.response.status == 422) {
            showmessage(error.response.data.message);
            return {
              result: { msg: "Invalid credentials" },
              status: StatusCodes.Unauthenticate,
            };
          } else {
            showmessage("Something went wrong.");
            return {
              result: { msg: "Something went wrong." },
              status: StatusCodes.Failure,
            };
          }
        }
      });
  },
  GET(url, body) {
    // console.log("post url", url);
    return APIKit.get(url, {
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "content-Type": "application/json",
      //   Accept: "application/json",
      // },
    })
      .then((data) => {
        console.log("data---->", data);
        if (data.status == 200) {
          return {
            status: StatusCodes.Success,
            result: data.data,
          };
        } else {
          return {
            result: { msg: "Something went wrong." },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch((error) => {
        console.log("GET error:  ", error, "GET error:  &&", error.response);

        if (error.response == undefined) {
          return {
            result: { msg: "Server Timed Out" },
            status: StatusCodes.Failure,
          };
        } else {
          if (error.response.status == 400) {
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Failure,
            };
          } else if (
            error.response.status == 403 ||
            error.response.status == 401
          ) {
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Unauthenticate,
            };
          } else {
            return {
              result: { msg: "Something went wrong." },
              status: StatusCodes.Failure,
            };
          }
        }
      });
  },
  PUT(url, body) {
    // console.log("post url", url);
    return APIKit.put(url, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    })
      .then(async (data) => {
        console.log("data----->", data);
        if (data) {
          if (data.status === 201 || data.status === 200) {
            return {
              status: StatusCodes.Success,
              result: data.data,
            };
          } else {
            return {
              result: { message: data.data.message },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Something went wrong.");
          return {
            result: { message: "Something went wrong." },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        if (error.response == undefined) {
          return {
            result: { msg: "Server Timed Out" },
            status: StatusCodes.Failure,
          };
        } else {
          if (error.response.status == 400) {
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Failure,
            };
          } else if (
            error.response.status == 403 ||
            error.response.status == 401
          ) {
            showmessage("Unauthenticated");
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Unauthenticate,
            };
          } else if (error.response.status == 404) {
            showmessage("Invalid credentials");
            return {
              result: { msg: "Invalid credentials" },
              status: StatusCodes.Unauthenticate,
            };
          } else if (error.response.status == 422) {
            showmessage(error.response.data.message);
            return {
              result: { msg: "Invalid credentials" },
              status: StatusCodes.Unauthenticate,
            };
          } else {
            showmessage("Something went wrong.");
            return {
              result: { msg: "Something went wrong." },
              status: StatusCodes.Failure,
            };
          }
        }
      });
  },
  PATCH(url, body) {
    // console.log("post url", url);
    return APIKit.patch(url, body, {
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
    })
      .then((data) => {
        if (data.status == 200 || 204) {
          return {
            status: StatusCodes.Success,
            result: data.data,
          };
        } else {
          return {
            result: { msg: "Something went wrong." },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch((error) => {
        // console.log("GET error:  ", error, "GET error:  &&", error.response);

        if (error.response == undefined) {
          return {
            result: { msg: "Server Timed Out" },
            status: StatusCodes.Failure,
          };
        } else {
          if (error.response.status == 400) {
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Failure,
            };
          } else if (
            error.response.status == 403 ||
            error.response.status == 401 ||
            error.response.status == 404
          ) {
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Unauthenticate,
            };
          } else {
            return {
              result: { msg: "Something went wrong." },
              status: StatusCodes.Failure,
            };
          }
        }
      });
  },
  DELETE(url, body) {
    // console.log("post url", url);
    return APIKit.delete(url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    })
      .then(async (data) => {
        if (data) {
          if (
            data.status === 201 ||
            data.status === 200 ||
            data.status === 204
          ) {
            return {
              status: StatusCodes.Success,
              result: data.data,
            };
          } else {
            return {
              result: { message: data.data.message },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Something went wrong.");
          return {
            result: { message: "Something went wrong." },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        console.log("in error", error, error.response);
        if (error.response == undefined) {
          return {
            result: { msg: "Server Timed Out" },
            status: StatusCodes.Failure,
          };
        } else {
          if (error.response.status == 400) {
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Failure,
            };
          } else if (
            error.response.status == 403 ||
            error.response.status == 401
          ) {
            showmessage("Unauthenticated");
            return {
              result: { msg: error.response.data.message },
              status: StatusCodes.Unauthenticate,
            };
          } else if (error.response.status == 404) {
            showmessage("Something went wrong.");
            return {
              result: { msg: "Something went wrong." },
              status: StatusCodes.Unauthenticate,
            };
          } else if (error.response.status == 422) {
            showmessage(error.response.data.message);
            return {
              result: { msg: "Something went wrong." },
              status: StatusCodes.Unauthenticate,
            };
          } else {
            showmessage("Something went wrong.");
            return {
              result: { msg: "Something went wrong." },
              status: StatusCodes.Failure,
            };
          }
        }
      });
  },
};

export default Method;
