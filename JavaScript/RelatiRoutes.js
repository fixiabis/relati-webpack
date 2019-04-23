"use strict";
var NORMAL_RELATI_ROUTES = [
    GRID_DRCT_F,
    GRID_DRCT_B,
    GRID_DRCT_R,
    GRID_DRCT_L,
    GRID_DRCT_FR,
    GRID_DRCT_FL,
    GRID_DRCT_BR,
    GRID_DRCT_BL
];
var REMOTE_NORMAL_RELATI_ROUTES = [
    [GRID_DRCT_2F, GRID_DRCT_F],
    [GRID_DRCT_2B, GRID_DRCT_B],
    [GRID_DRCT_2R, GRID_DRCT_R],
    [GRID_DRCT_2L, GRID_DRCT_L],
    [GRID_DRCT_2FR, GRID_DRCT_FR],
    [GRID_DRCT_2FL, GRID_DRCT_FL],
    [GRID_DRCT_2BR, GRID_DRCT_BR],
    [GRID_DRCT_2BL, GRID_DRCT_BL]
];
var REMOTE_STABLE_RELATI_ROUTES = [
    [GRID_DRCT_FFR, GRID_DRCT_2F, GRID_DRCT_F],
    [GRID_DRCT_FFR, GRID_DRCT_FR, GRID_DRCT_F],
    [GRID_DRCT_FFR, GRID_DRCT_FR, GRID_DRCT_R],
    [GRID_DRCT_FFL, GRID_DRCT_2F, GRID_DRCT_F],
    [GRID_DRCT_FFL, GRID_DRCT_FL, GRID_DRCT_F],
    [GRID_DRCT_FFL, GRID_DRCT_FL, GRID_DRCT_L],
    [GRID_DRCT_BBR, GRID_DRCT_2B, GRID_DRCT_B],
    [GRID_DRCT_BBR, GRID_DRCT_BR, GRID_DRCT_B],
    [GRID_DRCT_BBR, GRID_DRCT_BR, GRID_DRCT_R],
    [GRID_DRCT_BBL, GRID_DRCT_2B, GRID_DRCT_B],
    [GRID_DRCT_BBL, GRID_DRCT_BL, GRID_DRCT_B],
    [GRID_DRCT_BBL, GRID_DRCT_BL, GRID_DRCT_L],
    [GRID_DRCT_FRR, GRID_DRCT_FR, GRID_DRCT_F],
    [GRID_DRCT_FRR, GRID_DRCT_2R, GRID_DRCT_R],
    [GRID_DRCT_FRR, GRID_DRCT_FR, GRID_DRCT_R],
    [GRID_DRCT_FLL, GRID_DRCT_FL, GRID_DRCT_F],
    [GRID_DRCT_FLL, GRID_DRCT_2L, GRID_DRCT_L],
    [GRID_DRCT_FLL, GRID_DRCT_FL, GRID_DRCT_L],
    [GRID_DRCT_BRR, GRID_DRCT_BR, GRID_DRCT_B],
    [GRID_DRCT_BRR, GRID_DRCT_2R, GRID_DRCT_R],
    [GRID_DRCT_BRR, GRID_DRCT_BR, GRID_DRCT_R],
    [GRID_DRCT_BLL, GRID_DRCT_BL, GRID_DRCT_B],
    [GRID_DRCT_BLL, GRID_DRCT_2L, GRID_DRCT_L],
    [GRID_DRCT_BLL, GRID_DRCT_BL, GRID_DRCT_L]
];
var BY_NORMAL_RELATI = 0;
var BY_COMMON_RELATI = 1;
function getRelatiRoutesBy(grid, status, routeType) {
    var routes = [];
    switch (routeType) {
        case BY_COMMON_RELATI:
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
        case BY_NORMAL_RELATI:
            for (var i = 0; i < 8; i++) {
                var targetGrid = grid.getGrid(NORMAL_RELATI_ROUTES[i]);
                if (targetGrid &&
                    targetGrid.is(status))
                    routes.push(targetGrid);
            }
    }
    return routes;
}
function hasRelatiRoutesBy(grid, status, routeType) {
    switch (routeType) {
        case BY_COMMON_RELATI:
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
        case BY_NORMAL_RELATI:
            for (var i = 0; i < 8; i++) {
                var targetGrid = grid.getGrid(NORMAL_RELATI_ROUTES[i]);
                if (targetGrid &&
                    targetGrid.is(status))
                    return true;
            }
    }
    return false;
}
