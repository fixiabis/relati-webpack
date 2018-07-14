var GridBoard = (function () {
    class Grid {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.crd = String.fromCharCode(x + 65) + (y + 1);
        }
    }

    class GridBoard {
        constructor(width, height) {
            var grids = [];
            var gridOf = {};

            for (var x = 0; x < width; x++) {
                var gridCol = [];

                for (var y = 0; y < height; y++) {
                    var grid = new Grid(x, y);
                    var crd = grid.crd;
                    gridOf[crd] = grid;
                    gridCol.push(grid);
                }

                grids.push(gridCol);
            }

            this.grids = grids;
            this.gridOf = gridOf;
        }

        query(queryString) {
            
        }
    }

    return GridBoard;
})();