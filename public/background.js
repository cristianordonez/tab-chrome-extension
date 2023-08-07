/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 851:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tabGroupUtils_1 = __webpack_require__(2289);
chrome.tabGroups.onCreated.addListener(function (group) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, tabGroupUtils_1.saveNewTabGroup)(group)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
chrome.tabGroups.onUpdated.addListener(function (group) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, tabGroupUtils_1.updateOrCreateTabGroup)(group)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('tab: ', tab);
                    return [4, (0, tabGroupUtils_1.takeTabSnapshotAll)()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});


/***/ }),

/***/ 2289:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateTabGroup = exports.updateOrCreateTabGroup = exports.takeTabSnapshotForGroup = exports.takeTabSnapshotAll = exports.saveNewTabGroup = exports.getTabsByGroup = exports.getTabGroupInfo = exports.getTabGroupFromStorage = void 0;
var tabUtils_1 = __webpack_require__(6937);
var getTabGroupInfo = function (groupId, windowId) { return __awaiter(void 0, void 0, Promise, function () {
    var groupInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(groupId == -1)) return [3, 1];
                return [2, {
                        collapsed: false,
                        color: 'grey',
                        id: -1,
                        title: 'Ungrouped',
                        windowId: windowId || 0,
                    }];
            case 1: return [4, chrome.tabGroups.get(groupId)];
            case 2:
                groupInfo = _a.sent();
                return [2, groupInfo];
        }
    });
}); };
exports.getTabGroupInfo = getTabGroupInfo;
var saveNewTabGroup = function (group) { return __awaiter(void 0, void 0, Promise, function () {
    var newTabGroup;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                newTabGroup = {
                    id: group.id,
                    color: group.color,
                    title: group.title || '',
                    tabs: [],
                };
                return [4, chrome.storage.local.set((_a = {},
                        _a[group.title || ''] = newTabGroup,
                        _a))];
            case 1:
                _b.sent();
                return [2, newTabGroup];
        }
    });
}); };
exports.saveNewTabGroup = saveNewTabGroup;
var updateTabGroup = function (group, previousGroup) { return __awaiter(void 0, void 0, Promise, function () {
    var updatedGroup;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                updatedGroup = {
                    id: previousGroup.id,
                    color: group.color,
                    title: group.title || '',
                    tabs: previousGroup.tabs,
                };
                return [4, chrome.storage.local.set((_a = {}, _a[group.title || ''] = updatedGroup, _a))];
            case 1:
                _b.sent();
                return [2, updatedGroup];
        }
    });
}); };
exports.updateTabGroup = updateTabGroup;
var getTabGroupFromStorage = function (title) { return __awaiter(void 0, void 0, Promise, function () {
    var tabGroup, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, chrome.storage.local.get(["".concat(title)])];
            case 1:
                tabGroup = _b.sent();
                return [2, tabGroup["".concat(title)]];
            case 2:
                _a = _b.sent();
                return [2, null];
            case 3: return [2];
        }
    });
}); };
exports.getTabGroupFromStorage = getTabGroupFromStorage;
var getTabsByGroup = function () { return __awaiter(void 0, void 0, Promise, function () {
    var allTabs, tabGroups;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, (0, tabUtils_1.getAllTabs)()];
            case 1:
                allTabs = _a.sent();
                tabGroups = allTabs.reduce(function (previousObject, currentObject) {
                    var _a;
                    var groupId = currentObject['groupId'];
                    if (Object.prototype.hasOwnProperty.call(previousObject, groupId) == false) {
                        previousObject[groupId] = [];
                    }
                    var currentItems = previousObject[groupId];
                    return Object.assign(previousObject, (_a = {},
                        _a[currentObject.groupId] = __spreadArray(__spreadArray([], currentItems, true), [currentObject], false),
                        _a));
                }, {});
                return [2, tabGroups];
        }
    });
}); };
exports.getTabsByGroup = getTabsByGroup;
var takeTabSnapshotAll = function () { return __awaiter(void 0, void 0, Promise, function () {
    var currentTabs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getTabsByGroup()];
            case 1:
                currentTabs = _a.sent();
                console.log('currentTabs: ', currentTabs);
                return [2];
        }
    });
}); };
exports.takeTabSnapshotAll = takeTabSnapshotAll;
var takeTabSnapshotForGroup = function (groupId) { return __awaiter(void 0, void 0, Promise, function () {
    var currentTabs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getTabsByGroup()];
            case 1:
                currentTabs = _a.sent();
                console.log('currentTabs: ', currentTabs);
                return [2];
        }
    });
}); };
exports.takeTabSnapshotForGroup = takeTabSnapshotForGroup;
var updateOrCreateTabGroup = function (group) { return __awaiter(void 0, void 0, void 0, function () {
    var currentGroup;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getTabGroupFromStorage(group.title || '')];
            case 1:
                currentGroup = _a.sent();
                if (currentGroup) {
                    updateTabGroup(group, currentGroup);
                }
                else {
                    saveNewTabGroup(group);
                }
                return [2];
        }
    });
}); };
exports.updateOrCreateTabGroup = updateOrCreateTabGroup;


/***/ }),

/***/ 6937:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCurrentTab = exports.getAllTabs = void 0;
var getCurrentTab = function () { return __awaiter(void 0, void 0, void 0, function () {
    var current;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, chrome.tabs.getCurrent()];
            case 1:
                current = _a.sent();
                return [2, current];
        }
    });
}); };
exports.getCurrentTab = getCurrentTab;
var getAllTabs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var allTabs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, chrome.tabs.query({})];
            case 1:
                allTabs = _a.sent();
                return [2, allTabs];
        }
    });
}); };
exports.getAllTabs = getAllTabs;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(851);
/******/ 	
/******/ })()
;