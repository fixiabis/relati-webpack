import { GridBoard } from "./js/base/GridBoard";
import { RelatiBoard } from "./js/RelatiBoard";
import { RelatiPlayer } from "./js/RelatiPlayer";
import { RelatiGame } from "./js/RelatiGame";
import { Od } from "./js/roles/Od";
import { Xa } from "./js/roles/Xa";

var board: RelatiBoard = new GridBoard(9, 9);
var gridCount = board.gridList.length;

var player1 = new RelatiPlayer("O");
var player2 = new RelatiPlayer("X");
var game = new RelatiGame(board, [player1, player2]);

for (var i = 0; i < gridCount; i++) {
    player1.deck.push(Od);
    player2.deck.push(Xa);
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