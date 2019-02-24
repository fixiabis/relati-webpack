"use strict";
exports.__esModule = true;
var GridBoard_1 = require("./js/base/GridBoard");
var Relati_1 = require("./js/Relati");
var Od_1 = require("./js/roles/Od");
var Xa_1 = require("./js/roles/Xa");
var board = new GridBoard_1.GridBoard(9, 9);
var gridCount = board.gridList.length;
var player1 = new Relati_1.RelatiPlayer("O");
var player2 = new Relati_1.RelatiPlayer("X");
var game = new Relati_1.RelatiGame(board, [player1, player2]);
for (var i = 0; i < gridCount; i++) {
    player1.deck.push(Od_1.Od);
    player2.deck.push(Xa_1.Xa);
}
game.start();
var gridSelect = function (coor) { return game.nowPlayer.selectGrid(board.query(coor)); };
var roleSelect = function () { return game.nowPlayer.selectCard(0); };
