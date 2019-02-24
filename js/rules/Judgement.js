(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../RelatiRole", "./RelatiPath"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiRole_1 = require("../RelatiRole");
    var RelatiPath_1 = require("./RelatiPath");
    var status = [
        "relati-launcher", "relati-repeater"
    ];
    var fromType = "relati-source";
    var toType = "relati-target";
    exports.Judgement = {
        name: "勝負判定",
        detail: "若無法繼續放置角色時判負",
        allow: function (_a) {
            var game = _a.game;
            if (game.turn < game.playerCount)
                return true;
            var board = game.board;
            var owner = game.nowPlayer;
            for (var _i = 0, _b = board.gridList; _i < _b.length; _i++) {
                var grid = _b[_i];
                if (grid.role)
                    continue;
                var role = new RelatiRole_1.RelatiRole(grid, owner);
                role.gain("relati-receiver");
                role.params["relati-source"] = RelatiPath_1.RelatiPathParam.Normal;
                var relatiable = RelatiPath_1.RelatiPath.allow({
                    role: role, status: status, fromType: fromType, toType: toType
                });
                if (relatiable)
                    return true;
            }
            return false;
        }
    };
});
//# sourceMappingURL=Judgement.js.map