(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RoleStaticSkill = {
        type: "forced",
        name: "角色靜態技能啟動",
        detail: "任何效果發動時將會啟動",
        do: function (_a) {
            var game = _a.game;
            var board = game.board;
            for (var _i = 0, _b = board.gridList; _i < _b.length; _i++) {
                var role = _b[_i].role;
                if (role)
                    for (var _c = 0, _d = role.skills; _c < _d.length; _c++) {
                        var skill = _d[_c];
                        if (skill.type == "static") {
                            skill.do({ role: role, game: game });
                        }
                    }
            }
        }
    };
});
//# sourceMappingURL=RoleStaticSkill.js.map