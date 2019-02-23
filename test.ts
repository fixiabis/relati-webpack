import { GridBoard } from "./js/base/GridBoard";
import { RelatiBoard } from "./js/RelatiBoard";
import { RelatiPlayer } from "./js/RelatiPlayer";
import { RelatiGame } from "./js/RelatiGame";
import { Od } from "./js/roles/Od";
import { Xa } from "./js/roles/Xa";
import { RelatiRoleType } from "./js/RelatiRole";

var board: RelatiBoard = new GridBoard(9, 9);
var gridCount = board.gridList.length;

var game = new RelatiGame(["O", "X"], board);
var player1 = game.players[0];
var player2 = game.players[1];

for (var i = 0; i < gridCount; i++) {
    player1.deck.push(Od);
    player2.deck.push(Xa);
}

game.start();

function placement(owner: RelatiPlayer, coordinate: string, type?: RelatiRoleType) {
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