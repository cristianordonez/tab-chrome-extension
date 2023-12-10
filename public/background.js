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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Rule_1 = __importDefault(__webpack_require__(4235));
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
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) { return __awaiter(void 0, void 0, void 0, function () {
    var storage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, chrome.storage.local.get(null)];
            case 1:
                storage = _a.sent();
                console.log('storage: ', storage);
                if (!tab.url) return [3, 3];
                return [4, Rule_1.default.findMatch(tabId)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2];
        }
    });
}); });


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var TabUtil_1 = __importDefault(__webpack_require__(4470));
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
                        return [4, TabUtil_1.default.get(groupId)];
                    case 1:
                        tabGroups = _a.sent();
                        tabIds = tabGroups.reduce(function (accumulator, currentValue) {
                            if (currentValue.id) {
                                accumulator.push(currentValue.id);
                            }
                            return accumulator;
                        }, []);
                        return [4, TabUtil_1.default.close(tabIds)];
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
                        return [4, TabUtil_1.default.create({}, true)];
                    case 1:
                        newTab = _a.sent();
                        newGroupTabs = newTab.id;
                        return [3, 3];
                    case 2:
                        newGroupTabs = tabIds;
                        _a.label = 3;
                    case 3: return [4, TabUtil_1.default.group(newGroupTabs)];
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
    CurrentTabGroups.addTabs = function (groupId, tabIds) {
        return __awaiter(this, void 0, Promise, function () {
            var groupDetails, newGroupTabs, newTab, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('groupId in addTabs: ', groupId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4, CurrentTabGroups.getInfo(groupId)];
                    case 2:
                        groupDetails = _a.sent();
                        if (!(groupDetails !== null)) return [3, 7];
                        newGroupTabs = void 0;
                        if (!!tabIds) return [3, 4];
                        return [4, TabUtil_1.default.create({}, true)];
                    case 3:
                        newTab = _a.sent();
                        newGroupTabs = newTab.id;
                        return [3, 5];
                    case 4:
                        newGroupTabs = tabIds;
                        _a.label = 5;
                    case 5: return [4, TabUtil_1.default.group(newGroupTabs, groupId)];
                    case 6:
                        _a.sent();
                        return [3, 8];
                    case 7: throw new Error('Given group does not exist. Unable to add tab to it.');
                    case 8: return [3, 10];
                    case 9:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [2];
                    case 10: return [2];
                }
            });
        });
    };
    CurrentTabGroups.get = function () {
        return __awaiter(this, void 0, Promise, function () {
            var allTabs, groupIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, TabUtil_1.default.getAll()];
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

/***/ 4325:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var FormattedTab = (function () {
    function FormattedTab(tab) {
        this.isChecked = false;
        this.title = '';
        this.id = -1;
        Object.assign(this, tab);
        this.isChecked = false;
    }
    return FormattedTab;
}());
exports["default"] = FormattedTab;


/***/ }),

