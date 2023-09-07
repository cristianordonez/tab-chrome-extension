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
var SavedTabGroups_1 = __webpack_require__(761);
chrome.commands.onCommand.addListener(function (command) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(command === 'take_snapshot')) return [3, 2];
                    return [4, SavedTabGroups_1.savedTabGroupsInstance.takeSnapshot()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2];
            }
        });
    });
});


/***/ }),

/***/ 1094:
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
var createTab_1 = __webpack_require__(7895);
var CurrentTabGroups = (function () {
    function CurrentTabGroups() {
    }
    CurrentTabGroups.delete = function (groupId) {
        return __awaiter(this, void 0, Promise, function () {
            var tabGroups, tabIds, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, chrome.tabs.query({ groupId: groupId })];
                    case 1:
                        tabGroups = _a.sent();
                        tabIds = tabGroups.reduce(function (accumulator, currentValue) {
                            if (currentValue.id) {
                                accumulator.push(currentValue.id);
                            }
                            return accumulator;
                        }, []);
                        return [4, chrome.tabs.remove(tabIds)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    CurrentTabGroups.create = function (title, tabIds, color) {
        if (title === void 0) { title = ''; }
        return __awaiter(this, void 0, Promise, function () {
            var newGroupTabs, newTab, newGroupId, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        newGroupTabs = void 0;
                        if (!!tabIds) return [3, 2];
                        return [4, (0, createTab_1.createTab)()];
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
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [2];
                    case 7: return [2];
                }
            });
        });
    };
    CurrentTabGroups.removeTab = function (tabIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.remove(tabIds)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CurrentTabGroups.addTabs = function (groupId, tabIds) {
        return __awaiter(this, void 0, Promise, function () {
            var groupDetails, newGroupTabs, newTab, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4, CurrentTabGroups.getInfo(groupId)];
                    case 1:
                        groupDetails = _a.sent();
                        if (!(groupDetails !== null)) return [3, 6];
                        newGroupTabs = void 0;
                        if (!!tabIds) return [3, 3];
                        return [4, (0, createTab_1.createTab)()];
                    case 2:
                        newTab = _a.sent();
                        newGroupTabs = newTab.id;
                        return [3, 4];
                    case 3:
                        newGroupTabs = tabIds;
                        _a.label = 4;
                    case 4: return [4, chrome.tabs.group({ groupId: groupId, tabIds: newGroupTabs })];
                    case 5:
                        _a.sent();
                        return [3, 7];
                    case 6: throw new Error('Given group does not exist. Unable to add tab to it.');
                    case 7: return [3, 9];
                    case 8:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [2];
                    case 9: return [2];
                }
            });
        });
    };
    CurrentTabGroups.get = function () {
        return __awaiter(this, void 0, Promise, function () {
            var allTabs, groupIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.query({})];
                    case 1:
                        allTabs = _a.sent();
                        groupIds = allTabs.reduce(function (accumulator, currentValue) {
                            if (currentValue.groupId) {
                                var currentId = currentValue.groupId;
                                if (accumulator.includes(currentId) == false) {
                                    accumulator.push(currentId);
                                }
                            }
                            return accumulator;
                        }, []);
                        return [2, groupIds];
                }
            });
        });
    };
    CurrentTabGroups.getInfo = function (groupId) {
        return __awaiter(this, void 0, Promise, function () {
            var groupInfo, err_4;
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
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, chrome.tabGroups.get(groupId)];
                    case 2:
                        groupInfo = _a.sent();
                        return [2, groupInfo];
                    case 3:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [2, null];
                    case 4: return [2];
                }
            });
        });
    };
    return CurrentTabGroups;
}());
exports["default"] = CurrentTabGroups;


/***/ }),

