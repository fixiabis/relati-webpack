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
                player.shuffle();
                player.draw(5);
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
        return RelatiGame;
    }());
    exports.RelatiGame = RelatiGame;
    ;
    ;
});
//# sourceMappingURL=RelatiGame.js.map