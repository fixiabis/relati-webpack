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
    var RelatiPlayer = /** @class */ (function () {
        function RelatiPlayer(name) {
            this.name = name;
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
        RelatiPlayer.prototype.join = function (game) {
            this.game = game;
            game.addPlayer(this);
        };
        RelatiPlayer.prototype.selectCard = function (cardIndex) {
            var card = this.hand.splice(cardIndex, 1)[0];
            if (this.cardSelect) {
                this.cardSelect(card);
                delete this.cardSelect;
            }
        };
        RelatiPlayer.prototype.selectGrid = function (grid) {
            if (this.gridSelect) {
                this.gridSelect(grid);
                delete this.gridSelect;
            }
        };
        RelatiPlayer.prototype.selectSkill = function (skill) {
            if (this.skillSelect) {
                this.skillSelect(skill);
                delete this.skillSelect;
            }
        };
        return RelatiPlayer;
    }());
    exports.RelatiPlayer = RelatiPlayer;
});
//# sourceMappingURL=RelatiPlayer.js.map