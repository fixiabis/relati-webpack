(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../rules/RelatiToTarget"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiToTarget_1 = require("../rules/RelatiToTarget");
    exports.RelatiCommonMaintain = {
        name: "連結維持",
        do: function (_a) {
            var game = _a.game, launcher = _a.grid;
            if (!launcher.role || game.turn < game.playerCount)
                return;
            var owner = launcher.role.owner;
            for (var _i = 0, _b = game.board.gridList; _i < _b.length; _i++) {
                var grid = _b[_i];
                if (grid.role && grid.role.owner === owner) {
                    grid.role.lost("relati-repeater");
                }
            }
            maintain(launcher, owner);
        }
    };
    function maintain(grid, owner) {
        if (!grid.role || grid.role.is("relati-repeater"))
            return;
        grid.role.gain("relati-repeater");
        var traces = RelatiToTarget_1.RelatiCommonToTarget.trace({ grid: grid, owner: owner });
        for (var _i = 0, traces_1 = traces; _i < traces_1.length; _i++) {
            var trace = traces_1[_i];
            var targetGrid = trace.target;
            maintain(targetGrid, owner);
        }
    }
});
//# sourceMappingURL=RelatiMaintain.js.map