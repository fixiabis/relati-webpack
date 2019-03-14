var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var RelatiRole = /** @class */ (function () {
        function RelatiRole(grid, owner, param) {
            if (param === void 0) { param = "normal"; }
            this.grid = grid;
            this.owner = owner;
            this.info = {};
            this.name = "";
            this.detail = "";
            this.status = {};
            this.points = {};
            this.params = {};
            this.skills = [];
            if (typeof param == "string")
                this.type = param;
            else {
                var type = param.type, gain = param.gain, lost = param.lost, status_1 = param.status, points = param.points, params = param.params, skills = param.skills;
                this.type = type;
                this.info = __assign({}, param);
                if (gain)
                    this.gain.apply(this, gain);
                if (lost)
                    this.lost.apply(this, lost);
                if (status_1)
                    this.status = __assign({}, status_1);
                if (points)
                    this.points = __assign({}, points);
                if (params)
                    this.params = __assign({}, params);
                if (skills)
                    this.skills = skills.slice();
            }
        }
        RelatiRole.prototype.is = function (status, type) {
            if (typeof status === "string")
                return this.status[status];
            if (type === "any") {
                for (var _i = 0, status_2 = status; _i < status_2.length; _i++) {
                    var name_1 = status_2[_i];
                    if (this.status[name_1])
                        return true;
                }
                return false;
            }
            else {
                for (var _a = 0, status_3 = status; _a < status_3.length; _a++) {
                    var name_2 = status_3[_a];
                    if (!this.status[name_2])
                        return false;
                }
                return true;
            }
        };
        RelatiRole.prototype.gain = function () {
            var status = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                status[_i] = arguments[_i];
            }
            for (var _a = 0, status_4 = status; _a < status_4.length; _a++) {
                var name_3 = status_4[_a];
                this.status[name_3] = true;
            }
        };
        RelatiRole.prototype.lost = function () {
            var status = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                status[_i] = arguments[_i];
            }
            for (var _a = 0, status_5 = status; _a < status_5.length; _a++) {
                var name_4 = status_5[_a];
                this.status[name_4] = false;
            }
        };
        return RelatiRole;
    }());
    exports.RelatiRole = RelatiRole;
    var RelatiRoleStatus;
    (function (RelatiRoleStatus) {
        RelatiRoleStatus.Relati = [
            "relati-launcher",
            "relati-repeater",
            "relati-receiver"
        ];
    })(RelatiRoleStatus = exports.RelatiRoleStatus || (exports.RelatiRoleStatus = {}));
});
//# sourceMappingURL=RelatiRole.js.map