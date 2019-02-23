import { GridBoard } from "./js/base/GridBoard";
import { RelatiBoard } from "./js/RelatiBoard";
import { RelatiPlayer } from "./js/RelatiPlayer";
import { RelatiGame } from "./js/RelatiGame";
import { Od } from "./js/roles/Od";
import { Xa } from "./js/roles/Xa";
import { RelatiRoleConstructor, RelatiRoleType } from "./js/RelatiRole";
import { RolePlacement } from "./js/skills/RolePlacement";

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

function selectGrid(coordinate: string, owner: RelatiPlayer, type?: RelatiRoleType) {
    owner.draw();
    var grid = board.query(coordinate);
    owner.selectRole(0);
    owner.selectGrid(grid, type);
}

selectGrid("E5", player1, "leader");
selectGrid("D4", player2, "leader");
selectGrid("E3", player1);
selectGrid("E4", player2);

debugger;