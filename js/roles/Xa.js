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
    exports.Xa = {
        type: "normal",
        name: "科薩",
        detail: "連結能力極廣的角色",
        status: ["relati-receiver"],
        params: {
            "relati-source": RelatiPath_1.RelatiPathParam.Common,
            "relati-target": RelatiPath_1.RelatiPathParam.Common
        },
        leader: {
            type: "leader",
            name: "科薩",
            detail: "連結能力極廣的角色",
            status: ["relati-launcher"],
            params: {
                "relati-target": RelatiPath_1.RelatiPathParam.Common
            }
        }
    };
});
//# sourceMappingURL=Xa.js.map