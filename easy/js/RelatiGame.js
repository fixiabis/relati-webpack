var RelatiGame = (function () {
    var symbol = "OX";
    var symbolCreate = {
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
                        "d": "M " + startX + " " + startY + " L " + endX + " " + endY,
                        "stroke": "#4169e1",
                        "fill": "none"
                    }
                }, {
                    tag: "path",
                    attribute: {
                        "stroke-width": 2,
                        "d": "M " + startX + " " + endY + " L " + endX + " " + startY,
                        "stroke": "#4169e1",
                        "fill": "none"
                    }
                }
            ]);
        }
    };
    function isRelati(grid, sym) {
        return grid.getGridsFromDir("O").filter(function (grid) { return grid && grid.symbol === sym; }).length > 0;
    }
    function gridSelected(grid) {
        if (grid.symbol)
            return;
        var sym = symbol[this.turn % 2];
        if (this.turn < 2 || isRelati(grid, sym)) {
            grid.symbol = sym;
            this.turn++;
            var views = symbolCreate[sym].bind(this)(grid);
            for (var i = 0; i < views.length; i++) {
                this.board.viewer.appendChild(views[i]);
            }
        }
    }
    var RelatiGame = /** @class */ (function () {
        function RelatiGame() {
            var board = new GridBoard(5, 5);
            board.viewer.addEventListener("click", function (event) {
                var x = Math.floor(event.offsetX / 20), y = Math.floor(event.offsetY / 20);
                gridSelected.bind(this)(board.grids[x][y]);
            }.bind(this));
            this.turn = 0;
            this.board = board;
            window.addEventListener("resize", this.boardViewerResize.bind(this));
        }
        RelatiGame.prototype.boardViewerResize = function () {
            var size = Math.min(window.innerWidth, window.innerHeight) * 0.9 / 100;
            this.board.viewer.style.transform = "scale(" + size + ")";
        };
        return RelatiGame;
    }());
    return RelatiGame;
})();
