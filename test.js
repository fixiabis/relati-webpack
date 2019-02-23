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
        define(["require", "exports", "./js/base/GridBoard", "./js/RelatiPlayer", "./js/RelatiGame", "./js/roles/Od", "./js/roles/Xa"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridBoard_1 = require("./js/base/GridBoard");
    var RelatiPlayer_1 = require("./js/RelatiPlayer");
    var RelatiGame_1 = require("./js/RelatiGame");
    var Od_1 = require("./js/roles/Od");
    var Xa_1 = require("./js/roles/Xa");
    var board = new GridBoard_1.GridBoard(9, 9);
    var gridCount = board.gridList.length;
    var player1 = new RelatiPlayer_1.RelatiPlayer("O");
    var player2 = new RelatiPlayer_1.RelatiPlayer("X");
    var game = new RelatiGame_1.RelatiGame(board, [player1, player2]);
    for (var i = 0; i < gridCount; i++) {
        player1.deck.push(Od_1.Od);
        player2.deck.push(Xa_1.Xa);
    }
    game.start();
    function placement(owner, coordinate, type) {
        return __awaiter(this, void 0, void 0, function () {
            var grid, roleConstructor, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        owner.draw();
                        grid = board.query(coordinate);
                        owner.selectRole(0);
                        roleConstructor = owner.roleSelected;
                        role = new roleConstructor(grid, owner, type);
                        return [4 /*yield*/, game.execute(role.skills[0], role)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, placement(player1, "E5", "leader")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, placement(player2, "D4", "leader")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, placement(player1, "E3")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, placement(player2, "E4")];
                    case 4:
                        _a.sent();
                        debugger;
                        return [2 /*return*/];
                }
            });
        });
    })();
});