/***/ 761:
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.savedTabGroupsInstance = exports["default"] = void 0;
var CurrentTabGroups_1 = __importDefault(__webpack_require__(1094));
var SavedTabGroups = (function () {
    function SavedTabGroups(maxGroups, maxTitleDuplicates) {
        this.maxGroups = maxGroups;
        this.maxTitleDuplicates = maxTitleDuplicates;
        SavedTabGroups.initialize();
    }
    SavedTabGroups.prototype.takeSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var groupIds, i, tabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, CurrentTabGroups_1.default.get()];
                    case 1:
                        groupIds = _a.sent();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < groupIds.length)) return [3, 6];
                        if (!(groupIds[i] !== -1)) return [3, 5];
                        return [4, chrome.tabs.query({ groupId: groupIds[i] })];
                    case 3:
                        tabs = _a.sent();
                        return [4, this.save(Number(groupIds[i]), tabs)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3, 2];
                    case 6: return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.save = function (groupId, tabs) {
        return __awaiter(this, void 0, Promise, function () {
            var groupDetails, storageInfo, formattedTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, CurrentTabGroups_1.default.getInfo(groupId)];
                    case 1:
                        groupDetails = _a.sent();
                        if (!groupDetails) return [3, 7];
                        return [4, SavedTabGroups.getInfo(groupId)];
                    case 2:
                        storageInfo = _a.sent();
                        formattedTabs = SavedTabGroups.formatTabList(tabs);
                        if (!storageInfo) return [3, 4];
                        return [4, this.update(storageInfo, formattedTabs, groupDetails.title || '', groupDetails.color)];
                    case 3:
                        _a.sent();
                        return [3, 6];
                    case 4: return [4, this.create(groupDetails, formattedTabs)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3, 8];
                    case 7: throw new Error('Cannot save group that does not currently exist.');
                    case 8: return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.addTabs = function (id, tabs) {
        return __awaiter(this, void 0, void 0, function () {
            var savedGroupInfo, formattedTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, SavedTabGroups.getInfo(id)];
                    case 1:
                        savedGroupInfo = _a.sent();
                        if (!(savedGroupInfo !== null)) return [3, 3];
                        formattedTabs = savedGroupInfo.tabs;
                        formattedTabs.concat(SavedTabGroups.formatTabList(tabs));
                        return [4, this.update(savedGroupInfo, formattedTabs, savedGroupInfo.title, savedGroupInfo.color)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3: throw new Error('No group with given id exists in local storage.');
                    case 4: return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.create = function (group, tabs) {
        return __awaiter(this, void 0, Promise, function () {
            var newTabGroup, titleLimitReached, maxLimitReached;
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
                        titleLimitReached = _a.sent();
                        if (!titleLimitReached) return [3, 3];
                        return [4, this.deleteOldestTitle(newTabGroup.title)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4, this.groupLimitReached()];
                    case 4:
                        maxLimitReached = _a.sent();
                        if (!maxLimitReached) return [3, 6];
                        return [4, this.deleteOldestGroup()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4, SavedTabGroups.updateStorageGroupKey(newTabGroup)];
                    case 7:
                        _a.sent();
                        return [4, SavedTabGroups.saveToSavedTitles(group.id, group.title || '')];
                    case 8:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.deleteOldestTitle = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            var oldest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.findOldestGroupByTitle(title)];
                    case 1:
                        oldest = _a.sent();
                        if (!oldest) return [3, 3];
                        return [4, SavedTabGroups.delete(oldest, title)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.deleteOldestGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oldestGroupId, oldestGroupInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.findOldestGroup()];
                    case 1:
                        oldestGroupId = _a.sent();
                        if (!oldestGroupId) return [3, 4];
                        return [4, SavedTabGroups.getInfo(oldestGroupId)];
                    case 2:
                        oldestGroupInfo = _a.sent();
                        if (!oldestGroupInfo) return [3, 4];
                        return [4, SavedTabGroups.delete(oldestGroupId, oldestGroupInfo.title)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.update = function (previousGroup, tabs, title, color) {
        return __awaiter(this, void 0, Promise, function () {
            var updatedGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updatedGroup = {
                            id: previousGroup.id,
                            color: color,
                            title: title || '',
                            tabs: tabs,
                            createdAt: previousGroup.createdAt,
                        };
                        if (!(title !== previousGroup.title)) return [3, 3];
                        return [4, SavedTabGroups.deleteFromSavedTitles(previousGroup.id, previousGroup.title)];
                    case 1:
                        _a.sent();
                        return [4, SavedTabGroups.saveToSavedTitles(previousGroup.id, title || '')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4, SavedTabGroups.updateStorageGroupKey(updatedGroup)];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.findOldestGroupByTitle = function (title) {
        return __awaiter(this, void 0, Promise, function () {
            var oldest, result, allTitles, saved, i, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldest = Infinity;
                        result = null;
                        return [4, SavedTabGroups.getKey('savedTitles')];
                    case 1:
                        allTitles = (_a.sent());
                        saved = allTitles["".concat(title)];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < saved.length)) return [3, 5];
                        return [4, SavedTabGroups.getInfo(saved[i])];
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
    SavedTabGroups.prototype.findOldestGroup = function () {
        return __awaiter(this, void 0, Promise, function () {
            var currentGroups, oldest, groupId, group;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, SavedTabGroups.get()];
                    case 1:
                        currentGroups = _a.sent();
                        oldest = Infinity;
                        groupId = null;
                        for (group in currentGroups) {
                            if (currentGroups[group].createdAt < oldest) {
                                groupId = currentGroups[group].id;
                                oldest = currentGroups[group].createdAt;
                            }
                        }
                        return [2, groupId];
                }
            });
        });
    };
    SavedTabGroups.prototype.groupLimitReached = function () {
        return __awaiter(this, void 0, Promise, function () {
            var currentGroups, numGroups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, SavedTabGroups.get()];
                    case 1:
                        currentGroups = _a.sent();
                        numGroups = Object.keys(currentGroups).length;
                        return [2, numGroups >= this.maxGroups];
                }
            });
        });
    };
    SavedTabGroups.prototype.titleLimitReached = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var title, savedTitles, cachedIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = group.title == undefined ? '' : group.title;
                        return [4, SavedTabGroups.getKey('savedTitles')];
                    case 1:
                        savedTitles = (_a.sent());
                        if (title in savedTitles) {
                            cachedIds = savedTitles[title];
                            if (cachedIds.length >= this.maxTitleDuplicates) {
                                return [2, true];
                            }
                        }
                        return [2, false];
                }
            });
        });
    };
    SavedTabGroups.delete = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, SavedTabGroups.deleteFromGroups(id)];
                    case 1:
                        _a.sent();
                        return [4, SavedTabGroups.deleteFromSavedTitles(id, title)];
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
    SavedTabGroups.open = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var groupInfo, tabIds, i, tab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, SavedTabGroups.getInfo(id)];
                    case 1:
                        groupInfo = _a.sent();
                        if (!(groupInfo !== null)) return [3, 7];
                        tabIds = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < groupInfo.tabs.length)) return [3, 5];
                        return [4, chrome.tabs.create({
                                active: false,
                                url: groupInfo.tabs[i].url,
                            })];
                    case 3:
                        tab = _a.sent();
                        if (tab.id) {
                            tabIds.push(tab.id);
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3, 2];
                    case 5: return [4, CurrentTabGroups_1.default.create(groupInfo.title, tabIds, groupInfo.color)];
                    case 6:
                        _a.sent();
                        return [3, 8];
                    case 7: throw new Error('Group with given id does not exist in saved tab groups.');
                    case 8: return [2];
                }
            });
        });
    };
    SavedTabGroups.get = function () {
        return __awaiter(this, void 0, Promise, function () {
            var saved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, SavedTabGroups.getKey('groups')];
                    case 1:
                        saved = (_a.sent());
                        return [2, saved];
                }
            });
        });
    };
    SavedTabGroups.getInfo = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var savedGroups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, SavedTabGroups.getKey('groups')];
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
    SavedTabGroups.removeTab = function (groupId, tabIds) {
        return __awaiter(this, void 0, void 0, function () {
            var groupInfo, updatedTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, SavedTabGroups.getInfo(groupId)];
                    case 1:
                        groupInfo = _a.sent();
                        if (!(groupInfo !== null)) return [3, 5];
                        updatedTabs = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.tabs.filter(function (tab) { return tabIds.includes(tab.id) === false; });
                        if (!(updatedTabs.length === 0)) return [3, 3];
                        return [4, SavedTabGroups.delete(groupInfo.id, groupInfo.title)];
                    case 2:
                        _a.sent();
                        return [3, 5];
                    case 3:
                        groupInfo.tabs = updatedTabs;
                        return [4, SavedTabGroups.updateStorageGroupKey(groupInfo)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    SavedTabGroups.initialize = function () {
        return __awaiter(this, void 0, Promise, function () {
            var groups, savedTitles;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        groups = SavedTabGroups.getKey('groups');
                        savedTitles = SavedTabGroups.getKey('savedTitles');
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
    SavedTabGroups.formatTabList = function (tabs) {
        var storageTabs = tabs.map(function (tab) {
            return {
                id: tab.id || Number(Date.now()),
                url: tab.url || '',
                title: tab.title || '',
            };
        });
        return storageTabs;
    };
    SavedTabGroups.getKey = function (key) {
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
    SavedTabGroups.updateStorageGroupKey = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var groups;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, SavedTabGroups.getKey('groups')];
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
    SavedTabGroups.saveToSavedTitles = function (id, title) {
        return __awaiter(this, void 0, Promise, function () {
            var savedTitles;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, SavedTabGroups.getKey('savedTitles')];
                    case 1:
                        savedTitles = (_b.sent());
                        if (title in savedTitles) {
                            savedTitles[title].push(id);
                        }
                        else {
                            savedTitles[title] = [id];
                        }
                        return [4, chrome.storage.local.set((_a = {}, _a['savedTitles'] = savedTitles, _a))];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    SavedTabGroups.deleteFromGroups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var groups;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, SavedTabGroups.getKey('groups')];
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
    SavedTabGroups.deleteFromSavedTitles = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var savedTitles, titlesToDeleteFrom, index;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, SavedTabGroups.getKey('savedTitles')];
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
    return SavedTabGroups;
}());
exports["default"] = SavedTabGroups;
var savedTabGroupsInstance = new SavedTabGroups(10, 1);
exports.savedTabGroupsInstance = savedTabGroupsInstance;


/***/ }),

/***/ 7895:
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
exports.createTab = void 0;
var createTab = function (active, url, pinned) {
    if (active === void 0) { active = false; }
    if (url === void 0) { url = undefined; }
    if (pinned === void 0) { pinned = false; }
    return new Promise(function (resolve) {
        chrome.tabs.create({ url: url, active: active, pinned: pinned }, function (tab) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
                    if (info.status === 'complete' && tabId === tab.id) {
                        chrome.tabs.onUpdated.removeListener(listener);
                        resolve(tab);
                    }
                });
                return [2];
            });
        }); });
    });
};
exports.createTab = createTab;


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