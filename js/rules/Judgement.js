(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../RelatiRole", "./RelatiProtocol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiRole_1 = require("../RelatiRole");
    var RelatiProtocol_1 = require("./RelatiProtocol");
    var status = [
        "relati-launcher", "relati-repeater"
    ];
    var type = {
        from: "relati-source",
        to: "relati-target"
    };
    ;
    exports.Judgement = {
        name: "勝負判定",
        detail: "若無法繼續放置角色時判負",
        allow: function (_a) {
            var _b = _a.game, board = _b.board, allPlayerReady = _b.allPlayerReady, owner = _b.nowPlayer;
            if (!allPlayerReady)
                return true;
            for (var _i = 0, _c = board.gridList; _i < _c.length; _i++) {
                var grid = _c[_i];
                if (grid.role)
                    continue;
                var role = new RelatiRole_1.RelatiRole(grid, owner);
                role.gain("relati-receiver");
                role.params["relati-source"] = RelatiProtocol_1.RelatiProtocolParam.Normal;
                var relatiable = RelatiProtocol_1.RelatiProtocol.allow({ role: role, status: status, type: type });
                if (relatiable)
                    return true;
            }
            return false;
        }
    };
});
//# sourceMappingURL=Judgement.js.map