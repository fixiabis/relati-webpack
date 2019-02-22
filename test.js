(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./js/base/GridBoard", "./js/RelatiPlayer", "./js/RelatiGame", "./js/roles/Od", "./js/roles/Xa", "./js/rules/Placement"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GridBoard_1 = require("./js/base/GridBoard");
    var RelatiPlayer_1 = require("./js/RelatiPlayer");
    var RelatiGame_1 = require("./js/RelatiGame");
    var Od_1 = require("./js/roles/Od");
    var Xa_1 = require("./js/roles/Xa");
    var Placement_1 = require("./js/rules/Placement");
    var board = new GridBoard_1.GridBoard(9, 9);
    var gridCount = board.gridList.length;
    var player1 = new RelatiPlayer_1.RelatiPlayer("O");
    var player2 = new RelatiPlayer_1.RelatiPlayer("X");
    for (var i = 0; i < gridCount; i++) {
        player1.deck.push(Od_1.Od);
        player2.deck.push(Xa_1.Xa);
    }
    var game = new RelatiGame_1.RelatiGame([player1, player2], board);
    player1.draw();
    var grid = board.query("E5");
    var roleConstructor = player1.hand.pop();
    var role = new roleConstructor(grid, player1, "leader");
    rolePlacement(role, player1);
    player2.draw();
    var grid = board.query("D4");
    var roleConstructor = player2.hand.pop();
    var role = new roleConstructor(grid, player2, "leader");
    rolePlacement(role, player2);
    player1.draw();
    var grid = board.query("E3");
    var roleConstructor = player1.hand.pop();
    var role = new roleConstructor(grid, player1);
    rolePlacement(role, player1);
    player2.draw();
    var grid = board.query("E4");
    var roleConstructor = player2.hand.pop();
    var role = new roleConstructor(grid, player2);
    rolePlacement(role, player2);
    function rolePlacement(role, owner) {
        if (Placement_1.Placement.allow({ role: role, owner: owner, game: game })) {
            grid.role = role;
            game.turn++;
            roleSkillLaunch();
        }
    }
    function roleSkillLaunch() {
        for (var _i = 0, _a = board.gridList; _i < _a.length; _i++) {
            var role = _a[_i].role;
            if (role) {
                for (var _b = 0, _c = role.skills; _b < _c.length; _b++) {
                    var skill = _c[_b];
                    skill["do"]({ game: game, role: role });
                }
            }
        }
    }
    debugger;
});
