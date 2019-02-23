(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./RelatiPlayer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiPlayer_1 = require("./RelatiPlayer");
    var RelatiGame = /** @class */ (function () {
        function RelatiGame(playerBadges, board) {
            this.playerBadges = playerBadges;
            this.board = board;
            this.turn = 0;
            this.players = [];
            this.steps = [];
            this.playerCount = playerBadges.length;
            for (var _i = 0, playerBadges_1 = playerBadges; _i < playerBadges_1.length; _i++) {
                var playerBadge = playerBadges_1[_i];
                var player = new RelatiPlayer_1.RelatiPlayer(playerBadge, this);
                this.players.push(player);
            }
        }
        Object.defineProperty(RelatiGame.prototype, "nowPlayer", {
            get: function () {
                return this.players[this.turn % this.playerCount];
            },
            enumerable: true,
            configurable: true
        });
        RelatiGame.prototype.start = function () {
            for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
                var player = _a[_i];
                player.shuffle();
                player.draw(5);
            }
        };
        return RelatiGame;
    }());
    exports.RelatiGame = RelatiGame;
    ;
    ;
    ;
});
//# sourceMappingURL=RelatiGame.js.map