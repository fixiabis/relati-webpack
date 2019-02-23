(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./js/base/GridBoard", "./js/RelatiPlayer", "./js/RelatiGame", "./js/roles/Od", "./js/roles/Xa"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const GridBoard_1 = require("./js/base/GridBoard");
    const RelatiPlayer_1 = require("./js/RelatiPlayer");
    const RelatiGame_1 = require("./js/RelatiGame");
    const Od_1 = require("./js/roles/Od");
    const Xa_1 = require("./js/roles/Xa");
    var board = new GridBoard_1.GridBoard(9, 9);
    var gridCount = board.gridList.length;
    var player1 = new RelatiPlayer_1.RelatiPlayer("O");
    var player2 = new RelatiPlayer_1.RelatiPlayer("X");
    var game = new RelatiGame_1.RelatiGame(board, [player1, player2]);
    for (var i = 0; i < gridCount; i++) {
        player1.deck.push(Od_1.Od);
        player2.deck.push(Xa_1.Xa);
    }
    game.start();
    while (true) {
        var grid = board.query("E5");
        player1.selectGrid(grid);
        player1.selectCard(0);
        var grid = board.query("D4");
        player2.selectGrid(grid);
        player2.selectCard(0);
        var grid = board.query("E3");
        player1.selectGrid(grid);
        player1.selectCard(0);
        var grid = board.query("E4");
        player2.selectGrid(grid);
        player2.selectCard(0);
    }
});
