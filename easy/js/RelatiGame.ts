const RelatiGame = (function () {
    var symbol = "OX";
    var createSymbolView = {
        O: function (grid) {
            return this.board.createViews([
                {
                    tag: "circle",
                    attribute: {
                        "stroke-width": 2,
                        "cx": grid.x * 20 + 10,
                        "cy": grid.y * 20 + 10,
                        "r": 6,
                        "stroke": "#dc143c",
                        "fill": "none"
                    }
                }
            ]);
        },
        X: function (grid) {
            var startX = grid.x * 20 + 4;
            var startY = grid.y * 20 + 4;
            var endX = grid.x * 20 + 16;
            var endY = grid.y * 20 + 16;
            return this.board.createViews([
                {
                    tag: "path",
                    attribute: {
                        "stroke-width": 2,
                        "d": `M ${startX} ${startY} L ${endX} ${endY}`,
                        "stroke": "#4169e1",
                        "fill": "none"
                    }
                }, {
                    tag: "path",
                    attribute: {
                        "stroke-width": 2,
                        "d": `M ${startX} ${endY} L ${endX} ${startY}`,
                        "stroke": "#4169e1",
                        "fill": "none"
                    }
                }
            ]);
        }
    };

    function isRelati(grid, sym) {
        return grid.getGridsFromDir("O").filter(
            grid => grid && grid.symbol === sym
        ).length > 0;
    }

    class RelatiGame {
        constructor() {
            var board = new GridBoard(5, 5);

            board.viewer.addEventListener("click", function (event) {
                var x = Math.floor(event.offsetX / 20),
                    y = Math.floor(event.offsetY / 20);
                this.gridSelected(board.grids[x][y]);
            }.bind(this));

            this.turn = 0;
            this.board = board;
        }

        gridSelected(grid) {
            if (grid.symbol) return;

            var sym = symbol[this.turn % 2];

            if (this.turn < 2 || isRelati(grid, sym)) {
                grid.symbol = sym;
                this.turn++;

                var views = createSymbolView[sym].bind(this)(grid);

                for (var i = 0; i < views.length; i++) {
                    this.board.viewer.appendChild(views[i]);
                }

                if (this.turn >= 2) {
                    var sym = symbol[this.turn % 2];

                    for (var crd in this.board.gridOf) {
                        var grid = this.board.gridOf[crd];
                        if (grid.symbol) continue;

                        if (isRelati(grid, sym)) return;
                    }

                    console.log(`${sym} lose`);
                }
            }
        }

        turn; board;
    }

    return RelatiGame;
})();