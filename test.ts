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

var player1 = new RelatiPlayer("O");
var player2 = new RelatiPlayer("X");

for (var i = 0; i < gridCount; i++) {
    player1.deck.push(Od);
    player2.deck.push(Xa);
}

var game = new RelatiGame([player1, player2], board);

function selectGrid(coordinate: string, owner: RelatiPlayer, type?: RelatiRoleType) {
    owner.draw();
    var grid = board.query(coordinate);
    var roleConstructor: RelatiRoleConstructor = owner.selectRole(0);
    var role = new roleConstructor(grid, owner, type);
    RolePlacement.do({ game, role });
}

selectGrid("E5", player1, "leader");
selectGrid("D4", player2, "leader");
selectGrid("E3", player1);
selectGrid("E4", player2);

debugger;