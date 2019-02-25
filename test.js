(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./js/base/GridBoard", "./js/Relati", "./js/roles/NormalOd", "./js/roles/NormalXa"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridBoard_1 = require("./js/base/GridBoard");
    var Relati_1 = require("./js/Relati");
    var NormalOd_1 = require("./js/roles/NormalOd");
    var NormalXa_1 = require("./js/roles/NormalXa");
    var board = new GridBoard_1.GridBoard(9, 9);
    var gridCount = board.gridList.length;
    var player1 = new Relati_1.RelatiPlayer("O");
    var player2 = new Relati_1.RelatiPlayer("X");
    var game = new Relati_1.RelatiGame(board, [player1, player2]);
    for (var i = 0; i < gridCount; i++) {
        player1.deck.push(NormalOd_1.NormalOd);
        player2.deck.push(NormalXa_1.NormalXa);
    }
    game.start();
    var gridSelect = function (coor) { return game.nowPlayer.selectGrid(board.query(coor)); };
    var roleSelect = function () { return game.nowPlayer.selectCard(0); };
});
