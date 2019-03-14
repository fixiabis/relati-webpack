(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./RelatiProtocol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiProtocol_1 = require("./RelatiProtocol");
    var status = ["relati-launcher", "relati-repeater"];
    var type = {
        from: "relati-source",
        to: "relati-target"
    };
    exports.Placement = {
        name: "設置規則",
        detail: "確認該格子是否可以放置角色",
        allow: function (_a) {
            var game = _a.game, allPlayerReady = _a.game.allPlayerReady, role = _a.role, grid = _a.role.grid;
            var placeable = !grid.role;
            if (!placeable)
                return false;
            if (!allPlayerReady)
                return placeable;
            return RelatiProtocol_1.RelatiProtocol.allow({ role: role, status: status, type: type });
        }
    };
});
//# sourceMappingURL=Placement.js.map