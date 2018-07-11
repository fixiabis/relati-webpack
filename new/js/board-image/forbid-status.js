var board = createBoard("forbid", 6, 1);

for (var i = 0; i < symbols.length; i++) {
    var symbol = symbols[i];
    board.grids[i][0].symbol = symbol;
    board.grids[i][0].status = "forbid";
}

board.viewerRefresh();