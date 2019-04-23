"use strict";
var RelatiGame = /** @class */ (function () {
    function RelatiGame(board, boardView) {
        this.board = board;
        this.boardView = boardView;
        this.turn = 0;
        boardView.view.addEventListener("click", function (event) {
            var x = Math.floor(event.offsetX / 5), y = Math.floor(event.offsetY / 5);
            this.gridSelect(x, y);
        }.bind(this));
    }
    RelatiGame.prototype.gridSelect = function (x, y) {
        var grid = this.board.getGrid(x, y);
        if (!grid.isSpace)
            return;
        var symbol = this.turn % 2 + 1;
        if (this.turn < 2) {
            grid.symbol = symbol;
            grid.gain(RELATI_LAUNCHER);
        }
        else if (hasRelatiRoutesBy(grid, symbol | RELATI_REPEATER, BY_COMMON_RELATI)) {
            grid.symbol = symbol;
            grid.gain(RELATI_RECEIVER);
        }
        else
            return;
        this.turn++;
        destoryRepeaterBy(this.board);
        restoreRepeaterBy(this.board, BY_COMMON_RELATI);
        this.boardView.update();
    };
    return RelatiGame;
}());
