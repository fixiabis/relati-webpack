(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../rules/RelatiProtocol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiProtocol_1 = require("../rules/RelatiProtocol");
    exports.NormalOd = {
        type: "normal",
        name: "奧德",
        detail: "連結能力極廣的角色",
        gain: ["relati-receiver"],
        points: { "summon-cost": 1 },
        params: {
            "relati-source": RelatiProtocol_1.RelatiProtocolParam.Common,
            "relati-target": RelatiProtocol_1.RelatiProtocolParam.Common
        },
        leader: {
            type: "leader",
            name: "奧德",
            detail: "連結能力極廣的角色",
            gain: ["relati-launcher"],
            points: { "summon-assets": 40 },
            params: {
                "relati-target": RelatiProtocol_1.RelatiProtocolParam.Common
            }
        }
    };
});
//# sourceMappingURL=NormalOd.js.map