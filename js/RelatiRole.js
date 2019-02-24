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
            this.info = {
                type: "normal",
                name: "無名",
                detail: "沒有那種東西"
            };
            this.status = {};
            this.points = {};
            this.params = {};
            this.skills = [];
            if (typeof param == "string") {
                this.type = param;
            }
            else {
                var type = param.type, status = param.status, points = param.points, params = param.params, skills = param.skills;
                this.type = type;
                this.info = param;
                if (status)
                    this.gain.apply(this, status);
                if (points)
                    Object.assign(this.points, points);
                if (params)
                    Object.assign(this.params, params);
                if (skills)
                    Object.assign(this.skills, skills);
            }
        }
        RelatiRole.prototype.is = function (status, type) {
            if (typeof status === "string")
                return this.status[status];
            if (type === "any") {
                for (var _i = 0, status_1 = status; _i < status_1.length; _i++) {
                    var name = status_1[_i];
                    if (this.status[name])
                        return true;
                }
                return false;
            }
            else {
                for (var _a = 0, status_2 = status; _a < status_2.length; _a++) {
                    var name = status_2[_a];
                    if (!this.status[name])
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
            for (var _a = 0, status_3 = status; _a < status_3.length; _a++) {
                var name = status_3[_a];
                this.status[name] = true;
            }
        };
        RelatiRole.prototype.lost = function () {
            var status = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                status[_i] = arguments[_i];
            }
            for (var _a = 0, status_4 = status; _a < status_4.length; _a++) {
                var name = status_4[_a];
                this.status[name] = false;
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