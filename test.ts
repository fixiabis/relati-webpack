import { GridBoard } from "./js/base/GridBoard";
import { RelatiBoard } from "./js/RelatiBoard";
import { RelatiPlayer } from "./js/RelatiPlayer";
import { RelatiGame } from "./js/RelatiGame";
import { Od } from "./js/roles/Od";
import { Xa } from "./js/roles/Xa";
import { RelatiRoleConstructor } from "./js/RelatiRole";
import { RolePlacement } from "./js/skills/RolePlacement";

var board: RelatiBoard = new GridBoard(9, 9);
var gridCount = board.gridList.length;

var player1 = new RelatiPlayer("O");
var player2 = new RelatiPlayer("X");

for (var i = 0; i < gridCount; i++) {
    player1.deck.push(Od);
    player2.deck.push(Xa);
}

var game = new RelatiGame([player1, player2], board);

function selectGrid(coordinate: string, owner: RelatiPlayer) {
    owner.draw();
    var grid = board.query(coordinate);
    var roleConstructor: RelatiRoleConstructor = owner.hand.pop();
    var role = new roleConstructor(grid, owner, "leader");
    RolePlacement.do({ game, role });
}

selectGrid("E5", player1);
selectGrid("D4", player2);
selectGrid("E3", player1);
selectGrid("E4", player2);

debugger;