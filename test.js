(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./js/base/GridBoard", "./js/RelatiPlayer", "./js/RelatiGame", "./js/roles/Od", "./js/roles/Xa", "./js/skills/RolePlacement"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GridBoard_1 = require("./js/base/GridBoard");
    var RelatiPlayer_1 = require("./js/RelatiPlayer");
    var RelatiGame_1 = require("./js/RelatiGame");
    var Od_1 = require("./js/roles/Od");
    var Xa_1 = require("./js/roles/Xa");
    var RolePlacement_1 = require("./js/skills/RolePlacement");
    var board = new GridBoard_1.GridBoard(9, 9);
    var gridCount = board.gridList.length;
    var player1 = new RelatiPlayer_1.RelatiPlayer("O");
    var player2 = new RelatiPlayer_1.RelatiPlayer("X");
    for (var i = 0; i < gridCount; i++) {
        player1.deck.push(Od_1.Od);
        player2.deck.push(Xa_1.Xa);
    }
    var game = new RelatiGame_1.RelatiGame([player1, player2], board);
    function selectGrid(coordinate, owner) {
        owner.draw();
        var grid = board.query(coordinate);
        var roleConstructor = owner.hand.pop();
        var role = new roleConstructor(grid, owner, "leader");
        RolePlacement_1.RolePlacement["do"]({ game: game, role: role });
    }
    selectGrid("E5", player1);
    selectGrid("D4", player2);
    selectGrid("E3", player1);
    selectGrid("E4", player2);
    debugger;
});
