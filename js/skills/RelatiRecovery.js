(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../rules/RelatiPath"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiPath_1 = require("../rules/RelatiPath");
    exports.RelatiRecovery = {
        name: "連結恢復",
        type: "effect",
        detail: "將所有連結狀態恢復",
        do: function (_a) {
            var game = _a.game, role = _a.role;
            if (game.turn < game.playerCount)
                return;
            if (!role.is("relati-launcher"))
                return;
            var owner = role.owner, grid = role.grid;
            var board = grid.board;
            for (var _i = 0, _b = board.gridList; _i < _b.length; _i++) {
                var grid = _b[_i];
                if (grid.role && grid.role.owner == owner) {
                    grid.role.lost("relati-repeater");
                }
            }
            recovery(role);
        }
    };
    function recovery(role) {
        if (role.is("relati-repeater"))
            return;
        role.gain("relati-repeater");
        var receiversTrace = RelatiPath_1.RelatiPath.trace({
            role: role,
            owner: role.owner,
            status: ["relati-receiver"],
            fromType: "relati-target",
            toType: "relati-source"
        });
        for (var _i = 0, receiversTrace_1 = receiversTrace; _i < receiversTrace_1.length; _i++) {
            var target = receiversTrace_1[_i].target;
            if (target.role)
                recovery(target.role);
        }
    }
});
//# sourceMappingURL=RelatiRecovery.js.map