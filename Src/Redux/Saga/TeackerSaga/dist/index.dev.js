"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrackerEntrySaga = getTrackerEntrySaga;
exports.getTrackerAllEntrySaga = getTrackerAllEntrySaga;
exports.deleteTrackerEntrySaga = deleteTrackerEntrySaga;

var _effects = require("redux-saga/effects");

var _Datamanager = require("../../../Support/Datamanager");

var _Validations = require("../../../Support/Validations");

var types = _interopRequireWildcard(require("../../ActionTypes"));

var _Api = require("../../Api");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getTrackerEntrySaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(getTrackerAllEntrySaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(deleteTrackerEntrySaga);

// get tracker entry SAGA
function getTrackerEntrySaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function getTrackerEntrySaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ENTRY_START
          });

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _effects.call)(_Api.getTrackerEntryApi, action.payload);

        case 5:
          response = _context.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ENTRY_SUCCESS,
            data: result.data
          });

        case 10:
          _context.next = 14;
          break;

        case 12:
          _context.next = 14;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ENTRY_ERROR
          });

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          _context.next = 20;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ENTRY_ERROR
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 16]]);
} //get all entries sga


function getTrackerAllEntrySaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function getTrackerAllEntrySaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ALL_ENTRY_START
          });

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _effects.call)(_Api.getTrackerAllEntryApi, action.payload);

        case 5:
          response = _context2.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context2.next = 12;
            break;
          }

          _context2.next = 10;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ALL_ENTRY_SUCCESS,
            data: result.data,
            selectedDate: action.payload.selectedDate
          });

        case 10:
          _context2.next = 14;
          break;

        case 12:
          _context2.next = 14;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ALL_ENTRY_ERROR
          });

        case 14:
          _context2.next = 20;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 20;
          return (0, _effects.put)({
            type: types.API_GET_TRACKER_ALL_ENTRY_ERROR
          });

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 16]]);
} // delte tracker entry SAGA


function deleteTrackerEntrySaga(action) {
  var response, result, status;
  return regeneratorRuntime.wrap(function deleteTrackerEntrySaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.put)({
            type: types.API_DELETE_TRACKER_ENTRY_START
          });

        case 2:
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _effects.call)(_Api.getTrackerEntryApi, action.payload);

        case 5:
          response = _context3.sent;
          result = response.result, status = response.status;

          if (!(status === 1)) {
            _context3.next = 12;
            break;
          }

          _context3.next = 10;
          return (0, _effects.put)({
            type: types.API_DELETE_TRACKER_ENTRY_SUCCESS
          });

        case 10:
          _context3.next = 14;
          break;

        case 12:
          _context3.next = 14;
          return (0, _effects.put)({
            type: types.API_DELETE_TRACKER_ENTRY_ERROR
          });

        case 14:
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 20;
          return (0, _effects.put)({
            type: types.API_DELETE_TRACKER_ENTRY_ERROR
          });

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[2, 16]]);
}