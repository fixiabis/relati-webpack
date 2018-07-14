function gameStartIn(container) {
    var game = new RelatiGame(2, container);
    addSkinOn(game.board, game);
    game.board.viewerRefresh();
}