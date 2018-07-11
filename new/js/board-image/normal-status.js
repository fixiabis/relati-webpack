var board = createBoard("normal", 6, 1);

for (var i = 0; i < symbols.length; i++) {
    var symbol = symbols[i];
    board.grids[i][0].symbol = symbol;
    board.grids[i][0].status = "normal";
}

board.viewerRefresh();