/***/ 4235:
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
var Storage_1 = __importDefault(__webpack_require__(8537));
var TabUtil_1 = __importDefault(__webpack_require__(4470));
var UrlUtil_1 = __importDefault(__webpack_require__(9660));
var Rule = (function () {
    function Rule(title, action, subRules, groupName, groupColor) {
        if (subRules === void 0) { subRules = []; }
        this.title = title;
        this.action = action;
        this.groupName = groupName;
        this.groupColor = groupColor;
        this.subRules = subRules;
    }
    Rule.build = function (ruleData) {
        return new Rule(ruleData.title, ruleData.action, ruleData.subRules, ruleData.groupName, ruleData.groupColor);
    };
    Rule.findMatch = function (tabId) {
        return __awaiter(this, void 0, Promise, function () {
            var tab, url, rules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, TabUtil_1.default.build(tabId)];
                    case 1:
                        tab = _a.sent();
                        url = tab.getUrl();
                        return [4, this.ruleStorage.get()];
                    case 2:
                        rules = _a.sent();
                        Object.values(rules).forEach(function (ruleData) {
                            var rule = Rule.build(ruleData);
                            if (rule.isMatch(url)) {
                                rule.run(tab);
                            }
                        });
                        return [2];
                }
            });
        });
    };
    Rule.prototype.isMatch = function (url) {
        var urlUtil = new UrlUtil_1.default(url);
        var foundMatch = false;
        this.subRules.forEach(function (subRule) {
            if (Rule.handleSubRule(subRule, urlUtil)) {
                foundMatch = true;
            }
        });
        return foundMatch;
    };
    Rule.handleSubRule = function (subRule, urlUtil) {
        var currentUrl = this.extractUrl(subRule, urlUtil);
        console.log('urlUtil.getUrl(): ', urlUtil.getUrl());
        console.log('currentUrl: ', currentUrl);
        console.log('subRule: ', subRule);
        switch (subRule.match) {
            case 'contains':
                return currentUrl.includes(subRule.query);
            case 'starts with':
                return currentUrl.startsWith(subRule.query);
            case 'ends with':
                return currentUrl.endsWith(subRule.query);
            case 'is equal to':
                return currentUrl == subRule.query;
            default:
                return false;
        }
    };
    Rule.extractUrl = function (subRule, urlUtil) {
        switch (subRule.url) {
            case 'any':
                return urlUtil.getUrl();
            case 'hostname':
                return urlUtil.hostname();
            case 'path':
                return urlUtil.pathname();
            case 'query':
                return urlUtil.query();
            default:
                return urlUtil.getUrl();
        }
    };
    Rule.prototype.getData = function () {
        return {
            title: this.title,
            action: this.action,
            groupName: this.groupName,
            groupColor: this.groupColor,
            subRules: this.subRules,
        };
    };
    Rule.prototype.save = function () {
        var value = this.getData();
        Rule.ruleStorage.add(this.title, value);
    };
    Rule.prototype.delete = function () { };
    Rule.prototype.update = function () { };
    Rule.prototype.run = function (tab) {
        console.log('this.action: ', this.action);
        console.log('tab: ', tab);
        return;
    };
    Rule.prototype.addSubRule = function (subrule) {
        this.subRules.push(subrule);
    };
    Rule.ruleStorage = new Storage_1.default('rules');
    return Rule;
}());
exports["default"] = Rule;


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
var Storage_1 = __importDefault(__webpack_require__(8537));
var TabUtil_1 = __importDefault(__webpack_require__(4470));
var SavedTabGroups = (function () {
    function SavedTabGroups(maxGroups, maxTitleDuplicates) {
        this.maxGroups = maxGroups;
        this.maxTitleDuplicates = maxTitleDuplicates;
        this.titleStorage = new Storage_1.default('savedTitles');
        this.groupStorage = new Storage_1.default('groups');
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
                        return [4, TabUtil_1.default.get(groupIds[i])];
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
                        return [4, this.getInfo(groupId)];
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
            var savedGroupInfo, formattedTabs, newTabs, updatedTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getInfo(id)];
                    case 1:
                        savedGroupInfo = _a.sent();
                        if (!(savedGroupInfo !== null)) return [3, 3];
                        formattedTabs = savedGroupInfo.tabs;
                        newTabs = SavedTabGroups.formatTabList(tabs);
                        updatedTabs = formattedTabs.concat(newTabs);
                        return [4, this.update(savedGroupInfo, updatedTabs, savedGroupInfo.title, savedGroupInfo.color)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3: throw new Error('No group with given id exists in local storage.');
                    case 4: return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.delete = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.deleteFromGroups(id)];
                    case 1:
                        _a.sent();
                        return [4, this.deleteFromSavedTitles(id, title)];
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
    SavedTabGroups.prototype.open = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var groupInfo, tabIds, i, tab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getInfo(id)];
                    case 1:
                        groupInfo = _a.sent();
                        if (!(groupInfo !== null)) return [3, 7];
                        tabIds = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < groupInfo.tabs.length)) return [3, 5];
                        return [4, TabUtil_1.default.create({ url: groupInfo.tabs[i].url })];
                    case 3:
                        tab = _a.sent();
                        if (tab.id)
                            tabIds.push(tab.id);
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
    SavedTabGroups.prototype.get = function () {
        return __awaiter(this, void 0, Promise, function () {
            var saved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.groupStorage.get()];
                    case 1:
                        saved = (_a.sent());
                        return [2, saved];
                }
            });
        });
    };
    SavedTabGroups.prototype.getInfo = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var savedGroups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.groupStorage.get()];
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
    SavedTabGroups.prototype.removeTab = function (groupId, tabIds) {
        return __awaiter(this, void 0, void 0, function () {
            var groupInfo, updatedTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getInfo(groupId)];
                    case 1:
                        groupInfo = _a.sent();
                        if (!(groupInfo !== null)) return [3, 5];
                        updatedTabs = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.tabs.filter(function (tab) { return tabIds.includes(tab.id) === false; });
                        if (!(updatedTabs.length === 0)) return [3, 3];
                        return [4, this.delete(groupInfo.id, groupInfo.title)];
                    case 2:
                        _a.sent();
                        return [3, 5];
                    case 3:
                        groupInfo.tabs = updatedTabs;
                        return [4, this.updateStorageGroupKey(groupInfo)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    SavedTabGroups.formatTabList = function (tabs) {
        var storageTabs = tabs.map(function (tab) {
            return {
                id: Number(Date.now()),
                url: tab.url || '',
                title: tab.title || '',
            };
        });
        return storageTabs;
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
                    case 6: return [4, this.updateStorageGroupKey(newTabGroup)];
                    case 7:
                        _a.sent();
                        return [4, this.saveToSavedTitles(group.id, group.title || '')];
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
                        console.info("Max title limit reached for ".concat(title, " - Deleting oldest title "));
                        if (!oldest) return [3, 3];
                        return [4, this.delete(oldest, title)];
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
                        return [4, this.getInfo(oldestGroupId)];
                    case 2:
                        oldestGroupInfo = _a.sent();
                        if (!oldestGroupInfo) return [3, 4];
                        console.info("Max number of groups reached - Deleting oldest group ");
                        return [4, this.delete(oldestGroupId, oldestGroupInfo.title)];
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
                        return [4, this.deleteFromSavedTitles(previousGroup.id, previousGroup.title)];
                    case 1:
                        _a.sent();
                        return [4, this.saveToSavedTitles(previousGroup.id, title || '')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4, this.updateStorageGroupKey(updatedGroup)];
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
                        return [4, this.titleStorage.get()];
                    case 1:
                        allTitles = (_a.sent());
                        saved = allTitles["".concat(title)];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < saved.length)) return [3, 5];
                        return [4, this.getInfo(saved[i])];
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
                    case 0: return [4, this.get()];
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
                    case 0: return [4, this.get()];
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
                        return [4, this.titleStorage.get()];
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
    SavedTabGroups.prototype.updateStorageGroupKey = function (group) {
        return __awaiter(this, void 0, Promise, function () {
            var groups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.groupStorage.get()];
                    case 1:
                        groups = (_a.sent());
                        groups[group.id] = group;
                        return [4, this.groupStorage.set(groups)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.saveToSavedTitles = function (id, title) {
        return __awaiter(this, void 0, Promise, function () {
            var savedTitles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.titleStorage.get()];
                    case 1:
                        savedTitles = (_a.sent());
                        if (title in savedTitles) {
                            savedTitles[title].push(id);
                        }
                        else {
                            savedTitles[title] = [id];
                        }
                        return [4, this.titleStorage.set(savedTitles)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.deleteFromGroups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var groups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.groupStorage.get()];
                    case 1:
                        groups = (_a.sent());
                        delete groups[id];
                        return [4, this.groupStorage.set(groups)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SavedTabGroups.prototype.deleteFromSavedTitles = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var savedTitles, titlesToDeleteFrom, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.titleStorage.get()];
                    case 1:
                        savedTitles = (_a.sent());
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
                        return [4, this.titleStorage.set(savedTitles)];
                    case 2:
                        _a.sent();
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

/***/ 8537:
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
var Storage = (function () {
    function Storage(key) {
        this.key = key;
    }
    Storage.prototype.set = function (data) {
        return __awaiter(this, void 0, Promise, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, chrome.storage.local.set((_a = {}, _a[this.key] = data, _a))];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    Storage.prototype.get = function (itemKey) {
        return __awaiter(this, void 0, Promise, function () {
            var storage, result, defaultStorage;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, chrome.storage.local.get([this.key])];
                    case 1:
                        storage = _b.sent();
                        if (!("".concat(this.key) in storage)) return [3, 2];
                        result = storage["".concat(this.key)];
                        if (itemKey !== undefined) {
                            if ("".concat(itemKey) in result) {
                                return [2, result["".concat(itemKey)]];
                            }
                            else {
                                throw new Error("".concat(itemKey, " does not exist in ").concat(result));
                            }
                        }
                        return [2, result];
                    case 2:
                        defaultStorage = {};
                        return [4, chrome.storage.local.set((_a = {}, _a["".concat(this.key)] = defaultStorage, _a))];
                    case 3:
                        _b.sent();
                        return [2, defaultStorage];
                }
            });
        });
    };
    Storage.prototype.add = function (itemKey, itemValue) {
        return __awaiter(this, void 0, Promise, function () {
            var storageData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get()];
                    case 1:
                        storageData = _a.sent();
                        storageData[itemKey] = itemValue;
                        return [4, this.set(storageData)];
                    case 2:
                        _a.sent();
                        return [2, storageData];
                }
            });
        });
    };
    return Storage;
}());
exports["default"] = Storage;


