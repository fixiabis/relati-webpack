const RelatiGame = (function () {
    var symbol = "OX";

    function isRelati(grid, sym) {
        return grid.getGridsFromDir("O").filter(
            grid => grid && grid.symbol === sym
        ).length > 0;
    }

    function gridSelected(grid) {
        if (grid.symbol) return;

        var sym = symbol[this.turn % 2];

        if (this.turn < 2 || isRelati(grid, sym)) {
            grid.symbol = sym;
            this.turn++;
        }
    }

    class RelatiGame {
        constructor() {
            var board = new GridBoard(5, 5);

            board.viewer.addEventListener("click", function (event) {
                var x = Math.floor(event.offsetX / 20),
                    y = Math.floor(event.offsetY / 20);
                gridSelected.bind(this)(board.grids[x][y]);
            });

            this.turn = 0;
            this.board = board;
            window.addEventListener("resize", this.boardViewerResize.bind(this));
        }

        boardViewerResize() {
            var size = Math.min(
                window.innerWidth,
                window.innerHeight
            ) * 0.9 / 100;

            this.board.viewer.style.transform = "scale(" + size + ")";
        }

        turn; board;
    }

    return RelatiGame;
})();