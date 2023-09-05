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
chrome.commands.onCommand.addListener(function (command) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(command === 'take_snapshot')) return [3, 2];
                    return [4, tabGroupUtil_1.tabGroupUtilInstance.takeSnapshot()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2];
            }
        });
    });
});


/***/ }),

/***/ 1738:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.tabGroupUtilInstance = exports["default"] = void 0;
var TabGroupUtil = (function () {
    function TabGroupUtil(maxGroups, maxTitleDuplicates) {
        this.maxGroups = maxGroups;
        this.maxTitleDuplicates = maxTitleDuplicates;
        TabGroupUtil.initialize();
    }
    TabGroupUtil.prototype.takeSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allTabs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, TabGroupUtil.getCurrentTabGroups()];
                    case 1:
                        allTabs = _a.sent();
                        Object.entries(allTabs).forEach(function (_a) {
                            var groupId = _a[0], groupInfo = _a[1];
                            return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(Number(groupId) !== -1)) return [3, 2];
                                            return [4, this.updateOrCreateGroup(Number(groupId), groupInfo.tabs)];
                                        case 1:
                                            _b.sent();
                                            _b.label = 2;
                                        case 2: return [2];
                                    }
                                });
                            });
                        });
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.updateOrCreateGroup = function (groupId, tabs) {
        return __awaiter(this, void 0, Promise, function () {
            var storageInfo, groupDetails, formattedTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, TabGroupUtil.getSavedGroupInfo(groupId)];
                    case 1:
                        storageInfo = _a.sent();
                        return [4, TabGroupUtil.getCurrentGroupInfo(groupId)];
                    case 2:
                        groupDetails = _a.sent();
                        formattedTabs = TabGroupUtil.formatTabList(tabs);
                        if (!(storageInfo !== null)) return [3, 4];
                        return [4, this.update(groupDetails, storageInfo, formattedTabs)];
                    case 3:
                        _a.sent();
                        return [3, 6];
                    case 4: return [4, this.saveNew(groupDetails, formattedTabs)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.deleteTabGroup = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, TabGroupUtil.deleteFromGroups(id)];
                    case 1:
                        _a.sent();
                        return [4, TabGroupUtil.deleteFromSavedTitles(id, title)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    TabGroupUtil.createTabGroup = function (title, tabIds, color) {
        if (title === void 0) { title = ''; }
        return __awaiter(this, void 0, Promise, function () {
            var newGroupTabs, newTab, newGroupId, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        newGroupTabs = void 0;
                        if (!!tabIds) return [3, 2];
                        return [4, TabGroupUtil.createTab()];
                    case 1:
                        newTab = _a.sent();
                        newGroupTabs = newTab.id;
                        return [3, 3];
                    case 2:
                        newGroupTabs = tabIds;
                        _a.label = 3;
                    case 3: return [4, chrome.tabs.group({ tabIds: newGroupTabs })];
                    case 4:
                        newGroupId = _a.sent();
                        return [4, chrome.tabGroups.update(newGroupId, { color: color, title: title })];
                    case 5:
                        _a.sent();
                        return [2, newGroupId];
                    case 6:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2];
                    case 7: return [2];
                }
            });
        });
    };
    TabGroupUtil.createTab = function (active, url, pinned) {
        if (active === void 0) { active = false; }
        if (url === void 0) { url = undefined; }
        if (pinned === void 0) { pinned = false; }
        return __awaiter(this, void 0, Promise, function () {
            var newTab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.create({ url: url, active: active, pinned: pinned })];
                    case 1:
                        newTab = _a.sent();
                        if (newTab !== undefined) {
                            return [2, newTab];
                        }
                        else {
                            throw Error("Unable to create new tab with url ".concat(url));
                        }
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.getCurrentTabGroups = function () {
        return __awaiter(this, void 0, Promise, function () {
            var allTabs, tabGroups;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.query({})];
                    case 1:
                        allTabs = _a.sent();
                        return [4, allTabs.reduce(function (previousObjectPromise, currentTab) { return __awaiter(_this, void 0, void 0, function () {
                                var previousObject, groupId, groupInfo, currentItems;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4, previousObjectPromise];
                                        case 1:
                                            previousObject = _b.sent();
                                            groupId = currentTab['groupId'];
                                            return [4, TabGroupUtil.getCurrentGroupInfo(groupId)];
                                        case 2:
                                            groupInfo = _b.sent();
                                            if (Object.prototype.hasOwnProperty.call(previousObject, groupId) ==
                                                false) {
                                                previousObject["".concat(groupId)] = {
                                                    id: groupId,
                                                    color: groupInfo.color,
                                                    title: groupInfo.title || '',
                                                    createdAt: Date.now(),
                                                    tabs: [],
                                                };
                                            }
                                            currentItems = previousObject["".concat(groupId)];
                                            currentItems.tabs.push(currentTab);
                                            return [2, Object.assign(previousObject, (_a = {},
                                                    _a["".concat(currentTab.groupId)] = __assign({}, currentItems),
                                                    _a))];
                                    }
                                });
                            }); }, Promise.resolve({}))];
                    case 2:
                        tabGroups = _a.sent();
                        return [2, tabGroups];
                }
            });
        });
    };
    TabGroupUtil.getSavedTabGroups = function () {
        return __awaiter(this, void 0, Promise, function () {
            var saved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, TabGroupUtil.getKey('groups')];
                    case 1:
                        saved = (_a.sent());
                        return [2, saved];
                }
            });
        });
    };
    TabGroupUtil.getCurrentGroupInfo = function (groupId) {
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
                                windowId: 0,
                            }];
                    case 1: return [4, chrome.tabGroups.get(groupId)];
                    case 2:
                        groupInfo = _a.sent();
                        return [2, groupInfo];
                }
            });
        });
    };
    TabGroupUtil.initialize = function () {
        return __awaiter(this, void 0, Promise, function () {
            var groups, savedTitles;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        groups = TabGroupUtil.getKey('groups');
                        savedTitles = TabGroupUtil.getKey('savedTitles');
                        if (!(groups == null)) return [3, 2];
                        return [4, chrome.storage.local.set((_a = {}, _a['groups'] = {}, _a))];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!(savedTitles == null)) return [3, 4];
                        return [4, chrome.storage.local.set((_b = {}, _b['savedTitles'] = {}, _b))];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.saveNew = function (group, tabs) {
        return __awaiter(this, void 0, Promise, function () {
            var newTabGroup, limitReached, oldest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newTabGroup = {
                            id: group.id,
                            color: group.color,
                            title: group.title || '',
                            tabs: tabs,
                            createdAt: Date.now(),
                        };
                        return [4, this.titleLimitReached(group)];
                    case 1:
                        limitReached = _a.sent();
                        if (!limitReached) return [3, 4];
                        return [4, this.findOldestTabGroup(group.title || '')];
                    case 2:
                        oldest = _a.sent();
                        if (!(oldest !== null)) return [3, 4];
                        return [4, this.deleteTabGroup(oldest, newTabGroup.title)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4, TabGroupUtil.updateStorageGroupKey(newTabGroup)];
                    case 5:
                        _a.sent();
                        return [4, TabGroupUtil.saveToSavedTitles(group)];
                    case 6:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.update = function (group, previousGroup, tabs) {
        return __awaiter(this, void 0, Promise, function () {
            var updatedGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updatedGroup = {
                            id: previousGroup.id,
                            color: group.color,
                            title: group.title || '',
                            tabs: tabs,
                            createdAt: previousGroup.createdAt,
                        };
                        if (!(group.title !== previousGroup.title)) return [3, 3];
                        return [4, TabGroupUtil.deleteFromSavedTitles(previousGroup.id, previousGroup.title)];
                    case 1:
                        _a.sent();
                        return [4, TabGroupUtil.saveToSavedTitles(group)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4, TabGroupUtil.updateStorageGroupKey(updatedGroup)];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.getSavedGroupInfo = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var savedGroups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, TabGroupUtil.getKey('groups')];
                    case 1:
                        savedGroups = (_a.sent());
                        if ("".concat(id) in savedGroups) {
                            return [2, savedGroups["".concat(id)]];
                        }
                        else {
                            return [2, null];
                        }
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.prototype.findOldestTabGroup = function (title) {
        return __awaiter(this, void 0, Promise, function () {
            var oldest, result, allTitles, saved, i, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldest = Infinity;
                        result = null;
                        return [4, TabGroupUtil.getKey('savedTitles')];
                    case 1:
                        allTitles = (_a.sent());
                        saved = allTitles["".concat(title)];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < saved.length)) return [3, 5];
                        return [4, TabGroupUtil.getSavedGroupInfo(saved[i])];
                    case 3:
                        current = _a.sent();
                        if (current !== null && current.createdAt < oldest) {
                            result = current.id;
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3, 2];
                    case 5: return [2, result];
                }
            });
        });
    };
    TabGroupUtil.prototype.titleLimitReached = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var title, savedTitles, cachedIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = group.title == undefined ? '' : group.title;
                        return [4, TabGroupUtil.getKey('savedTitles')];
                    case 1:
                        savedTitles = (_a.sent());
                        if (title in savedTitles) {
                            cachedIds = savedTitles[title];
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
                }
            });
        });
    };
    TabGroupUtil.formatTabList = function (tabs) {
        var storageTabs = tabs.map(function (tab) {
            return {
                tabId: tab.id || Number(Date.now()),
                url: tab.url || '',
                title: tab.title || '',
            };
        });
        return storageTabs;
    };
    TabGroupUtil.getKey = function (key) {
        return __awaiter(this, void 0, Promise, function () {
            var storage, defaultStorage;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, chrome.storage.local.get([key])];
                    case 1:
                        storage = _b.sent();
                        if (!("".concat(key) in storage)) return [3, 2];
                        return [2, storage["".concat(key)]];
                    case 2:
                        defaultStorage = {};
                        return [4, chrome.storage.local.set((_a = {}, _a["".concat(key)] = defaultStorage, _a))];
                    case 3:
                        _b.sent();
                        return [2, defaultStorage];
                }
            });
        });
    };
    TabGroupUtil.updateStorageGroupKey = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var groups;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, TabGroupUtil.getKey('groups')];
                    case 1:
                        groups = (_b.sent());
                        groups[group.id] = group;
                        return [4, chrome.storage.local.set((_a = {}, _a['groups'] = groups, _a))];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.saveToSavedTitles = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var title, savedTitles;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        title = group.title !== undefined ? group.title : '';
                        return [4, TabGroupUtil.getKey('savedTitles')];
                    case 1:
                        savedTitles = (_b.sent());
                        if (title in savedTitles) {
                            savedTitles[title].push(group.id);
                        }
                        else {
                            savedTitles[title] = [group.id];
                        }
                        return [4, chrome.storage.local.set((_a = {}, _a['savedTitles'] = savedTitles, _a))];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.deleteFromGroups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var groups;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, TabGroupUtil.getKey('groups')];
                    case 1:
                        groups = (_b.sent());
                        delete groups[id];
                        return [4, chrome.storage.local.set((_a = {}, _a['groups'] = groups, _a))];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    TabGroupUtil.deleteFromSavedTitles = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var savedTitles, titlesToDeleteFrom, index;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, TabGroupUtil.getKey('savedTitles')];
                    case 1:
                        savedTitles = (_b.sent());
                        titlesToDeleteFrom = savedTitles["".concat(title)];
                        if (titlesToDeleteFrom.includes(id)) {
                            if (titlesToDeleteFrom.length == 1) {
                                delete savedTitles["".concat(title)];
                            }
                            else {
                                index = titlesToDeleteFrom.indexOf(id);
                                titlesToDeleteFrom.splice(index, 1);
                                savedTitles["".concat(title)] = titlesToDeleteFrom;
                            }
                        }
                        return [4, chrome.storage.local.set((_a = {}, _a['savedTitles'] = savedTitles, _a))];
                    case 2:
                        _b.sent();
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
                        console.log('all data saved in local storage: ', all);
                        if (!(group !== undefined)) return [3, 3];
                        return [4, TabGroupUtil.getSavedGroupInfo(group.id)];
                    case 2:
                        info = _a.sent();
                        console.log('group information saved in local storage: ', info);
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    return TabGroupUtil;
}());
exports["default"] = TabGroupUtil;
var tabGroupUtilInstance = new TabGroupUtil(5, 1);
exports.tabGroupUtilInstance = tabGroupUtilInstance;


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