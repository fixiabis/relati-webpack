var RelatiGame = (function () {
    var createBoard = function (players, container) {
        var size = players * 2 + 11;
        var board = new GridBoard(size, size);
        container.appendChild(board.viewer);

        function viewerResize() {
            var viewerSize = Math.min(
                container.clientWidth,
                container.clientHeight
            );
            board.viewerResize(viewerSize, viewerSize);
        }

        window.addEventListener("load", viewerResize);
        window.addEventListener("resize", viewerResize);

        return board;
    };
    var createRelatiBoard = function (players, container) {
        var board = createBoard(players, container);
        board.query = (function () {
            var grids = [];
            board.grids.forEach(
                gridCol => grids = grids.concat(gridCol)
            );
            return type => grids.filter(grid => grid.is(type));
        })();
        board.history = [];
        return board;
    };
    function gridIs(grid, type, sym) {
        sym = sym || this.symbol[this.turn % this.players];
        var typeIs = type => gridIs(grid, type, sym);

        switch (type) {
            case "space-real": // 實質空白
                return grid.symbol === "";
            case "space-fake": //視為空白
                return typeIs("broken|owner shield");
            case "space": //空白
                return typeIs("space-real|space-fake");
            case "valid": //有效
                return !typeIs("owner forbid|space");
            case "owner": //我方
                return grid.symbol === sym;
            case "other": //他方
                return !typeIs("owner|space-real");
            default:
                if (type.indexOf("|") > -1) {
                    var types = type.split("|");

                    for (let i = 0; i < types.length; i++) {
                        if (typeIs(types[i])) return true;
                    }

                    return false;
                } else if (type.indexOf(" ") > -1) {
                    var types = type.split(" ");

                    for (let i = 0; i < types.length; i++) {
                        if (!typeIs(types[i])) return false;
                    }

                    return true;
                } else {
                    return grid.status === type;
                }
        }
    };
    return class RelatiGame {
        constructor(players, container, options) {
            this.turn = 0;
            this.symbol = "OXDURA";
            this.board = createRelatiBoard(players, container);
            this.players = players;
            this.options = options;
            this.actions = [];
            this.rules = [];

            for (var crd in this.board.gridOf) {
                let grid = this.board.gridOf[crd];
                grid.status = "normal";
                grid.symbol = "";
                grid.is = (type, sym) => gridIs.bind(this)(grid, type, sym);
            }

            function nextPlayerExist() {
                for (var i = 0; i < this.actions.length; i++) {
                    var { condition } = this.actions[i];
                    var markableGrid = this.board.query("space-real").map(
                        grid => condition(grid)
                    );

                    if (markableGrid.indexOf(true) > -1) {
                        return true;
                    }
                }

                return false;
            }

            this.board.ongridselect = function (grid) {
                for (var i = 0; i < this.actions.length; i++) {
                    var { condition, configure } = this.actions[i];

                    if (condition(grid)) {
                        configure(grid);
                        this.rules.forEach(rule => rule(grid));
                        this.board.history.push(grid.crd);
                        this.board.viewerRefresh();

                        while (!nextPlayerExist.bind(this)()) {
                            this.turn++;
                        }

                        return true;
                    }
                }

                return false;
            }.bind(this);
        }
    };
})();