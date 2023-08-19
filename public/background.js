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
var tabGroupUtil_1 = __webpack_require__(1738);
var tabGroupUtil = new tabGroupUtil_1.TabGroupUtil(5, 1);
tabGroupUtil.initialize();
chrome.tabGroups.onRemoved.addListener(function (group) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, tabGroupUtil.updateOrCreateTabGroup(group)];
                case 1:
                    _a.sent();
                    return [4, tabGroupUtil.debug(group)];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if ('status' in changeInfo && changeInfo['status'] == 'complete') {
                console.log('changeInfo: ', changeInfo);
            }
            return [2];
        });
    });
});


/***/ }),

/***/ 1738:
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
exports.TabGroupUtil = void 0;
var TabGroupUtil = (function () {
    function TabGroupUtil(maxGroups, maxTitleDuplicates) {
        this.maxGroups = maxGroups;
        this.maxTitleDuplicates = maxTitleDuplicates;
        this.groups = {};
        this.savedTitles = {};
    }
    TabGroupUtil.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedTitles;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, chrome.storage.local.get(['savedTitles'])];
                    case 1:
                        savedTitles = _b.sent();
                        console.log('savedTitles: ', savedTitles);
                        if (!('savedTitles' in savedTitles)) return [3, 2];
                        this.savedTitles = savedTitles.savedTitles;
                        return [3, 4];
                    case 2: return [4, chrome.storage.local.set((_a = {}, _a['savedTitles'] = {}, _a))];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    TabGroupUtil.getTabsByGroup = function () {
        return __awaiter(this, void 0, Promise, function () {
            var allTabs, tabGroups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.query({})];
                    case 1:
                        allTabs = _a.sent();
                        tabGroups = allTabs.reduce(function (previousObject, currentObject) {
                            var _a;
                            var groupId = currentObject['groupId'];
                            if (Object.prototype.hasOwnProperty.call(previousObject, groupId) ==
                                false) {
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
        });
    };
    TabGroupUtil.getTabGroupInfo = function (groupId, windowId) {
        return __awaiter(this, void 0, Promise, function () {
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
        });
    };
    TabGroupUtil.prototype.updateOrCreateTabGroup = function (group) {
        return __awaiter(this, void 0, void 0, function () {
            var groupInfo, limitReached, oldest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.storage.local.get(["".concat(group.id)])];
                    case 1:
                        groupInfo = _a.sent();
                        return [4, this.titleLimitReached(group)];
                    case 2:
                        limitReached = _a.sent();
                        if (!limitReached) return [3, 4];
                        return [4, this.findOldestTabGroup(group.title || '')];
                    case 3:
                        oldest = _a.sent();
                        console.log('oldest: ', oldest);
                        if (oldest !== null) {
                            this.deleteTabGroup(oldest);
                        }
                        _a.label = 4;
                    case 4:
                        if (Object.keys(groupInfo).length == 0) {
                            this.saveNewTabGroup(group);
                        }
                        else {
                            this.updateTabGroup(group, groupInfo["".concat(group.id)]);
                        }
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.debug = function (group) {
        return __awaiter(this, void 0, void 0, function () {
            var all, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.storage.local.get(null)];
                    case 1:
                        all = _a.sent();
                        console.log('all: ', all);
                        if (!(group !== undefined)) return [3, 3];
                        console.log('group: ', group);
                        return [4, this.getGroupFromStorage(group.id)];
                    case 2:
                        info = _a.sent();
                        console.log('info: ', info);
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.deleteTabGroup = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var titleKey, idList, index, e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4, chrome.storage.local.remove(["".concat(id)])];
                    case 1:
                        _b.sent();
                        for (titleKey in this.savedTitles) {
                            idList = this.savedTitles[titleKey];
                            if (idList.includes(id)) {
                                index = idList.indexOf(id);
                                idList.splice(index, 1);
                                this.savedTitles[titleKey] = idList;
                            }
                        }
                        return [4, chrome.storage.local.set((_a = {}, _a['savedTitles'] = this.savedTitles, _a))];
                    case 2:
                        _b.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.error(e_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.getGroupFromStorage = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var savedGroup;
            return __generator(this, function (_a) {
                savedGroup = chrome.storage.local.get(["".concat(id)]);
                if (Object.keys(savedGroup).length == 0) {
                    return [2, null];
                }
                else {
                    return [2, savedGroup];
                }
                return [2];
            });
        });
    };
    TabGroupUtil.prototype.findOldestTabGroup = function (title) {
        return __awaiter(this, void 0, Promise, function () {
            var oldest, result, saved, i, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldest = Infinity;
                        result = null;
                        saved = this.savedTitles[title];
                        console.log('saved: ', saved);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < saved.length)) return [3, 4];
                        return [4, this.getGroupFromStorage(saved[i])];
                    case 2:
                        current = _a.sent();
                        console.log('current: ', current);
                        if (current !== null && current.createdAt < oldest) {
                            result = current.id;
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2, result];
                }
            });
        });
    };
    TabGroupUtil.prototype.titleLimitReached = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var title, cachedIds;
            return __generator(this, function (_a) {
                title = group.title == undefined ? '' : group.title;
                if (title in this.savedTitles) {
                    cachedIds = this.savedTitles[title];
                    console.log('cachedIds in titleLimitReached: ', cachedIds);
                    if (cachedIds.length < this.maxTitleDuplicates) {
                        return [2, false];
                    }
                    else {
                        return [2, true];
                    }
                }
                else {
                    return [2, false];
                }
                return [2];
            });
        });
    };
    TabGroupUtil.prototype.saveNewTabGroup = function (group) {
        return __awaiter(this, void 0, Promise, function () {
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
                            createdAt: Date.now(),
                        };
                        return [4, chrome.storage.local.set((_a = {},
                                _a["".concat(group.id)] = newTabGroup,
                                _a))];
                    case 1:
                        _b.sent();
                        this.saveToSavedTitles(group);
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.saveToSavedTitles = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var title;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        title = group.title !== undefined ? group.title : '';
                        if (title in this.savedTitles) {
                            this.savedTitles[title].push(group.id);
                        }
                        else {
                            this.savedTitles[title] = [group.id];
                        }
                        console.log('currentTitles before setting: ', this.savedTitles);
                        return [4, chrome.storage.local.set((_a = {}, _a['savedTitles'] = this.savedTitles, _a))];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.updateTabGroup = function (group, previousGroup) {
        return __awaiter(this, void 0, Promise, function () {
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
                            createdAt: previousGroup.createdAt,
                        };
                        return [4, chrome.storage.local.set((_a = {}, _a["".concat(updatedGroup.id)] = updatedGroup, _a))];
                    case 1:
                        _b.sent();
                        this.saveToSavedTitles(group);
                        return [2];
                }
            });
        });
    };
    return TabGroupUtil;
}());
exports.TabGroupUtil = TabGroupUtil;


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