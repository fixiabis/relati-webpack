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
        function RelatiRole(grid, owner, type) {
            if (type === void 0) { type = "normal"; }
            this.grid = grid;
            this.owner = owner;
            this.type = type;
            this.status = {};
            this.points = {};
            this.params = {};
            this.skills = [];
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