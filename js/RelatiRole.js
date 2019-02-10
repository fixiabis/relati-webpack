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
        /**
         * 建立角色
         * @param grid 棋盤格
         * @param owner 持有者
         * @param type 類型
         */
        function RelatiRole(grid, owner, type) {
            if (type === void 0) { type = "normal"; }
            this.grid = grid;
            this.owner = owner;
            this.type = type;
            /** 狀態 */
            this.status = {};
            /** 擁有效果 */
            this.effects = [];
            /** 擁有能力 */
            this.actions = [];
        }
        RelatiRole.prototype.is = function (status, type) {
            if (typeof status === "string")
                return this.status[status];
            if (type === "any") {
                for (var _i = 0, status_1 = status; _i < status_1.length; _i++) {
                    var statusName = status_1[_i];
                    if (this.status[statusName])
                        return true;
                }
                return false;
            }
            else {
                for (var _a = 0, status_2 = status; _a < status_2.length; _a++) {
                    var statusName = status_2[_a];
                    if (!this.status[statusName])
                        return false;
                }
                return true;
            }
        };
        /** 獲得狀態 */
        RelatiRole.prototype.gain = function () {
            var statusList = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                statusList[_i] = arguments[_i];
            }
            for (var _a = 0, statusList_1 = statusList; _a < statusList_1.length; _a++) {
                var status = statusList_1[_a];
                this.status[status] = true;
            }
        };
        /** 失去狀態 */
        RelatiRole.prototype.lost = function () {
            var statusList = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                statusList[_i] = arguments[_i];
            }
            for (var _a = 0, statusList_2 = statusList; _a < statusList_2.length; _a++) {
                var status = statusList_2[_a];
                this.status[status] = false;
            }
        };
        return RelatiRole;
    }());
    exports.RelatiRole = RelatiRole;
});
//# sourceMappingURL=RelatiRole.js.map