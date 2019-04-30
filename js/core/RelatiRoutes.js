"use strict";
var Relati;
(function (Relati) {
    var NORMAL_RELATI_ROUTES = [
        Relati.GRID_DRCT_F,
        Relati.GRID_DRCT_B,
        Relati.GRID_DRCT_R,
        Relati.GRID_DRCT_L,
        Relati.GRID_DRCT_FR,
        Relati.GRID_DRCT_FL,
        Relati.GRID_DRCT_BR,
        Relati.GRID_DRCT_BL
    ];
    var REMOTE_NORMAL_RELATI_ROUTES = [
        [Relati.GRID_DRCT_2F, Relati.GRID_DRCT_F],
        [Relati.GRID_DRCT_2B, Relati.GRID_DRCT_B],
        [Relati.GRID_DRCT_2R, Relati.GRID_DRCT_R],
        [Relati.GRID_DRCT_2L, Relati.GRID_DRCT_L],
        [Relati.GRID_DRCT_2FR, Relati.GRID_DRCT_FR],
        [Relati.GRID_DRCT_2FL, Relati.GRID_DRCT_FL],
        [Relati.GRID_DRCT_2BR, Relati.GRID_DRCT_BR],
        [Relati.GRID_DRCT_2BL, Relati.GRID_DRCT_BL]
    ];
    var REMOTE_STABLE_RELATI_ROUTES = [
        [Relati.GRID_DRCT_FFR, Relati.GRID_DRCT_2F, Relati.GRID_DRCT_F],
        [Relati.GRID_DRCT_FFR, Relati.GRID_DRCT_FR, Relati.GRID_DRCT_F],
        [Relati.GRID_DRCT_FFR, Relati.GRID_DRCT_FR, Relati.GRID_DRCT_R],
        [Relati.GRID_DRCT_FFL, Relati.GRID_DRCT_2F, Relati.GRID_DRCT_F],
        [Relati.GRID_DRCT_FFL, Relati.GRID_DRCT_FL, Relati.GRID_DRCT_F],
        [Relati.GRID_DRCT_FFL, Relati.GRID_DRCT_FL, Relati.GRID_DRCT_L],
        [Relati.GRID_DRCT_BBR, Relati.GRID_DRCT_2B, Relati.GRID_DRCT_B],
        [Relati.GRID_DRCT_BBR, Relati.GRID_DRCT_BR, Relati.GRID_DRCT_B],
        [Relati.GRID_DRCT_BBR, Relati.GRID_DRCT_BR, Relati.GRID_DRCT_R],
        [Relati.GRID_DRCT_BBL, Relati.GRID_DRCT_2B, Relati.GRID_DRCT_B],
        [Relati.GRID_DRCT_BBL, Relati.GRID_DRCT_BL, Relati.GRID_DRCT_B],
        [Relati.GRID_DRCT_BBL, Relati.GRID_DRCT_BL, Relati.GRID_DRCT_L],
        [Relati.GRID_DRCT_FRR, Relati.GRID_DRCT_FR, Relati.GRID_DRCT_F],
        [Relati.GRID_DRCT_FRR, Relati.GRID_DRCT_2R, Relati.GRID_DRCT_R],
        [Relati.GRID_DRCT_FRR, Relati.GRID_DRCT_FR, Relati.GRID_DRCT_R],
        [Relati.GRID_DRCT_FLL, Relati.GRID_DRCT_FL, Relati.GRID_DRCT_F],
        [Relati.GRID_DRCT_FLL, Relati.GRID_DRCT_2L, Relati.GRID_DRCT_L],
        [Relati.GRID_DRCT_FLL, Relati.GRID_DRCT_FL, Relati.GRID_DRCT_L],
        [Relati.GRID_DRCT_BRR, Relati.GRID_DRCT_BR, Relati.GRID_DRCT_B],
        [Relati.GRID_DRCT_BRR, Relati.GRID_DRCT_2R, Relati.GRID_DRCT_R],
        [Relati.GRID_DRCT_BRR, Relati.GRID_DRCT_BR, Relati.GRID_DRCT_R],
        [Relati.GRID_DRCT_BLL, Relati.GRID_DRCT_BL, Relati.GRID_DRCT_B],
        [Relati.GRID_DRCT_BLL, Relati.GRID_DRCT_2L, Relati.GRID_DRCT_L],
        [Relati.GRID_DRCT_BLL, Relati.GRID_DRCT_BL, Relati.GRID_DRCT_L]
    ];
    Relati.BY_NORMAL_RELATI = 0;
    Relati.BY_COMMON_RELATI = 1;
    function getRelatiRoutesBy(grid, status, routeType) {
        var routes = [];
        switch (routeType) {
            case Relati.BY_COMMON_RELATI:
                for (var i = 0; i < 24; i++) {
                    var targetGrid = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][0]);
                    var middleGrid1 = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][1]);
                    var middleGrid2 = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][2]);
                    if (targetGrid &&
                        targetGrid.is(status) &&
                        middleGrid1.isSpace &&
                        middleGrid2.isSpace)
                        routes.push(targetGrid);
                }
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(REMOTE_NORMAL_RELATI_ROUTES[i][0]);
                    var middleGrid = grid.getGrid(REMOTE_NORMAL_RELATI_ROUTES[i][1]);
                    if (targetGrid &&
                        targetGrid.is(status) &&
                        middleGrid.isSpace)
                        routes.push(targetGrid);
                }
            case Relati.BY_NORMAL_RELATI:
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(NORMAL_RELATI_ROUTES[i]);
                    if (targetGrid &&
                        targetGrid.is(status))
                        routes.push(targetGrid);
                }
        }
        return routes;
    }
    Relati.getRelatiRoutesBy = getRelatiRoutesBy;
    function hasRelatiRoutesBy(grid, status, routeType) {
        switch (routeType) {
            case Relati.BY_COMMON_RELATI:
                for (var i = 0; i < 24; i++) {
                    var targetGrid = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][0]);
                    var middleGrid1 = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][1]);
                    var middleGrid2 = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][2]);
                    if (targetGrid &&
                        targetGrid.is(status) &&
                        middleGrid1.isSpace &&
                        middleGrid2.isSpace)
                        return true;
                }
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(REMOTE_NORMAL_RELATI_ROUTES[i][0]);
                    var middleGrid = grid.getGrid(REMOTE_NORMAL_RELATI_ROUTES[i][1]);
                    if (targetGrid &&
                        targetGrid.is(status) &&
                        middleGrid.isSpace)
                        return true;
                }
            case Relati.BY_NORMAL_RELATI:
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(NORMAL_RELATI_ROUTES[i]);
                    if (targetGrid &&
                        targetGrid.is(status))
                        return true;
                }
        }
        return false;
    }
    Relati.hasRelatiRoutesBy = hasRelatiRoutesBy;
    function getRelatiTracesBy(grid, status, routeType) {
        var routes = [];
        switch (routeType) {
            case Relati.BY_COMMON_RELATI:
                for (var i = 0; i < 24; i++) {
                    var targetGrid = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][0]);
                    var middleGrid1 = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][1]);
                    var middleGrid2 = grid.getGrid(REMOTE_STABLE_RELATI_ROUTES[i][2]);
                    if (targetGrid &&
                        targetGrid.is(status) &&
                        middleGrid1.isSpace &&
                        middleGrid2.isSpace)
                        routes.push([middleGrid2, middleGrid1, targetGrid]);
                }
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(REMOTE_NORMAL_RELATI_ROUTES[i][0]);
                    var middleGrid = grid.getGrid(REMOTE_NORMAL_RELATI_ROUTES[i][1]);
                    if (targetGrid &&
                        targetGrid.is(status) &&
                        middleGrid.isSpace)
                        routes.push([middleGrid, targetGrid]);
                }
            case Relati.BY_NORMAL_RELATI:
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(NORMAL_RELATI_ROUTES[i]);
                    if (targetGrid &&
                        targetGrid.is(status))
                        routes.push([targetGrid]);
                }
        }
        return routes;
    }
    Relati.getRelatiTracesBy = getRelatiTracesBy;
})(Relati || (Relati = {}));
//# sourceMappingURL=RelatiRoutes.js.map