import { RelatiRoleEffect } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiGame } from "../RelatiGame";
import { RelatiPlayer } from "../RelatiPlayer";
import { RelatiCommonToTarget } from "../rules/RelatiToTarget";

export type RelatiMaintainState = {
    game: RelatiGame;
    grid: RelatiGrid;
};

export var RelatiCommonMaintain: RelatiRoleEffect<RelatiMaintainState> = {
    name: "連結維持",
    do({ game, grid: launcher }) {
        if (!launcher.role || game.turn < game.playerCount) return;
        var owner = launcher.role.owner;

        for (var grid of game.board.gridList) {
            if (grid.role && grid.role.owner === owner) {
                grid.role.lost("relati-repeater");
            }
        }

        maintain(launcher, owner);
    }
};

function maintain(grid: RelatiGrid, owner: RelatiPlayer) {
    if (!grid.role || grid.role.is("relati-repeater")) return;
    grid.role.gain("relati-repeater");

    var traces = RelatiCommonToTarget.trace({ grid, owner });

    for (var trace of traces) {
        var targetGrid = trace.target;
        maintain(targetGrid, owner);
    }
}