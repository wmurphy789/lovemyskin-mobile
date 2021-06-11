import { APIKit, APIKit_Autodrum } from "./ApiKit";
import { Platform } from "react-native";
import { showmessage } from "../../Support/Validations";
import NetInfo from "@react-native-community/netinfo";
// let internetStatus = null;
const StatusCodes = {
  Success: 1,
  Failure: 0,
  ServerDown: 2,
  Unauthenticate: 3,
};

const Method = {
  POST(url, body) {
    return APIKit.post(url, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong" },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 400) {
              showmessage("Something went wrong");
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Failure,
              };
            } else if (
              error.response.status == 403 ||
              error.response.status == 401
            ) {
              showmessage("Unauthenticated");
              return {
                result: { msg: "Unauthenticated" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 404) {
              showmessage("Please enter valid email address or password");
              return {
                result: { msg: "Please enter valid email address or password" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 422) {
              showmessage(error.response.data.errors[0]);
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Unauthenticate,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  POST_FORMDATA(url, body) {
    return APIKit.post(url, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
        accept: "application/json",
      },
    })
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong" },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 400) {
              showmessage("Something went wrong");
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Failure,
              };
            } else if (
              error.response.status == 403 ||
              error.response.status == 401
            ) {
              showmessage("Unauthenticated");
              return {
                result: { msg: "Unauthenticated" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 404) {
              showmessage("Please enter valid email address or password");
              return {
                result: { msg: "Please enter valid email address or password" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 422) {
              showmessage(error.response.data.errors[0]);
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Unauthenticate,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
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
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        console.log("GET error:  ", error, "GET error:  &&", error.response);
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  PUT(url, body) {
    // console.log("post url", url);
    return APIKit.put(url, body, {
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong" },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 400) {
              showmessage("Something went wrong");
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Failure,
              };
            } else if (
              error.response.status == 403 ||
              error.response.status == 401
            ) {
              showmessage("Unauthenticated");
              return {
                result: { msg: "Unauthenticated" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 404) {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 422) {
              showmessage(error.response.data.errors[0]);
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Unauthenticate,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  PUT_FORMDATA(url, body) {
    // console.log("post url", url);
    return APIKit.put(url, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    })
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong" },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 400) {
              showmessage("Something went wrong");
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Failure,
              };
            } else if (
              error.response.status == 403 ||
              error.response.status == 401
            ) {
              showmessage("Unauthenticated");
              return {
                result: { msg: "Unauthenticated" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 404) {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 422) {
              showmessage(error.response.data.errors[0]);
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Unauthenticate,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  PATCH(url, body) {
    // console.log("post url", url);
    return APIKit.patch(url, body, {
      headers: {
        "content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong" },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 400) {
              showmessage("Something went wrong");
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Failure,
              };
            } else if (
              error.response.status == 403 ||
              error.response.status == 401
            ) {
              showmessage("Unauthenticated");
              return {
                result: { msg: "Unauthenticated" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 404) {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 422) {
              showmessage(error.response.data.errors[0]);
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Unauthenticate,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  PATCH_FORMDATA(url, body) {
    // console.log("post url", url);
    return APIKit.patch(url, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "application/json",
      },
    })
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong" },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 400) {
              showmessage("Something went wrong");
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Failure,
              };
            } else if (
              error.response.status == 403 ||
              error.response.status == 401
            ) {
              showmessage("Unauthenticated");
              return {
                result: { msg: "Unauthenticated" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 404) {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 422) {
              showmessage(error.response.data.errors[0]);
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Unauthenticate,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  DELETE(url, body) {
    // console.log("post url", url);
    return APIKit.delete(url, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   Accept: "application/json",
      // },
    })
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
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
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong" },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 400) {
              showmessage("Something went wrong");
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Failure,
              };
            } else if (
              error.response.status == 403 ||
              error.response.status == 401
            ) {
              showmessage("Unauthenticated");
              return {
                result: { msg: "Unauthenticated" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 404) {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Unauthenticate,
              };
            } else if (error.response.status == 422) {
              showmessage(error.response.data.errors[0]);
              return {
                result: { msg: error.response.data.errors[0] },
                status: StatusCodes.Unauthenticate,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong." },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  POST_AUTODROM(url, body) {
    return APIKit_Autodrum.post(url, body, {})
      .then(async (data) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (data) {
            if (
              data.status === 201 ||
              data.status === 200 ||
              data.status == 204
            ) {
              return {
                status: StatusCodes.Success,
                result: data.data,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { message: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          } else {
            showmessage("Something went wrong");
            return {
              result: { message: "Something went wrong." },
              status: StatusCodes.Failure,
            };
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        const internetStatus = await NetInfo.fetch();
        if (internetStatus.isConnected) {
          if (error.response == undefined) {
            return {
              result: { msg: "Server Timed Out" },
              status: StatusCodes.Failure,
            };
          } else {
            if (error.response.status == 417) {
              showmessage(
                "Image is not related to skin. Please upload an image related to skin"
              );
              return {
                result: {
                  msg:
                    "Image is not related to skin. Please upload an image related to skin",
                },
                status: StatusCodes.Failure,
              };
            } else {
              showmessage("Something went wrong");
              return {
                result: { msg: "Something went wrong" },
                status: StatusCodes.Failure,
              };
            }
          }
        } else {
          showmessage("Please check your internet connection");
          return {
            result: { msg: "Please check your internet connection" },
            status: StatusCodes.Failure,
          };
        }
      });
  },
};

export default Method;
