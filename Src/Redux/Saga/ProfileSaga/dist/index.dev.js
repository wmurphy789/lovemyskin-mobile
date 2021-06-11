"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchGetProfile = fetchGetProfile;
exports.fetchUpdateProfile = fetchUpdateProfile;
exports.fetchUpdateProfileImage = fetchUpdateProfileImage;
exports.fetchChangePassword = fetchChangePassword;

var _effects = require("redux-saga/effects");

var _Datamanager = require("../../../Support/Datamanager");

var _Methods = _interopRequireDefault(require("../../../Support/Methods"));

var _Validations = require("../../../Support/Validations");

var ActionType = _interopRequireWildcard(require("../../ActionTypes"));

var ApiMethods = _interopRequireWildcard(require("../../Api"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchGetProfile),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchUpdateProfile),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchUpdateProfileImage),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchChangePassword);

function fetchGetProfile(_ref) {
  var param, response;
  return regeneratorRuntime.wrap(function fetchGetProfile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          param = _ref.param;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(ApiMethods.getUserProfileApi, param);

        case 4:
          response = _context.sent;
          console.log(param, "Nav");

          if (!(response.status == 1)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return (0, _effects.put)({
            type: ActionType.GET_PROFILE_SUCCESS,
            Result: response
          });

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.next = 13;
          return (0, _effects.put)({
            type: ActionType.GET_PROFILE_FAIL,
            Result: {
              msg: "Profile Not Found!"
            }
          });

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          _context.next = 19;
          return (0, _effects.put)({
            type: ActionType.UNKNOWN_ERROR,
            message: "unknown error!"
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 15]]);
}

function fetchUpdateProfile(_ref2) {
  var param, response;
  return regeneratorRuntime.wrap(function fetchUpdateProfile$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          param = _ref2.param;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(ApiMethods.updateProfileApi, param);

        case 4:
          response = _context2.sent;

          if (!(response.status == 1)) {
            _context2.next = 12;
            break;
          }

          _context2.next = 8;
          return (0, _effects.put)({
            type: ActionType.UPDATE_PROFILE_SUCCESS,
            Result: response
          });

        case 8:
          _Methods["default"].goBack(param.navigation);

          (0, _Validations.showmessage)("Profile details updated successfully.");
          _context2.next = 17;
          break;

        case 12:
          if (!(response.status == 0)) {
            _context2.next = 17;
            break;
          }

          _context2.next = 15;
          return (0, _effects.put)({
            type: ActionType.UPDATE_PROFILE_FAIL,
            Result: response
          });

        case 15:
          param.navigate("Auth");
          (0, _Validations.showmessage)("Profile not found! please login again.");

        case 17:
          _context2.next = 23;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 23;
          return (0, _effects.put)({
            type: ActionType.UNKNOWN_ERROR,
            message: "unknown error!"
          });

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 19]]);
}

function fetchUpdateProfileImage(_ref3) {
  var param, navigation, response;
  return regeneratorRuntime.wrap(function fetchUpdateProfileImage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          param = _ref3.param, navigation = _ref3.navigation;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(ApiMethods.updateProfileImageApi, param);

        case 4:
          response = _context3.sent;
          console.log(response, "response asdgahsj");

          if (!(response.status == 1)) {
            _context3.next = 13;
            break;
          }

          _context3.next = 9;
          return (0, _effects.put)({
            type: ActionType.UPDATE_PROFILE_SUCCESS,
            Result: response
          });

        case 9:
          _Methods["default"].goBack(navigation);

          (0, _Validations.showmessage)("Profile details updated successfully.");
          _context3.next = 22;
          break;

        case 13:
          if (!(response.status == 0)) {
            _context3.next = 20;
            break;
          }

          _context3.next = 16;
          return (0, _effects.put)({
            type: ActionType.UPDATE_PROFILE_FAIL,
            Result: response
          });

        case 16:
          navigation.navigate("Auth");
          (0, _Validations.showmessage)("Profile not found! please login again.");
          _context3.next = 22;
          break;

        case 20:
          console.log(response);
          (0, _Validations.showmessage)("Failed to update Profile Image.");

        case 22:
          _context3.next = 28;
          break;

        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 28;
          return (0, _effects.put)({
            type: ActionType.UNKNOWN_ERROR,
            message: "unknown error!"
          });

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 24]]);
}

function fetchChangePassword(_ref4) {
  var param, response;
  return regeneratorRuntime.wrap(function fetchChangePassword$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          param = _ref4.param;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.call)(ApiMethods.changePasswordApi, param);

        case 4:
          response = _context4.sent;
          console.log(response, "RESPONSE CHANGEPASSWORD");

          if (!(response.status == 1)) {
            _context4.next = 14;
            break;
          }

          _context4.next = 9;
          return (0, _effects.put)({
            type: ActionType.CHANGE_PASSWORD_SUCESS,
            Result: response
          });

        case 9:
          _Datamanager.DataManager.clearLocalStorage();

          (0, _Validations.showmessage)("Password changed successfully. Login again");

          _Methods["default"].navigate(param.navigation, "Auth");

          _context4.next = 23;
          break;

        case 14:
          if (!(response.status == 3)) {
            _context4.next = 20;
            break;
          }

          _context4.next = 17;
          return (0, _effects.put)({
            type: ActionType.CHANGE_PASSWORD_FAIL,
            Result: response
          });

        case 17:
          (0, _Validations.showmessage)("Old Password is wrong.");
          _context4.next = 23;
          break;

        case 20:
          _context4.next = 22;
          return (0, _effects.put)({
            type: ActionType.CHANGE_PASSWORD_FAIL,
            Result: response
          });

        case 22:
          (0, _Validations.showmessage)("Something went wrong!");

        case 23:
          _context4.next = 29;
          break;

        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 29;
          return (0, _effects.put)({
            type: ActionType.UNKNOWN_ERROR,
            message: "unknown error!"
          });

        case 29:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 25]]);
}