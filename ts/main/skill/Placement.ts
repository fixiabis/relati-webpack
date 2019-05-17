import { RelatiAction } from "../RelatiDefs";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiGame } from "../RelatiGame";
import { PlacementRule } from "../rule/PlacementRule";

export let Placement: RelatiAction = {
    do(grid: RelatiGrid, game: RelatiGame) {
        if (!grid.isSpace) return false;

        let { nowPlayer: { symbol }, routeType } = game;

        if (game.turn < 2) {
            grid.symbol = symbol;
            grid.gain("relati-launcher");
        } else if (PlacementRule.allow(grid, symbol, routeType)) {
            grid.symbol = symbol;
            grid.gain("relati-receiver");
        } else return false;

        game.history.push({
            turn: game.turn,
            type: "placement",
            grid
        });

        return true;
    }
};