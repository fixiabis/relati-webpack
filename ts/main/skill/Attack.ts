import { RelatiAction, RelatiEffect } from "../RelatiDefs";
import { AttackRule } from "../rule/AttackRule";

export let Attack: RelatiAction = {
    async do(grid, game) {
        let bulletGrids = AttackRule.trace(grid, game.nowPlayer);
        if (!bulletGrids[0]) return false;

        grid.lost("attack-selected");
        grid.lost("relati-launcher");
        grid.lost("relati-repeater");
        grid.lost("relati-receiver");
        if (game.ongridselect) game.ongridselect(grid);

        do {
            var bulletGrid = await game.gridSelect();
        } while (bulletGrids.indexOf(bulletGrid) < 0);

        bulletGrid.lost("relati-launcher");
        bulletGrid.lost("relati-repeater");
        bulletGrid.lost("relati-receiver");

        game.history.push({
            turn: game.turn,
            type: "attack",
            grid
        });

        return true;
    }
};

export let AttackTarget: RelatiEffect = {
    do({ board, turn, players }) {
        let player = players[(turn + 1) % 2];

        for (let grid of board.grids) {
            if (!grid.isSpace) {
                if (AttackRule.allow(grid, player)) {
                    grid.gain("attack-selected");
                } else {
                    grid.lost("attack-selected");
                }
            }
        }
    }
};