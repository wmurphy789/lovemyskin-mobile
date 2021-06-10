"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAffirmationSaga = getAffirmationSaga;
exports.getAffirmationByIdSaga = getAffirmationByIdSaga;
exports.createAffirmationSaga = createAffirmationSaga;
exports.deleteAffirmationSaga = deleteAffirmationSaga;
exports.updateAffirmationSaga = updateAffirmationSaga;

var _effects = require("redux-saga/effects");

var _Datamanager = require("../../../Support/Datamanager");

var _Validations = require("../../../Support/Validations");

var types = _interopRequireWildcard(require("../../ActionTypes"));

var _Api = require("../../Api");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getAffirmationSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(getAffirmationByIdSaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(createAffirmationSaga),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(deleteAffirmationSaga),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(updateAffirmationSaga);

// get affirmation SAGA
function getAffirmationSaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function getAffirmationSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_START
          });

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _effects.call)(_Api.getAffirmationApi, action.payload);

        case 5:
          response = _context.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_SUCCESS,
            data: result
          });

        case 10:
          _context.next = 14;
          break;

        case 12:
          _context.next = 14;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_ERROR
          });

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          _context.next = 20;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_ERROR
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 16]]);
}

function getAffirmationByIdSaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function getAffirmationByIdSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("in saga");
          _context2.next = 3;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_BY_ID_START
          });

        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _effects.call)(_Api.getAffirmationByIdApi, action.payload);

        case 6:
          response = _context2.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context2.next = 13;
            break;
          }

          _context2.next = 11;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_BY_ID_SUCCESS,
            data: result.data
          });

        case 11:
          _context2.next = 15;
          break;

        case 13:
          _context2.next = 15;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_BY_ID_ERROR
          });

        case 15:
          _context2.next = 21;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](3);
          _context2.next = 21;
          return (0, _effects.put)({
            type: types.API_GETAFFIRMATION_BY_ID_ERROR
          });

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[3, 17]]);
} // create affirmation SAGA


function createAffirmationSaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function createAffirmationSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.put)({
            type: types.API_CREATE_AFFIRMATION_START
          });

        case 2:
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _effects.call)(_Api.createAffirmationApi, action.payload);

        case 5:
          response = _context3.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context3.next = 14;
            break;
          }

          _context3.next = 10;
          return (0, _effects.put)({
            type: types.API_CREATE_AFFIRMATION_SUCCESS
          });

        case 10:
          (0, _Validations.showmessage)("Affirmmation created successfully");
          action.navigation.navigate("AffirmationStack");
          _context3.next = 16;
          break;

        case 14:
          _context3.next = 16;
          return (0, _effects.put)({
            type: types.API_CREATE_AFFIRMATION_ERROR
          });

        case 16:
          _context3.next = 22;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 22;
          return (0, _effects.put)({
            type: types.API_CREATE_AFFIRMATION_ERROR
          });

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[2, 18]]);
} //delete affirmation saga


function deleteAffirmationSaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function deleteAffirmationSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.put)({
            type: types.API_DELETE_AFFIRMATION_START
          });

        case 2:
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _effects.call)(_Api.deleteAffirmationApi, action.payload);

        case 5:
          response = _context4.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context4.next = 13;
            break;
          }

          _context4.next = 10;
          return (0, _effects.put)({
            type: types.API_DELETE_AFFIRMATION_SUCCESS
          });

        case 10:
          action.navigation.goBack();
          _context4.next = 15;
          break;

        case 13:
          _context4.next = 15;
          return (0, _effects.put)({
            type: types.API_DELETE_AFFIRMATION_ERROR
          });

        case 15:
          _context4.next = 21;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](2);
          _context4.next = 21;
          return (0, _effects.put)({
            type: types.API_DELETE_AFFIRMATION_ERROR
          });

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[2, 17]]);
} //update affirmation saga


function updateAffirmationSaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function updateAffirmationSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.put)({
            type: types.API_UPDATE_AFFIRMATION_START
          });

        case 2:
          _context5.prev = 2;
          _context5.next = 5;
          return (0, _effects.call)(_Api.updateAffirmationApi, action.payload);

        case 5:
          response = _context5.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context5.next = 13;
            break;
          }

          _context5.next = 10;
          return (0, _effects.put)({
            type: types.API_UPDATE_AFFIRMATION_SUCCESS
          });

        case 10:
          action.navigation.goBack();
          _context5.next = 15;
          break;

        case 13:
          _context5.next = 15;
          return (0, _effects.put)({
            type: types.API_UPDATE_AFFIRMATION_ERROR
          });

        case 15:
          _context5.next = 21;
          break;

        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](2);
          _context5.next = 21;
          return (0, _effects.put)({
            type: types.API_UPDATE_AFFIRMATION_ERROR
          });

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[2, 17]]);
}