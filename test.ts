import { GridBoard } from "./js/base/GridBoard";
import { RelatiBoard } from "./js/RelatiBoard";
import { RelatiPlayer } from "./js/RelatiPlayer";
import { RelatiGame } from "./js/RelatiGame";
import { Od } from "./js/roles/Od";
import { Xa } from "./js/roles/Xa";
import { RelatiRoleConstructor, RelatiRole } from "./js/RelatiRole";
import { Placement } from "./js/rules/Placement";

var board: RelatiBoard = new GridBoard(9, 9);
var gridCount = board.gridList.length;

var player1 = new RelatiPlayer("O");
var player2 = new RelatiPlayer("X");

for (var i = 0; i < gridCount; i++) {
    player1.deck.push(Od);
    player2.deck.push(Xa);
}

var game = new RelatiGame([player1, player2], board);

player1.draw();
var grid = board.query("E5");
var roleConstructor: RelatiRoleConstructor = player1.hand.pop();
var role = new roleConstructor(grid, player1, "leader");
rolePlacement(role, player1);

player2.draw();
var grid = board.query("D4");
var roleConstructor: RelatiRoleConstructor = player2.hand.pop();
var role = new roleConstructor(grid, player2, "leader");
rolePlacement(role, player2);

player1.draw();
var grid = board.query("E3");
var roleConstructor: RelatiRoleConstructor = player1.hand.pop();
var role = new roleConstructor(grid, player1);
rolePlacement(role, player1);

player2.draw();
var grid = board.query("E4");
var roleConstructor: RelatiRoleConstructor = player2.hand.pop();
var role = new roleConstructor(grid, player2);
rolePlacement(role, player2);

function rolePlacement(role: RelatiRole, owner: RelatiPlayer) {
    if (Placement.allow({ role, owner, game })) {
        grid.role = role;
        game.turn++;
        roleSkillLaunch();
    }
}

function roleSkillLaunch() {
    for (var { role } of board.gridList) {
        if (role) {
            for (var skill of role.skills) {
                skill.do({ game, role });
            }
        }
    }
}

debugger;