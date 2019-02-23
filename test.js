(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./js/base/GridBoard", "./js/RelatiGame", "./js/roles/Od", "./js/roles/Xa"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GridBoard_1 = require("./js/base/GridBoard");
    var RelatiGame_1 = require("./js/RelatiGame");
    var Od_1 = require("./js/roles/Od");
    var Xa_1 = require("./js/roles/Xa");
    var board = new GridBoard_1.GridBoard(9, 9);
    var gridCount = board.gridList.length;
    var game = new RelatiGame_1.RelatiGame(["O", "X"], board);
    var player1 = game.players[0];
    var player2 = game.players[1];
    for (var i = 0; i < gridCount; i++) {
        player1.deck.push(Od_1.Od);
        player2.deck.push(Xa_1.Xa);
    }
    game.start();
    function placement(owner, coordinate, type) {
        owner.draw();
        var grid = board.query(coordinate);
        owner.selectRole(0);
        owner.selectGrid(grid, type);
    }
    placement(player1, "E5", "leader");
    placement(player2, "D4", "leader");
    placement(player1, "E3");
    placement(player2, "E4");
    debugger;
});
