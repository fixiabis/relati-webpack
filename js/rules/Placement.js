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
    var status = [
        "relati-launcher", "relati-repeater"
    ];
    var fromType = "relati-source";
    var toType = "relati-target";
    exports.Placement = {
        name: "設置規則",
        detail: "確認該格子是否可以放置角色",
        allow: function (_a) {
            var game = _a.game, role = _a.role;
            var grid = role.grid;
            var placeable = !grid.role;
            if (!placeable)
                return false;
            if (game.turn < game.playerCount)
                return placeable;
            var relatiable = RelatiPath_1.RelatiPath.allow({
                role: role, status: status, fromType: fromType, toType: toType
            });
            return relatiable;
        }
    };
});
//# sourceMappingURL=Placement.js.map