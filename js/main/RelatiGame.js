"use strict";
var Relati;
(function (Relati) {
    var RelatiGame = /** @class */ (function () {
        function RelatiGame(board, boardView, routeType) {
            this.board = board;
            this.boardView = boardView;
            this.routeType = routeType;
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
            var _a = this, routeType = _a.routeType, board = _a.board, boardView = _a.boardView;
            if (this.turn < 2) {
                grid.symbol = symbol;
                grid.gain(Relati.RELATI_LAUNCHER);
            }
            else if (Relati.hasRelatiRoutesBy(grid, symbol | Relati.RELATI_REPEATER, routeType)) {
                grid.symbol = symbol;
                grid.gain(Relati.RELATI_RECEIVER);
            }
            else
                return;
            this.turn++;
            Relati.destoryRepeaterBy(board);
            Relati.restoreRepeaterBy(board, routeType);
            boardView.removeBackground();
            boardView.update();
            if (this.turn > 1) {
                var symbol_1 = this.turn % 2 + 1;
                var hint = this.getHints(symbol_1);
                if (hint.length == 0) {
                    symbol_1 = this.turn % 2 + 2;
                    hint = this.getHints(symbol_1);
                    if (hint.length == 0)
                        console.log("draw");
                    else
                        console.log((symbol_1 == 1 ? "O" : "X") + "Win");
                }
                else
                    Relati.createHint(hint, symbol_1, boardView.background);
            }
            Relati.createRelatiEffect(symbol, this);
        };
        RelatiGame.prototype.getHints = function (symbol) {
            var grids = [];
            for (var _i = 0, _a = this.board.grids; _i < _a.length; _i++) {
                var grid = _a[_i];
                if (grid.isSpace && Relati.hasRelatiRoutesBy(grid, symbol | Relati.RELATI_REPEATER, Relati.BY_COMMON_RELATI))
                    grids.push(grid);
            }
            return grids;
        };
        return RelatiGame;
    }());
    Relati.RelatiGame = RelatiGame;
})(Relati || (Relati = {}));
//# sourceMappingURL=RelatiGame.js.map