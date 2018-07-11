function addRegionRule(game) {
    var board = game.board;
    var regions = [];

    var regionAction = {
        enable: true,
        forbid: true,
        forbidAttack: true
    };
    var validSource = "owner valid|owner forbid|owner shield";
    var regionRule = "first"
    var isValidSource = (grid, sym) => grid.is(validSource, sym);

    function regionExist(grid) {
        if (!regionAction.enable) return false;

        var gridSym = grid.symbol;

        for (var x = 0; x < board.width; x++) {
            if (grid.x === x) continue;

            if (isValidSource(board.grids[x][grid.y], gridSym)) {
                for (var y = 0; y < board.height; y++) {
                    if (grid.y === y) continue;

                    if (isValidSource(board.grids[grid.x][y], gridSym)) {
                        if (isValidSource(board.grids[x][y]), gridSym) {
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

    function regionOwner(grid) {
        var gridSym = grid.symbol;
        var owner = [];

        for (var i = 0; i < regions.length; i++) {
            var region = regions[i];
            var { begin, final } = region;
            var inRegion = (
                grid.x >= begin.x &&
                grid.x <= final.x &&
                grid.y >= begin.y &&
                grid.y <= final.y
            ) && (
                    isValidSource(board.grids[begin.x][begin.y], gridSym) &&
                    isValidSource(board.grids[begin.x][final.y], gridSym) &&
                    isValidSource(board.grids[final.x][begin.y], gridSym) &&
                    isValidSource(board.grids[final.x][final.y], gridSym)
                );

            if (inRegion) {
                owner.push(region.owner);
            }
        }

        if (regionRule === "first") return [owner[0]];
        if (regionRule === "final") return [owner[owner.length - 1]];
        if (regionRule === "share") return owner;
        if (regionRule === "split") return owner.length > 1 ? [] : owner;
    }

    var regionForbid = {
        condition: function (grid) {
            var regionOwners = regionOwner(grid);
            var sym = game.symbol[game.turn % game.players];

            if (
                !regionOwners[0] ||
                !regionAction.forbid
            ) return false;

            if (regionOwners.indexOf(sym) < 0) {
                return true;
            }
        },
        configure: function (grid) {
            console.log("region forbid");
        }
    };

    var regionForbidAttack = {
        condition: function (grid) {
            var regionOwners = regionOwner(grid);
            var sym = game.symbol[game.turn % game.players];

            if (
                !regionOwners[0] ||
                !regionAction.forbidAttack
            ) return false;

            if (
                board.query("select").length > 0 &&
                regionOwners.indexOf(sym) < 0 ||
                regionOwners.indexOf(grid.symbol) > -1
            ) {
                return true;
            }
        },
        configure: function (grid) { }
    };

    game.actions.unshift(regionForbidAttack);
    game.actions.unshift(regionForbid);
    game.rules.push(regionExist);
}