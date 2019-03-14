var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RoleEffect = {
        type: "action",
        name: "角色被動技能",
        detail: "觸發所有被動技能",
        do: function (_a) {
            var game = _a.game, gridList = _a.game.board.gridList, grid = _a.grid, role = _a.role, card = _a.card, skill = _a.skill;
            var role;
            return __awaiter(this, void 0, void 0, function () {
                var skillPriority, skillActived, _i, gridList_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            skillPriority = 0;
                            _b.label = 1;
                        case 1:
                            skillActived = false;
                            return [4 /*yield*/, Promise.all(gridList.map(function (grid) { return new Promise(function (resolve) {
                                    if (!grid.role)
                                        return resolve();
                                    Promise.all(grid.role.skills.map(function (skill) { return new Promise(function (skillExecuted) {
                                        if (skill.type != "effect" || skill.priority != skillPriority) {
                                            return skillExecuted();
                                        }
                                        skillActived = true;
                                        skill.do({ game: game, grid: grid, role: role, card: card, skill: skill }).then(skillExecuted);
                                        skillExecuted();
                                    }); })).then(resolve);
                                }); }))];
                        case 2:
                            _b.sent();
                            skillPriority++;
                            _b.label = 3;
                        case 3:
                            if (skillActived) return [3 /*break*/, 1];
                            _b.label = 4;
                        case 4:
                            for (_i = 0, gridList_1 = gridList; _i < gridList_1.length; _i++) {
                                role = gridList_1[_i].role;
                                if (!role)
                                    continue;
                                Object.assign(role.info.status, role.status);
                                Object.assign(role.info.points, role.points);
                                Object.assign(role.info.params, role.params);
                                Object.assign(role.info.skills, role.skills);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
    };
});
//# sourceMappingURL=RoleEffect.js.map