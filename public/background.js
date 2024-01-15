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
                if (!(tab.url && changeInfo.status == 'loading')) return [3, 3];
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
                        return [4, this.getTabs(groupId)];
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
                    case 3: return [4, this.groupTabs(newGroupTabs)];
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
                    case 5: return [4, this.groupTabs(newGroupTabs, groupId)];
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
    CurrentTabGroups.groupTabs = function (tabIds, groupId) {
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
    CurrentTabGroups.getGroups = function () {
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
    CurrentTabGroups.getTabs = function (groupId) {
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
    CurrentTabGroups.query = function (title) {
        return __awaiter(this, void 0, Promise, function () {
            var groups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabGroups.query({ title: title })];
                    case 1:
                        groups = _a.sent();
                        return [2, groups];
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var uuid_1 = __webpack_require__(7429);
var Storage_1 = __importDefault(__webpack_require__(8537));
var TabUtil_1 = __importDefault(__webpack_require__(4470));
var UrlUtil_1 = __importDefault(__webpack_require__(9660));
var Rule = (function () {
    function Rule(title, action, subRules, id, active, groupName, groupColor) {
        if (subRules === void 0) { subRules = []; }
        if (id === void 0) { id = (0, uuid_1.v4)(); }
        if (active === void 0) { active = true; }
        this._title = title;
        this._action = action;
        this._subRules = subRules;
        this._id = id;
        this._active = active;
        this._groupName = groupName;
        this._groupColor = groupColor;
    }
    Object.defineProperty(Rule.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "subRules", {
        get: function () {
            return this._subRules;
        },
        set: function (subRules) {
            this._subRules = subRules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "groupName", {
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "groupColor", {
        get: function () {
            return this._groupColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (isActive) {
            this._active = isActive;
        },
        enumerable: false,
        configurable: true
    });
    Rule.build = function (ruleData) {
        return new Rule(ruleData.title, ruleData.action, ruleData.subRules, ruleData.id, ruleData.active, ruleData.groupName, ruleData.groupColor);
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
                        return [4, this.getAll()];
                    case 2:
                        rules = _a.sent();
                        rules.forEach(function (rule) {
                            if (rule.isMatch(url)) {
                                rule.run(tab);
                            }
                        });
                        return [2];
                }
            });
        });
    };
    Rule.prototype.formatActionText = function () {
        switch (this.action) {
            case 0:
                return "Add tab to group '".concat(this.groupName, "'");
            case 1:
                return 'Open tab in new window';
            case 2:
                return 'Pin tab';
            default:
                throw new Error("Action for rule of ".concat(this.action, " does not exist."));
        }
    };
    Rule.getAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            var allRules, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Rule.ruleStorage.get()];
                    case 1:
                        allRules = (_a.sent());
                        result = Object.values(allRules).map(function (ruleData) {
                            return Rule.build(ruleData);
                        });
                        return [2, result];
                }
            });
        });
    };
    Rule.prototype.isMatch = function (url) {
        if (this.active) {
            var urlUtil_1 = new UrlUtil_1.default(url);
            var foundMatch_1 = false;
            this.subRules.forEach(function (subRule) {
                if (Rule.handleSubRule(subRule, urlUtil_1)) {
                    foundMatch_1 = true;
                }
            });
            return foundMatch_1;
        }
        return false;
    };
    Rule.handleSubRule = function (subRule, urlUtil) {
        var currentUrl = this.extractUrl(subRule, urlUtil);
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
    Rule.formatSubRuleText = function (subRule) {
        var urlText = 'URL ';
        if (subRule.url != 'any')
            urlText += subRule.url;
        urlText += " ".concat(subRule.match, " '").concat(subRule.query, "'");
        return urlText;
    };
    Rule.prototype.getData = function () {
        return {
            title: this.title,
            action: this.action,
            groupName: this.groupName,
            id: this.id,
            groupColor: this.groupColor,
            subRules: this.subRules,
            active: this.active,
        };
    };
    Rule.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, rules, doesExist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.getData();
                        return [4, Rule.ruleStorage.get()];
                    case 1:
                        rules = _a.sent();
                        doesExist = false;
                        Object.values(rules).forEach(function (ruleData) {
                            if (data.id == ruleData.id) {
                                doesExist = true;
                            }
                            else if (data.title == ruleData.title) {
                                doesExist = true;
                            }
                        });
                        if (doesExist) {
                            throw new Error("Unable to save rule to storage: given id or title exists.");
                        }
                        else {
                            Rule.ruleStorage.add(this.id, data);
                        }
                        return [2];
                }
            });
        });
    };
    Rule.prototype.delete = function () {
        return __awaiter(this, void 0, Promise, function () {
            var savedRules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Rule.ruleStorage.get()];
                    case 1:
                        savedRules = _a.sent();
                        return [4, this.doesIDExist()];
                    case 2:
                        if (!_a.sent()) return [3, 4];
                        delete savedRules[this.id];
                        console.log('here in rule.delete();');
                        return [4, Rule.ruleStorage.set(savedRules)];
                    case 3:
                        _a.sent();
                        return [3, 5];
                    case 4: throw new Error("Given id does not exist in storage: ".concat(this.id));
                    case 5: return [2];
                }
            });
        });
    };
    Rule.prototype.update = function (updateInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var savedRules, currentData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.doesIDExist()];
                    case 1:
                        if (!_a.sent()) return [3, 4];
                        return [4, Rule.ruleStorage.get()];
                    case 2:
                        savedRules = _a.sent();
                        currentData = savedRules[this.id];
                        Object.assign(currentData, updateInfo);
                        Object.defineProperty(savedRules, this.id, { value: currentData });
                        return [4, Rule.ruleStorage.set(savedRules)];
                    case 3:
                        _a.sent();
                        return [3, 5];
                    case 4: throw new Error("Given id does not exist in storage: ".concat(this.id));
                    case 5: return [2];
                }
            });
        });
    };
    Rule.prototype.doesIDExist = function () {
        return __awaiter(this, void 0, Promise, function () {
            var savedRules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Rule.ruleStorage.get()];
                    case 1:
                        savedRules = _a.sent();
                        return [2, this.id in savedRules];
                }
            });
        });
    };
    Rule.prototype.run = function (tab) {
        switch (this.action) {
            case 0:
                tab.openInGroup(this.groupColor, this.groupName);
                break;
            case 1:
                tab.moveToNewWindow();
                break;
            case 2:
                tab.pin();
                break;
            default:
                return;
        }
        return;
    };
    Rule.prototype.deleteSubRule = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedRules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.subRuleExists(id)) return [3, 2];
                        console.log('id if does exist subrule: ', id);
                        updatedRules = this.subRules.filter(function (subRule) {
                            return subRule.id != id;
                        });
                        this.subRules = updatedRules;
                        return [4, this.update({ subRules: updatedRules })];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2: throw new Error("No subrule exists with id of ".concat(id, " in rule with ID of ").concat(this.id));
                    case 3: return [2];
                }
            });
        });
    };
    Rule.prototype.addSubRule = function (subRule) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ('id' in subRule == false) {
                            Object.assign(subRule, { id: (0, uuid_1.v4)() });
                        }
                        this.subRules = __spreadArray(__spreadArray([], this.subRules, true), [subRule], false);
                        return [4, this.update({ subRules: this.subRules })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Rule.prototype.subRuleExists = function (id) {
        var doesExist = false;
        this.subRules.forEach(function (subRule) {
            if (subRule.id == id) {
                doesExist = true;
            }
        });
        console.log('doesExist: ', doesExist);
        return doesExist;
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
                    case 0: return [4, CurrentTabGroups_1.default.getGroups()];
                    case 1:
                        groupIds = _a.sent();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < groupIds.length)) return [3, 6];
                        if (!(groupIds[i] !== -1)) return [3, 5];
                        return [4, CurrentTabGroups_1.default.getTabs(groupIds[i])];
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
var CurrentTabGroups_1 = __importDefault(__webpack_require__(1094));
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
    TabUtil.prototype.getTabId = function () {
        var result = this.tab.id;
        return result ? result : -1;
    };
    TabUtil.prototype.getUrl = function () {
        return this.tab.url || '';
    };
    TabUtil.prototype.openInGroup = function (groupColor, groupName) {
        return __awaiter(this, void 0, Promise, function () {
            var groups, tabId, currentGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!groupName) return [3, 6];
                        return [4, CurrentTabGroups_1.default.query(groupName)];
                    case 1:
                        groups = _a.sent();
                        tabId = this.getTabId();
                        if (!(groups.length > 0)) return [3, 3];
                        currentGroup = groups[0];
                        return [4, CurrentTabGroups_1.default.addTabs(currentGroup.id, tabId)];
                    case 2:
                        _a.sent();
                        return [3, 5];
                    case 3: return [4, CurrentTabGroups_1.default.create(groupName, [tabId], groupColor)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3, 7];
                    case 6: throw new Error('Rules with action of 0 must have a groupName defined.');
                    case 7: return [2];
                }
            });
        });
    };
    TabUtil.prototype.pin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabId = this.getTabId();
                        return [4, chrome.tabs.update(tabId, { pinned: true })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    TabUtil.prototype.moveToNewWindow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('HERE IN OPEN NEW WINDOW!!!!!!!!!!!!');
                        tabId = this.getTabId();
                        return [4, chrome.windows.create({ tabId: tabId })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
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
    TabUtil.create = function (options, blocking, active) {
        if (blocking === void 0) { blocking = false; }
        if (active === void 0) { active = false; }
        return __awaiter(this, void 0, Promise, function () {
            var tab;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!blocking) return [3, 1];
                        return [2, new Promise(function (resolve) {
                                chrome.tabs.create(__assign(__assign({}, options), { active: active }), function (tab) { return __awaiter(_this, void 0, void 0, function () {
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
                    case 1: return [4, chrome.tabs.create(__assign(__assign({}, options), { active: active }))];
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
    TabUtil.getCurrent = function () {
        return __awaiter(this, void 0, Promise, function () {
            var current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, chrome.tabs.getCurrent()];
                    case 1:
                        current = _a.sent();
                        return [2, current];
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


/***/ }),

/***/ 7429:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(3990));

var _v2 = _interopRequireDefault(__webpack_require__(8237));

var _v3 = _interopRequireDefault(__webpack_require__(5355));

var _v4 = _interopRequireDefault(__webpack_require__(3764));

var _nil = _interopRequireDefault(__webpack_require__(6314));

var _version = _interopRequireDefault(__webpack_require__(8464));

var _validate = _interopRequireDefault(__webpack_require__(6435));

var _stringify = _interopRequireDefault(__webpack_require__(4008));

var _parse = _interopRequireDefault(__webpack_require__(8222));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 4163:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 4790:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),

/***/ 6314:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 8222:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(6435));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 58:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 3319:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 3757:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 4008:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(6435));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 3990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(3319));

var _stringify = __webpack_require__(4008);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 8237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(296));

var _md = _interopRequireDefault(__webpack_require__(4163));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(4008);

var _parse = _interopRequireDefault(__webpack_require__(8222));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 5355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(4790));

var _rng = _interopRequireDefault(__webpack_require__(3319));

var _stringify = __webpack_require__(4008);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 3764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(296));

var _sha = _interopRequireDefault(__webpack_require__(3757));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 6435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(58));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 8464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(6435));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

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