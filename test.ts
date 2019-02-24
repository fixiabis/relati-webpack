import { GridBoard } from "./js/base/GridBoard";
import { RelatiBoard, RelatiPlayer, RelatiGame } from "./js/Relati";
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

var gridSelect = (coor: string) => game.nowPlayer.selectGrid(board.query(coor));
var roleSelect = () => game.nowPlayer.selectCard(0);