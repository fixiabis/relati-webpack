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
        define(["require", "exports", "../rules/RelatiProtocol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiProtocol_1 = require("../rules/RelatiProtocol");
    exports.RelatiRecovery = {
        type: "effect",
        name: "連結恢復",
        detail: "將所有連結狀態恢復",
        priority: 1,
        do: function (_a) {
            var game = _a.game, board = _a.game.board, role = _a.role, _b = _a.role, owner = _b.owner, grid = _b.grid;
            var grid;
            return __awaiter(this, void 0, void 0, function () {
                var _i, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (game.turn < game.playerCount ||
                                !role.is("relati-launcher"))
                                return [2 /*return*/];
                            for (_i = 0, _c = board.gridList; _i < _c.length; _i++) {
                                grid = _c[_i];
                                if (grid.role && grid.role.owner == owner) {
                                    grid.role.lost("relati-repeater");
                                }
                            }
                            return [4 /*yield*/, recovery(role)];
                        case 1:
                            _d.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
    };
    var status = ["relati-receiver"];
    var type = { from: "relati-target", to: "relati-source" };
    function recovery(role) {
        return __awaiter(this, void 0, void 0, function () {
            var receiversTrace;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (role.is("relati-repeater"))
                            return [2 /*return*/];
                        role.gain("relati-repeater");
                        receiversTrace = RelatiProtocol_1.RelatiProtocol.trace({ role: role, status: status, type: type });
                        return [4 /*yield*/, Promise.all(receiversTrace.map(function (_a) {
                                var target = _a.target;
                                return new Promise(function (resolve) {
                                    if (!target.role)
                                        return resolve();
                                    recovery(target.role).then(resolve);
                                });
                            }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
});
//# sourceMappingURL=RelatiRecovery.js.map