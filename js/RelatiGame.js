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
    var RelatiGame = /** @class */ (function () {
        function RelatiGame(players, board) {
            this.players = players;
            this.board = board;
            this.turn = 0;
            this.playerCount = players.length;
            for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
                var player = players_1[_i];
                player.shuffle();
                player.draw(5);
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