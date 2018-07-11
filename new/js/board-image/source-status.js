var board = createBoard("source", 6, 1);

for (var i = 0; i < symbols.length; i++) {
    var symbol = symbols[i];
    board.grids[i][0].symbol = symbol;
    board.grids[i][0].status = "source";
}

board.viewerRefresh();