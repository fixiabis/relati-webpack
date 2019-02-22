(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./RelatiPath"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiPath_1 = require("./RelatiPath");
    exports.Placement = {
        name: "設置規則",
        detail: "確認該格子是否可以放置角色",
        allow: function (_a) {
            var role = _a.role, owner = _a.owner, game = _a.game;
            var grid = role.grid;
            var placeable = !grid.role;
            if (!placeable)
                return false;
            if (game.turn < game.playerCount)
                return placeable;
            var relatiable = RelatiPath_1.RelatiPath.allow({
                role: role, owner: owner,
                status: ["relati-launcher", "relati-repeater"],
                fromType: "relati-source",
                toType: "relati-target"
            });
            return relatiable;
        }
    };
});
//# sourceMappingURL=Placement.js.map