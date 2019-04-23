function restore(grid: RelatiGrid, routeType: number) {
    if (grid.is(RELATI_REPEATER)) return;
    grid.gain(RELATI_REPEATER);
    let routes = getRelatiRoutesBy(grid, grid.symbol | RELATI_RECEIVER, routeType);
    for (let targetGrid of routes) restore(targetGrid, routeType);
}

function restoreRepeaterBy(board: RelatiBoard, routeType: number) {
    for (let i = 0; i < board.length; i++) {
        let grid: RelatiGrid = board.grids[i];
        if (grid.is(RELATI_LAUNCHER)) restore(grid, routeType);
    }
}

function destoryRepeaterBy(board: RelatiBoard) {
    for (let i = 0; i < board.length; i++) {
        let grid = board.grids[i];
        grid.lost(RELATI_REPEATER);
    }
}