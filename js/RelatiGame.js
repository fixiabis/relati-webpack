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
        define(["require", "exports", "./skills/RoleForcedSkill", "./skills/RoleStaticSkill", "./skills/RolePlacement"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoleForcedSkill_1 = require("./skills/RoleForcedSkill");
    var RoleStaticSkill_1 = require("./skills/RoleStaticSkill");
    var RolePlacement_1 = require("./skills/RolePlacement");
    var RelatiGame = /** @class */ (function () {
        function RelatiGame(board, players) {
            if (players === void 0) { players = []; }
            this.board = board;
            this.players = players;
            this.turn = 0;
            this.playerCount = 0;
            this.steps = [];
            this.playerCount = players.length;
        }
        RelatiGame.prototype.start = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, player, player, grid, skill, card, type, role;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            for (_i = 0, _a = this.players; _i < _a.length; _i++) {
                                player = _a[_i];
                                player.game = this;
                                player.shuffle();
                                player.draw(5);
                            }
                            console.log("遊戲開始");
                            debugger;
                            _b.label = 1;
                        case 1:
                            if (!!this.result) return [3 /*break*/, 6];
                            player = this.nowPlayer;
                            console.log("等待選取格子");
                            return [4 /*yield*/, new Promise(function (resolve) { return player.gridSelect = resolve; })];
                        case 2:
                            grid = _b.sent();
                            console.log("\u9078\u53D6\u683C\u5B50:" + grid.coordinate);
                            if (!(grid.role && grid.role.owner == player)) return [3 /*break*/, 4];
                            console.log("等待選取技能");
                            return [4 /*yield*/, new Promise(function (resolve) { return player.skillSelect = resolve; })];
                        case 3:
                            skill = _b.sent();
                            if (!skill)
                                return [3 /*break*/, 1];
                            console.log("\u9078\u53D6\u6280\u80FD:" + skill.name);
                            this.execute(skill, grid.role);
                            return [3 /*break*/, 1];
                        case 4:
                            console.log("等待選取卡牌");
                            return [4 /*yield*/, new Promise(function (resolve) { return player.cardSelect = resolve; })];
                        case 5:
                            card = _b.sent();
                            if (!card)
                                return [3 /*break*/, 1];
                            console.log("\u9078\u53D6\u5361\u724C:" + card.info.name);
                            if (this.turn < this.playerCount)
                                type = "leader";
                            role = new card(grid, player, type);
                            console.log("放置角色");
                            this.execute(RolePlacement_1.RolePlacement, role);
                            return [3 /*break*/, 1];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(RelatiGame.prototype, "nowPlayer", {
            get: function () {
                return this.players[this.turn % this.playerCount];
            },
            enumerable: true,
            configurable: true
        });
        RelatiGame.prototype.execute = function (skill, role) {
            return __awaiter(this, void 0, void 0, function () {
                var game, turn;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            game = this;
                            if (game.nowPlayer != role.owner)
                                return [2 /*return*/, console.warn("尚未輪到該玩家")];
                            turn = game.turn;
                            return [4 /*yield*/, skill.do({ game: game, role: role })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, RoleForcedSkill_1.RoleForcedSkill.do({ game: game, role: role })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, RoleStaticSkill_1.RoleStaticSkill.do({ game: game, role: role })];
                        case 3:
                            _a.sent();
                            game.steps.push({ turn: turn, role: role, skill: skill });
                            return [2 /*return*/];
                    }
                });
            });
        };
        return RelatiGame;
    }());
    exports.RelatiGame = RelatiGame;
    ;
    ;
    ;
});
//# sourceMappingURL=RelatiGame.js.map