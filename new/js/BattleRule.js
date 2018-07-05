function addBattleRule(game) {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var regions = [];
    var select = {
        condition: function () {
            if (!game.options.attack.normal) return false;
            return game.board.query("select").length > 0;
        },
        configure: function (grid) {
            grid.status = "broken";
            game.board.query("select").forEach(
                grid => grid.status = "normal"
            );
            game.turn++;
        }
    };
    var attack = {
        condition: function (grid) {
            if (
                !game.options.attack.normal ||
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
    };
    var regionOwner = function (grid) {
        var type = game.options.region;
        var owner = [];

        if (!type) return;

        for (var i = 0; i < regions.length; i++) {
            var region = regions[i];
            var inRegion = (
                grid.x >= region.begin.x &&
                grid.x <= region.final.x &&
                grid.y >= region.begin.y &&
                grid.y <= region.final.y
            ) && (
                    !game.board.grids[region.begin.x][region.begin.y].is("space") &&
                    !game.board.grids[region.begin.x][region.final.y].is("space") &&
                    !game.board.grids[region.final.x][region.begin.y].is("space") &&
                    !game.board.grids[region.final.x][region.final.y].is("space")
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
        if (!game.options.region) return;

        for (var x = 0; x < game.board.width; x++) {
            if (grid.x === x) continue;

            if (
                game.board.grids[x][grid.y].is(
                    "owner valid|owner forbid", grid.symbol
                )
            ) {
                for (var y = 0; y < game.board.height; y++) {
                    if (grid.y === y) continue;

                    if (
                        game.board.grids[grid.x][y].is(
                            "owner valid|owner forbid", grid.symbol
                        )
                    ) {
                        if (
                            game.board.grids[x][y].is(
                                "owner valid|owner forbid", grid.symbol
                            )
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
    };
    game.actions.unshift(select);
    game.actions.push(attack);
    game.rules.push(regionExist);
}

function addDefendRule(game) {
    var defend = {
        condition: function (grid) {
            return game.options.defend && grid.is("owner normal");
        },
        configure: function (grid) {
            grid.status = "shield";
            game.turn++;
        }
    };
    game.actions.push(defend);
}

function addBomberRule(game) {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var bomber = {
        condition: function (grid) {
            return game.options.attack.bomber && grid.is("owner shield");
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
            game.turn++;
        }
    };
    game.actions.push(bomber);
}

function addPincerRule(game) {
    var dirT = ["F", "B", "R", "L"];
    var dirX = ["FR", "FL", "BR", "BL"];
    var attackPincer = function () {
        if (!game.options.attack.pincer) return;

        for (var x = 1; x < game.board.width - 1; x++) {
            for (var y = 1; y < game.board.height - 1; y++) {
                var grid = game.board.grids[x][y];
                var broken = true;

                if (game.options.attack.pincer !== "X") {
                    dirT.forEach(
                        function (dir) {
                            var pincerGrid = grid.getGridFromDir(dir);
                            if (!pincerGrid.is("other valid", grid.symbol)) {
                                broken = false;
                            }
                        }
                    );
                }

                if (broken) {
                    grid.status = "broken";
                    break;
                }

                var broken = true;

                if (game.options.attack.pincer !== "T") {
                    dirX.forEach(
                        function (dir) {
                            var pincerGrid = grid.getGridFromDir(dir);
                            if (!pincerGrid.is("other valid", grid.symbol)) {
                                broken = false;
                            }
                        }
                    );
                }

                if (broken) {
                    grid.status = "broken";
                    break;
                }
            }
        }
    };
    game.rules.push(attackPincer);
}