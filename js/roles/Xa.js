var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../RelatiRole", "../rules/RelatiPath", "../skills/RelatiRecovery"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiRole_1 = require("../RelatiRole");
    var RelatiPath_1 = require("../rules/RelatiPath");
    var RelatiRecovery_1 = require("../skills/RelatiRecovery");
    var Xa = /** @class */ (function (_super) {
        __extends(Xa, _super);
        function Xa(grid, owner, type) {
            if (type === void 0) { type = "normal"; }
            var _this = _super.call(this, grid, owner, type) || this;
            if (type == "leader") {
                _this.gain("relati-launcher");
                _this.skills.push(RelatiRecovery_1.RelatiRecovery);
            }
            else {
                _this.gain("relati-receiver");
                _this.params["relati-source"] = RelatiPath_1.RelatiPathParam.Common;
            }
            _this.params["relati-target"] = RelatiPath_1.RelatiPathParam.Common;
            return _this;
        }
        Xa.common = {
            name: "科薩",
            detail: "連結能力極廣的角色"
        };
        return Xa;
    }(RelatiRole_1.RelatiRole));
    exports.Xa = Xa;
});
//# sourceMappingURL=Xa.js.map