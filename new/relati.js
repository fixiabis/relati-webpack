var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
var turn = 0,
    players = 2,
    selectHistory = [],
    regions = [],
    symbol = "OXDUAH",
    actions = [
        {
            condition: function () {
                for (var crd in board.gridOf) {
                    if (board.gridOf[crd].is("select")) {
                        return true;
                    }
                }

                return false;
            },
            configure: function (grid) {
                grid.status = "broken";

                for (var crd in board.gridOf) {
                    if (board.gridOf[crd].is("select")) {
                        board.gridOf[crd].status = "normal";
                    }
                }

                turn++;
            }
        },
        {
            condition: function (grid) {
                return grid.is("space-real") && turn < players;
            },
            configure: function (grid) {
                grid.symbol = symbol[turn % players];
                grid.status = "source";
                turn++;
            }
        },
        {
            condition: function (grid) {
                if (!grid.is("space-real")) return false;

                var relatiList = getRelatiList(grid);

                return relatiList.length > 0;
            },
            configure: function (grid) {
                grid.symbol = symbol[turn % players];
                grid.status = "normal";
                regionExist(grid);
                turn++;
            }
        },
        {
            condition: function (grid) {
                if (!grid.is("space-real")) return false;

                for (var i = 0; i < dirO.length; i++) {
                    var nowDir = dirO[i];

                    do {
                        var escapeGrid = grid.getGridFromDir(nowDir);
                        if (!escapeGrid || escapeGrid.is("other valid")) break;
                        if (escapeGrid.is("owner valid")) return true;
                        nowDir += dirO[i];
                    } while (grid.getGridFromDir(nowDir));
                }

                return false;
            },
            configure: function (grid) {
                for (var crd in board.gridOf) {
                    let grid = board.gridOf[crd];

                    if (grid.is("owner valid")) {
                        grid.status = "broken";
                    }
                }

                grid.symbol = symbol[turn % players];
                grid.status = "source";
                regionExist(grid);
                turn++;
            }
        },
        {
            condition: function (grid) {
                if (
                    grid.is("owner|other shield|space") ||
                    regionOwner(grid).indexOf(grid.symbol) > -1
                ) return false;

                var selected = false;

                for (var i = 0; i < dirO.length; i++) {
                    var nowDir = dirO[i];

                    do {
                        var attackGrid = grid.getGridFromDir(nowDir);
                        if (!attackGrid || attackGrid.is("other valid")) break;

                        if (attackGrid.is("owner valid")) {
                            var consumGrid = attackGrid.getGridFromDir(dirO[i]);

                            if (consumGrid && consumGrid.is("owner normal")) {
                                consumGrid.status = "select";
                                selected = true;
                                break;
                            }
                        }

                        nowDir += dirO[i];
                    } while (grid.getGridFromDir(nowDir));
                }

                return selected;
            },
            configure: function (grid) {
                grid.status = "broken";
            }
        },
        {
            condition: function (grid) {
                return grid.is("owner normal");
            },
            configure: function (grid) {
                grid.status = "shield";
                turn++;
            }
        },
        {
            condition: function (grid) {
                return grid.is("owner shield");
            },
            configure: function (grid) {
                grid.status = "broken";
                dirO.map(
                    dir => grid.getGridFromDir(dir)
                ).forEach(function (grid) {
                    if (grid && grid.is("owner|other")) {
                        grid.status = "broken";
                    }
                });
                turn++;
            }
        }
    ];

