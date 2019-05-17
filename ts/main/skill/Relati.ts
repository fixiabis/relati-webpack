import { RelatiGrid } from "../RelatiBoard";
import { RelatiRouteRule, RelatiRoute } from "../rule/RelatiRouteRule";
import { RelatiRouteType, RelatiEffect, RelatiStatus } from "../RelatiDefs";

let restoreStatus: RelatiStatus[] = ["relati-receiver"];

/**
 * 恢復棋盤格Relati的中繼機能
 * @param grid 棋盤格
 * @param routeType 路徑類型
 */
function restore(grid: RelatiGrid, routeType: RelatiRouteType) {
    if (grid.is("relati-repeater")) return;
    grid.gain("relati-repeater");

    let traces: RelatiRoute[] = RelatiRouteRule.trace(
        grid, grid.symbol, restoreStatus, routeType
    );

    for (let route of traces) restore(route.grids[0], routeType);
}

/** 恢復Relati中繼機能 */
export let RestoreRepeater: RelatiEffect = {
    do({ board, routeType }) {
        for (let grid of board.grids) {
            if (grid.is("relati-launcher")) {
                restore(grid, routeType);
            }
        }
    }
};

/** 破壞Relati中繼機能 */
export let DestoryRepeater: RelatiEffect = {
    do({ board }) {
        for (let grid of board.grids) {
            grid.lost("relati-repeater");
        }
    }
};