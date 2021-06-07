"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiKit = _interopRequireDefault(require("./ApiKit"));

var _reactNative = require("react-native");

var _Validations = require("../../Support/Validations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// let internetStatus = null;
var StatusCodes = {
  Success: 1,
  Failure: 0,
  ServerDown: 2,
  Unauthenticate: 3
};
var Method = {
  POST: function POST(url, body) {
    return _ApiKit["default"].post(url, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-Type": "application/json",
        accept: "application/json"
      }
    }).then(function _callee(data) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!data) {
                _context.next = 8;
                break;
              }

              if (!(data.status === 201 || data.status === 200)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", {
                status: StatusCodes.Success,
                result: data.data
              });

            case 5:
              return _context.abrupt("return", {
                result: {
                  message: data.data.message
                },
                status: StatusCodes.Failure
              });

            case 6:
              _context.next = 10;
              break;

            case 8:
              (0, _Validations.showmessage)("Something went wrong.");
              return _context.abrupt("return", {
                result: {
                  message: "Something went wrong."
                },
                status: StatusCodes.Failure
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    })["catch"](function _callee2(error) {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(error.response == undefined)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", {
                result: {
                  msg: "Server Timed Out"
                },
                status: StatusCodes.Failure
              });

            case 4:
              if (!(error.response.status == 400)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", {
                result: {
                  msg: error.response.data.message
                },
                status: StatusCodes.Failure
              });

            case 8:
              if (!(error.response.status == 403 || error.response.status == 401)) {
                _context2.next = 13;
                break;
              }

              (0, _Validations.showmessage)("Unauthenticated");
              return _context2.abrupt("return", {
                result: {
                  msg: error.response.data.message
                },
                status: StatusCodes.Unauthenticate
              });

            case 13:
              if (!(error.response.status == 404)) {
                _context2.next = 18;
                break;
              }

              (0, _Validations.showmessage)("Invalid credentials");
              return _context2.abrupt("return", {
                result: {
                  msg: "Invalid credentials"
                },
                status: StatusCodes.Unauthenticate
              });

            case 18:
              if (!(error.response.status == 422)) {
                _context2.next = 23;
                break;
              }

              (0, _Validations.showmessage)(error.response.data.message);
              return _context2.abrupt("return", {
                result: {
                  msg: "Invalid credentials"
                },
                status: StatusCodes.Unauthenticate
              });

            case 23:
              (0, _Validations.showmessage)("Something went wrong.");
              return _context2.abrupt("return", {
                result: {
                  msg: "Something went wrong."
                },
                status: StatusCodes.Failure
              });

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  },
  GET: function GET(url, body) {
    // console.log("post url", url);
    return _ApiKit["default"].get(url, {// headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "content-Type": "application/json",
      //   Accept: "application/json",
      // },
    }).then(function (data) {
      console.log("data---->", data);

      if (data.status == 200) {
        return {
          status: StatusCodes.Success,
          result: data.data
        };
      } else {
        return {
          result: {
            msg: "Something went wrong."
          },
          status: StatusCodes.Failure
        };
      }
    })["catch"](function (error) {
      console.log("GET error:  ", error, "GET error:  &&", error.response);

      if (error.response == undefined) {
        return {
          result: {
            msg: "Server Timed Out"
          },
          status: StatusCodes.Failure
        };
      } else {
        if (error.response.status == 400) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Failure
          };
        } else if (error.response.status == 403 || error.response.status == 401) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Unauthenticate
          };
        } else {
          return {
            result: {
              msg: "Something went wrong."
            },
            status: StatusCodes.Failure
          };
        }
      }
    });
  },
  PUT: function PUT(body, url) {
    // console.log("post url", url);
    return _ApiKit["default"].put(url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json"
      }
    }).then(function (data) {
      if (data.status == 200) {
        return {
          status: StatusCodes.Success,
          result: data.data
        };
      } else {
        return {
          result: {
            msg: "Something went wrong."
          },
          status: StatusCodes.Failure
        };
      }
    })["catch"](function (error) {
      // console.log("GET error:  ", error, "GET error:  &&", error.response);
      if (error.response == undefined) {
        return {
          result: {
            msg: "Server Timed Out"
          },
          status: StatusCodes.Failure
        };
      } else {
        if (error.response.status == 400) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Failure
          };
        } else if (error.response.status == 403 || error.response.status == 401) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Unauthenticate
          };
        } else {
          return {
            result: {
              msg: "Something went wrong."
            },
            status: StatusCodes.Failure
          };
        }
      }
    });
  },
  PATCH: function PATCH(body, url) {
    // console.log("post url", url);
    return _ApiKit["default"].patch(url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json"
      }
    }).then(function (data) {
      if (data.status == 200) {
        return {
          status: StatusCodes.Success,
          result: data.data
        };
      } else {
        return {
          result: {
            msg: "Something went wrong."
          },
          status: StatusCodes.Failure
        };
      }
    })["catch"](function (error) {
      // console.log("GET error:  ", error, "GET error:  &&", error.response);
      if (error.response == undefined) {
        return {
          result: {
            msg: "Server Timed Out"
          },
          status: StatusCodes.Failure
        };
      } else {
        if (error.response.status == 400) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Failure
          };
        } else if (error.response.status == 403 || error.response.status == 401) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Unauthenticate
          };
        } else {
          return {
            result: {
              msg: "Something went wrong."
            },
            status: StatusCodes.Failure
          };
        }
      }
    });
  },
  DELETE: function DELETE(body, url) {
    // console.log("post url", url);
    return _ApiKit["default"]["delete"](url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json"
      }
    }).then(function (data) {
      if (data.status == 200) {
        return {
          status: StatusCodes.Success,
          result: data.data
        };
      } else {
        return {
          result: {
            msg: "Something went wrong."
          },
          status: StatusCodes.Failure
        };
      }
    })["catch"](function (error) {
      // console.log("GET error:  ", error, "GET error:  &&", error.response);
      if (error.response == undefined) {
        return {
          result: {
            msg: "Server Timed Out"
          },
          status: StatusCodes.Failure
        };
      } else {
        if (error.response.status == 400) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Failure
          };
        } else if (error.response.status == 403 || error.response.status == 401) {
          return {
            result: {
              msg: error.response.data.message
            },
            status: StatusCodes.Unauthenticate
          };
        } else {
          return {
            result: {
              msg: "Something went wrong."
            },
            status: StatusCodes.Failure
          };
        }
      }
    });
  }
};
var _default = Method;
exports["default"] = _default;