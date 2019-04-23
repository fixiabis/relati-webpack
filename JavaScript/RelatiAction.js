"use strict";
function restore(grid, routeType) {
    if (grid.is(RELATI_REPEATER))
        return;
    grid.gain(RELATI_REPEATER);
    var routes = getRelatiRoutesBy(grid, grid.symbol | RELATI_RECEIVER, routeType);
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var targetGrid = routes_1[_i];
        restore(targetGrid, routeType);
    }
}
function restoreRepeaterBy(board, routeType) {
    for (var i = 0; i < board.length; i++) {
        var grid = board.grids[i];
        if (grid.is(RELATI_LAUNCHER))
            restore(grid, routeType);
    }
}
function destoryRepeaterBy(board) {
    for (var i = 0; i < board.length; i++) {
        var grid = board.grids[i];
        grid.lost(RELATI_REPEATER);
    }
}
