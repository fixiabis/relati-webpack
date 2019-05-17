import { RelatiEffect } from "../RelatiDefs";
import { BY_NORMAL_RELATI, RelatiRouteRule } from "../rule/RelatiRouteRule";

export let RelatiNormalTypeCount: RelatiEffect = {
    do(game) {
        let { turn, nowPlayer: player, history } = game;

        if (turn < 2) return;

        let state = history.filter(
            state => (
                state.grid.symbol == player.symbol
            )
        ).reverse()[0];

        if (state.type != "placement") return;

        if (player.points["relati-normal-times"] == undefined) {
            player.points["relati-normal-times"] = 0;
        }

        let playerUseNormalRelati = RelatiRouteRule.allow(
            state.grid, player.symbol, ["relati-repeater"], BY_NORMAL_RELATI
        );

        if (playerUseNormalRelati) player.points["relati-normal-times"]++;
        else player.points["relati-normal-times"] = 0;
    }
};