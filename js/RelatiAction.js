"use strict";
var Relati;
(function (Relati) {
    function restore(grid, routeType) {
        if (grid.is(Relati.RELATI_REPEATER))
            return;
        grid.gain(Relati.RELATI_REPEATER);
        var routes = Relati.getRelatiRoutesBy(grid, grid.symbol | Relati.RELATI_RECEIVER, routeType);
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var targetGrid = routes_1[_i];
            restore(targetGrid, routeType);
        }
    }
    Relati.restore = restore;
    function restoreRepeaterBy(board, routeType) {
        for (var _i = 0, _a = board.grids; _i < _a.length; _i++) {
            var grid = _a[_i];
            if (grid.is(Relati.RELATI_LAUNCHER))
                restore(grid, routeType);
        }
    }
    Relati.restoreRepeaterBy = restoreRepeaterBy;
    function destoryRepeaterBy(board) {
        for (var _i = 0, _a = board.grids; _i < _a.length; _i++) {
            var grid = _a[_i];
            grid.lost(Relati.RELATI_REPEATER);
        }
    }
    Relati.destoryRepeaterBy = destoryRepeaterBy;
})(Relati || (Relati = {}));
