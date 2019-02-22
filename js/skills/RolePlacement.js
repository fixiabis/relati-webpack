(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../rules/Placement"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Placement_1 = require("../rules/Placement");
    exports.RolePlacement = {
        type: "action",
        name: "角色放置",
        detail: "放置角色至棋盤格",
        do: function (_a) {
            var game = _a.game, role = _a.role;
            var owner = role.owner, grid = role.grid;
            if (Placement_1.Placement.allow({ role: role, owner: owner, game: game })) {
                grid.role = role;
                game.turn++;
            }
        }
    };
});
//# sourceMappingURL=RolePlacement.js.map