var getRelatiList = (function () {
    var normalSource = dirO;
    var remoteSource = normalSource.map(dir => dir + dir);
    var remoteSpaces = normalSource.map(dir => dir);
    var remoteStableSource = [
        "FFR", "FFL", "BBR", "BBL", "FRR", "BRR", "FLL", "BLL"
    ];
    var remoteStableSpaces = [
        [["FF", "F"], ["F", "FR"], ["R", "FR"]],
        [["FF", "F"], ["F", "FL"], ["L", "FL"]],
        [["BB", "B"], ["B", "BR"], ["R", "BR"]],
        [["BB", "B"], ["B", "BL"], ["L", "BL"]],
        [["RR", "R"], ["F", "FR"], ["R", "FR"]],
        [["RR", "R"], ["B", "BR"], ["R", "BR"]],
        [["LL", "L"], ["F", "FL"], ["L", "FL"]],
        [["LL", "L"], ["B", "BL"], ["L", "BL"]]
    ];

    return function getRelatiList(grid) {
        var relatiList = [];
        var getGrid = dir => grid.getGridFromDir(dir);
        var gridSym = grid.symbol !== "" ? grid.symbol : undefined;
        var normalSourceGrid = normalSource.map(getGrid);
        var remoteSourceGrid = remoteSource.map(getGrid);
        var remoteStableSourceGrid = remoteStableSource.map(getGrid);
        var remoteSpacesGrid = remoteSpaces.map(getGrid);
        var remoteStableSpacesGrid = remoteStableSpaces.map(dirs => dirs.map(dirs => dirs.map(getGrid)));

        for (var i = 0; i < 8; i++) {
            var sourceGrid = normalSourceGrid[i];

            if (sourceGrid && sourceGrid.is("owner valid", gridSym)) {
                relatiList.push(sourceGrid);
            }

            var sourceGrid = remoteSourceGrid[i];
            var spacesGrid = remoteSpacesGrid[i];

            if (sourceGrid && sourceGrid.is("owner valid", gridSym)) {
                if (spacesGrid.is("space")) {
                    relatiList.push(sourceGrid);
                }
            }

            var sourceGrid = remoteStableSourceGrid[i];
            var allSpacesGrids = remoteStableSpacesGrid[i];

            if (sourceGrid && sourceGrid.is("owner valid", gridSym)) {
                for (var j = 0; j < allSpacesGrids.length; j++) {
                    var spacesGrids = allSpacesGrids[j];

                    if (
                        spacesGrids[0].is("space") &&
                        spacesGrids[1].is("space")
                    ) {
                        relatiList.push(sourceGrid);
                        break;
                    }
                }
            }
        }

        return relatiList;
    };
})();
var relatiForbid = function () {
    var sourceGrid = [];
    var related = [];

    for (var crd in board.gridOf) {
        var grid = board.gridOf[crd];

        if (grid.is("forbid")) {
            grid.status = "normal";
        } else if (grid.is("source")) {
            sourceGrid.push(grid);
        }
    }

    function relatiTree(source) {
        var relatiList = getRelatiList(source);

        for (var i = 0; i < relatiList.length; i++) {
            var relatiGrid = relatiList[i];
            if (related.indexOf(relatiGrid) < 0) {
                related.push(relatiGrid);
                relatiTree(relatiGrid);
            }
        }
    }

    for (var i = 0; i < sourceGrid.length; i++) {
        related.push(sourceGrid[i]);
        relatiTree(sourceGrid[i]);
    }

    for (var crd in board.gridOf) {
        var grid = board.gridOf[crd];

        if (grid.is("normal")) {
            if (related.indexOf(grid) < 0) {
                grid.status = "forbid";
            }
        }
    }
};
var attackPincer = function () {
    for (var x = 1; x < board.width - 1; x++) {
        for (var y = 1; y < board.height - 1; y++) {
            var grid = board.grids[x][y];
            var dirT = dirO.filter(dir => dir.length === 1);
            var dirX = dirO.filter(dir => dir.length === 2);
            var broken = true;

            dirT.forEach(
                function (dir) {
                    var pincerGrid = grid.getGridFromDir(dir);
                    if (!pincerGrid.is("other valid", grid.symbol)) {
                        broken = false;
                    }
                }
            );

            if (broken) {
                grid.status = "broken";
                break;
            }

            var broken = true;

            dirX.forEach(
                function (dir) {
                    var pincerGrid = grid.getGridFromDir(dir);
                    if (!pincerGrid.is("other valid", grid.symbol)) {
                        broken = false;
                    }
                }
            );

            if (broken) {
                grid.status = "broken";
                break;
            }
        }
    }
};
var regionOwner = function (grid, type) {
    type = type || "first";
    var owner = [];

    for (var i = 0; i < regions.length; i++) {
        var region = regions[i];
        var inRegion = (
            grid.x >= region.begin.x &&
            grid.x <= region.final.x &&
            grid.y >= region.begin.y &&
            grid.y <= region.final.y
        ) && (
                board.grids[region.begin.x][region.begin.y].is("shield") &&
                board.grids[region.begin.x][region.final.y].is("shield") &&
                board.grids[region.final.x][region.begin.y].is("shield") &&
                board.grids[region.final.x][region.final.y].is("shield")
            );

        if (inRegion) {
            owner.push(region.owner);
        }
    }

    if (type === "first") return [owner[0]];
    if (type === "final") return [owner[owner.length - 1]];
    if (type === "share") return owner;
    if (type === "split") return [];
};
var regionExist = function (grid) {
    for (var x = 0; x < board.width; x++) {
        if (grid.x === x) continue;

        if (
            board.grids[x][grid.y].is("owner") &&
            board.grids[x][grid.y].is("owner broken")
        ) {
            for (var y = 0; y < board.height; y++) {
                if (grid.y === y) continue;

                if (
                    board.grids[grid.x][y].is("owner") &&
                    board.grids[grid.x][y].is("owner broken")
                ) {
                    if (
                        board.grids[x][y].is("owner") &&
                        board.grids[x][y].is("owner broken")
                    ) {
                        regions.push({
                            begin: {
                                x: Math.min(x, grid.x),
                                y: Math.min(y, grid.y)
                            },
                            final: {
                                x: Math.max(x, grid.x),
                                y: Math.max(y, grid.y)
                            },
                            owner: grid.symbol
                        });
                    }
                }
            }
        }
    }
}

function gridIs(grid, type, sym) {
    sym = sym || symbol[turn % players];
    var typeIs = type => gridIs(grid, type, sym);

    switch (type) {
        case "space-real":
            return grid.symbol === "";
        case "space-fake":
            return typeIs("broken|owner shield");
        case "space":
            return typeIs("space-real|space-fake");
        case "valid":
            return !typeIs("owner forbid|space");
        case "owner":
            return grid.symbol === sym;
        case "other":
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
}

for (var crd in board.gridOf) {
    let grid = board.gridOf[crd];

    grid.status = "normal";
    grid.symbol = "";
    grid.is = (type, sym) => gridIs(grid, type, sym);
}

function nextPlayerExist() {
    for (var i = 0; i < actions.length; i++) {
        var { condition } = actions[i];

        for (var crd in board.gridOf) {
            var grid = board.gridOf[crd];

            if (grid.is("space-real") && condition(grid)) {
                return true;
            }
        }
    }

    return false;
}

board.ongridselect = function (grid) {
    for (var i = 0; i < actions.length; i++) {
        var { condition, configure } = actions[i];

        if (condition(grid)) {
            configure(grid);
            relatiForbid();
            attackPincer();
            selectHistory.push(grid.crd);
            board.viewerRefresh();

            while (!nextPlayerExist()) turn++;

            break;
        }
    }
};