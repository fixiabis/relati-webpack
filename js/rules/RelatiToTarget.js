(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "././RelatiPath"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiPath_1 = require("././RelatiPath");
    /** 通用連結來源狀態 */
    exports.RelatiCommonTargetStatus = [
        "relati-receiver"
    ];
    /** 通用連結來源規則 */
    exports.RelatiCommonToTarget = {
        allow: function (state) {
            state.status = exports.RelatiCommonTargetStatus;
            return RelatiPath_1.RelatiCommonPath.allow(state);
        },
        trace: function (state) {
            state.status = exports.RelatiCommonTargetStatus;
            return RelatiPath_1.RelatiCommonPath.trace(state);
        }
    };
    /** 一般連結來源狀態 */
    exports.RelatiNormalTargetStatus = [
        "relati-normal-receiver"
    ];
    /** 一般連結來源規則 */
    exports.RelatiNormalToTarget = {
        allow: function (state) {
            state.status = exports.RelatiNormalTargetStatus;
            return RelatiPath_1.RelatiNormalPath.allow(state);
        },
        trace: function (state) {
            state.status = exports.RelatiNormalTargetStatus;
            return RelatiPath_1.RelatiNormalPath.trace(state);
        }
    };
    /** 遠程連結來源狀態 */
    exports.RelatiRemoteTargetStatus = [
        "relati-remote-receiver"
    ];
    /** 遠程連結來源規則 */
    exports.RelatiRemoteToTarget = {
        allow: function (state) {
            state.status = exports.RelatiRemoteTargetStatus;
            return RelatiPath_1.RelatiRemotePath.allow(state);
        },
        trace: function (state) {
            state.status = exports.RelatiRemoteTargetStatus;
            return RelatiPath_1.RelatiRemotePath.trace(state);
        }
    };
    /** 遠程一般連結來源狀態 */
    exports.RelatiRemoteNormalTargetStatus = [
        "relati-remote-normal-receiver"
    ];
    /** 遠程一般連結來源規則 */
    exports.RelatiRemoteNormalToTarget = {
        allow: function (state) {
            state.status = exports.RelatiRemoteNormalTargetStatus;
            return RelatiPath_1.RelatiRemoteNormalPath.allow(state);
        },
        trace: function (state) {
            state.status = exports.RelatiRemoteNormalTargetStatus;
            return RelatiPath_1.RelatiRemoteNormalPath.trace(state);
        }
    };
    /** 遠程穩定連結來源狀態 */
    exports.RelatiRemoteStableTargetStatus = [
        "relati-remote-stable-receiver"
    ];
    /** 遠程穩定連結來源規則 */
    exports.RelatiRemoteStableToTarget = {
        allow: function (state) {
            state.status = exports.RelatiRemoteStableTargetStatus;
            return RelatiPath_1.RelatiRemoteStablePath.allow(state);
        },
        trace: function (state) {
            state.status = exports.RelatiRemoteStableTargetStatus;
            return RelatiPath_1.RelatiRemoteStablePath.trace(state);
        }
    };
});
//# sourceMappingURL=RelatiToTarget.js.map