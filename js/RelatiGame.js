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
        define(["require", "exports", "./RelatiRole", "./base/GridBoard", "./skills/RoleEffect", "./rules/Judgement", "./skills/RoleSummon"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiRole_1 = require("./RelatiRole");
    var GridBoard_1 = require("./base/GridBoard");
    var RoleEffect_1 = require("./skills/RoleEffect");
    var Judgement_1 = require("./rules/Judgement");
    var RoleSummon_1 = require("./skills/RoleSummon");
    var RelatiGame = /** @class */ (function () {
        function RelatiGame(size, players) {
            if (size === void 0) { size = 5; }
            if (players === void 0) { players = []; }
            this.players = players;
            this.turn = 0;
            this.steps = [];
            this.gridSelectable = false;
            this.cardSelectable = false;
            this.skillSelectable = false;
            this.skillExecutable = false;
            this.board = new GridBoard_1.GridBoard(size, size);
        }
        RelatiGame.prototype.start = function () {
            return __awaiter(this, void 0, void 0, function () {
                var game, _i, _a, player, player;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            game = this;
                            for (_i = 0, _a = game.players; _i < _a.length; _i++) {
                                player = _a[_i];
                                player.game = game;
                                player.shuffle();
                                player.draw(5);
                            }
                            _b.label = 1;
                        case 1:
                            if (!!game.result) return [3 /*break*/, 3];
                            player = game.nowPlayer;
                            player.draw();
                            if (!Judgement_1.Judgement.allow({ game: game })) {
                                game.turn++;
                                if (!Judgement_1.Judgement.allow({ game: game }))
                                    game.result = "Draw";
                                else
                                    game.result = game.nowPlayer.name + " Win";
                                return [3 /*break*/, 3];
                            }
                            game.gridSelectable = false;
                            game.cardSelectable = false;
                            game.skillSelectable = false;
                            game.skillExecutable = false;
                            return [4 /*yield*/, game.round(player)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 1];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        RelatiGame.prototype.round = function (player) {
            return __awaiter(this, void 0, void 0, function () {
                var game, allPlayerReady, role, grid, card, skill;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            game = this;
                            allPlayerReady = this.allPlayerReady;
                            _a.label = 1;
                        case 1: return [4 /*yield*/, new Promise(function (select) { return player.gridSelect = select; })];
                        case 2:
                            grid = _a.sent();
                            game.gridSelectable = grid != undefined;
                            if (game.gridSelectable)
                                RoleEffect_1.RoleEffect.do({ game: game, grid: grid });
                            _a.label = 3;
                        case 3:
                            if (!game.gridSelectable) return [3 /*break*/, 1];
                            _a.label = 4;
                        case 4:
                            if (!grid.role) return [3 /*break*/, 9];
                            _a.label = 5;
                        case 5: return [4 /*yield*/, new Promise(function (select) { return player.skillSelect = select; })];
                        case 6:
                            skill = _a.sent();
                            game.skillSelectable = skill != undefined;
                            if (game.skillSelectable)
                                RoleEffect_1.RoleEffect.do({ game: game, role: grid.role, skill: skill });
                            _a.label = 7;
                        case 7:
                            if (!game.skillSelectable) return [3 /*break*/, 5];
                            _a.label = 8;
                        case 8:
                            role = grid.role;
                            return [3 /*break*/, 13];
                        case 9: return [4 /*yield*/, new Promise(function (select) { return player.cardSelect = select; })];
                        case 10:
                            card = _a.sent();
                            if (allPlayerReady && card)
                                card = card.leader;
                            game.cardSelectable = card != undefined;
                            if (game.cardSelectable)
                                RoleEffect_1.RoleEffect.do({ game: game, card: card });
                            _a.label = 11;
                        case 11:
                            if (!game.cardSelectable) return [3 /*break*/, 9];
                            _a.label = 12;
                        case 12:
                            role = new RelatiRole_1.RelatiRole(grid, player, card);
                            skill = RoleSummon_1.RoleSummon;
                            _a.label = 13;
                        case 13:
                            game.execute(skill, role);
                            return [2 /*return*/];
                    }
                });
            });
        };
        RelatiGame.prototype.addPlayer = function (player) {
            this.players.push(player);
        };
        Object.defineProperty(RelatiGame.prototype, "playerCount", {
            get: function () { return this.players.length; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RelatiGame.prototype, "nowPlayer", {
            get: function () { return this.players[this.turn % this.playerCount]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RelatiGame.prototype, "allPlayerReady", {
            get: function () { return this.turn >= this.playerCount; },
            enumerable: true,
            configurable: true
        });
        RelatiGame.prototype.execute = function (skill, role) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.nowPlayer != role.owner)
                                return [2 /*return*/];
                            return [4 /*yield*/, skill.do({ game: this, role: role })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, RoleEffect_1.RoleEffect.do({ game: this, role: role })];
                        case 2:
                            _a.sent();
                            this.turn++;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return RelatiGame;
    }());
    exports.RelatiGame = RelatiGame;
});
//# sourceMappingURL=RelatiGame.js.map