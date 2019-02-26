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
    exports.NormalOd = {
        type: "normal",
        name: "奧德",
        detail: "連結能力極廣的角色",
        status: ["relati-receiver"],
        points: { "summon-cost": 1 },
        params: {
            "relati-source": RelatiPath_1.RelatiPathParam.Common,
            "relati-target": RelatiPath_1.RelatiPathParam.Common
        },
        leader: {
            type: "leader",
            name: "奧德",
            detail: "連結能力極廣的角色",
            status: ["relati-launcher"],
            points: { "summon-assets": 40 },
            params: {
                "relati-target": RelatiPath_1.RelatiPathParam.Common
            }
        }
    };
});
//# sourceMappingURL=NormalOd.js.map