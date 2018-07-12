function addStatusBoardIn(selector, status) {
    for (var status of status) {
        var board = createBoard(status, 6, 1, selector);

        for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            board.grids[i][0].symbol = symbol;
            board.grids[i][0].status = status;
        }

        board.viewerRefresh();
    }
}