/***/ }),

/***/ 4470:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var FormattedTab_1 = __importDefault(__webpack_require__(4325));
var TabUtil = (function () {
    function TabUtil(tab) {
        this.tab = tab;
    }
    TabUtil.build = function (tabId) {
        return __awaiter(this, void 0, Promise, function () {
            var tab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.get(tabId)];
                    case 1:
                        tab = _a.sent();
                        return [2, new TabUtil(tab)];
                }
            });
        });
    };
    TabUtil.prototype.getUrl = function () {
        return this.tab.url || '';
    };
    TabUtil.formatTabs = function (tabs) {
        return tabs.reduce(function (accumulator, currentValue) {
            var currentTab = new FormattedTab_1.default(currentValue);
            if (currentValue.id) {
                accumulator[currentValue.id] = currentTab;
            }
            return accumulator;
        }, {});
    };
    TabUtil.create = function (options, blocking) {
        if (blocking === void 0) { blocking = false; }
        return __awaiter(this, void 0, Promise, function () {
            var tab;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!blocking) return [3, 1];
                        return [2, new Promise(function (resolve) {
                                chrome.tabs.create(__assign(__assign({}, options), { active: false }), function (tab) { return __awaiter(_this, void 0, void 0, function () {
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
                            })];
                    case 1: return [4, chrome.tabs.create(__assign(__assign({}, options), { active: false }))];
                    case 2:
                        tab = _a.sent();
                        return [2, tab];
                }
            });
        });
    };
    TabUtil.getAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            var allTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.query({})];
                    case 1:
                        allTabs = _a.sent();
                        return [2, allTabs];
                }
            });
        });
    };
    TabUtil.get = function (groupId) {
        return __awaiter(this, void 0, Promise, function () {
            var tabInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.query({ groupId: groupId })];
                    case 1:
                        tabInfo = _a.sent();
                        return [2, tabInfo];
                }
            });
        });
    };
    TabUtil.close = function (tabIds) {
        return __awaiter(this, void 0, Promise, function () {
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
    TabUtil.group = function (tabIds, groupId) {
        return __awaiter(this, void 0, Promise, function () {
            var newGroupNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.group({ groupId: groupId, tabIds: tabIds })];
                    case 1:
                        newGroupNumber = _a.sent();
                        return [2, newGroupNumber];
                }
            });
        });
    };
    return TabUtil;
}());
exports["default"] = TabUtil;


/***/ }),

/***/ 9660:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var UrlUtil = (function () {
    function UrlUtil(url) {
        var _this = this;
        this.getFaviconURL = function () {
            var url = new URL(chrome.runtime.getURL('/_favicon/'));
            url.searchParams.set('pageUrl', _this.url);
            url.searchParams.set('size', '32');
            return url.toString();
        };
        this.url = url;
        this.util = new URL(url);
    }
    UrlUtil.prototype.hostname = function () {
        return this.util.hostname;
    };
    UrlUtil.prototype.pathname = function () {
        return this.util.pathname;
    };
    UrlUtil.prototype.query = function () {
        var splitUrl = this.url.split('?');
        return splitUrl[splitUrl.length - 1];
    };
    UrlUtil.prototype.getUrl = function () {
        return this.url;
    };
    return UrlUtil;
}());
exports["default"] = UrlUtil;


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