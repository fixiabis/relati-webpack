(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./skills/RolePlacement"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RolePlacement_1 = require("./skills/RolePlacement");
    var RelatiPlayer = /** @class */ (function () {
        function RelatiPlayer(badge, game) {
            this.badge = badge;
            this.game = game;
            this.deck = [];
            this.hand = [];
        }
        RelatiPlayer.prototype.draw = function (times) {
            if (times === void 0) { times = 1; }
            for (var i = 0; i < times; i++)
                this.hand.push(this.deck.pop());
        };
        RelatiPlayer.prototype.shuffle = function () {
            var _a;
            var cardCount = this.deck.length;
            for (var i = 0; i < cardCount; i++) {
                var j = (Math.random() * cardCount) | 0;
                _a = [this.deck[j], this.deck[i]], this.deck[i] = _a[0], this.deck[j] = _a[1];
            }
        };
        RelatiPlayer.prototype.selectRole = function (roleIndex) {
            return this.roleSelected = this.hand.splice(roleIndex, 1)[0];
        };
        RelatiPlayer.prototype.selectGrid = function (grid) {
            if (!this.roleSelected)
                return;
            var roleConstructor = this.roleSelected;
            var role = new roleConstructor(grid, this);
            RolePlacement_1.RolePlacement.do({ game: this.game, role: role });
        };
        return RelatiPlayer;
    }());
    exports.RelatiPlayer = RelatiPlayer;
});
//# sourceMappingURL=RelatiPlayer.js.map