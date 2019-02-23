(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./RelatiPlayer", "./skills/RolePlacement", "./skills/RoleForcedSkill", "./skills/RoleStaticSkill"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiPlayer_1 = require("./RelatiPlayer");
    var RolePlacement_1 = require("./skills/RolePlacement");
    var RoleForcedSkill_1 = require("./skills/RoleForcedSkill");
    var RoleStaticSkill_1 = require("./skills/RoleStaticSkill");
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
        RelatiGame.prototype.selectGrid = function (grid, roleType, owner) {
            if (roleType === void 0) { roleType = "normal"; }
            var game = this;
            if (owner != game.nowPlayer)
                return;
            if (!owner.roleSelected)
                return;
            var roleConstructor = owner.roleSelected;
            if (game.turn < game.playerCount)
                roleType = "leader";
            var role = new roleConstructor(grid, owner, roleType);
            RolePlacement_1.RolePlacement.do({ game: game, role: role });
            if (!grid.role) {
                delete owner.roleSelected;
                owner.hand.push(roleConstructor);
            }
            else {
                RoleForcedSkill_1.RoleForcedSkill.do({ game: game });
                RoleStaticSkill_1.RoleStaticSkill.do({ game: game });
            }
        };
        return RelatiGame;
    }());
    exports.RelatiGame = RelatiGame;
    ;
    ;
});
//# sourceMappingURL=RelatiGame.js.map