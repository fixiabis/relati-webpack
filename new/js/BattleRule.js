function addAttackRule(game) {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var select = {
        condition: function () {
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
    game.actions.unshift(select);
    game.actions.push(attack);
}

function addDefendRule(game) {
    var defend = {
        condition: function (grid) {
            return grid.is("owner normal");
        },
        configure: function (grid) {
            grid.status = "shield";
            game.turn++;
        }
    };
    game.actions.push(defend);
}

function addBomberRule(game) {
    var bomber = {
        condition: function (grid) {
            return grid.is("owner shield");
        },
        configure: function (grid) {
            grid.status = "broken";
            game.board.query(
                "owner|other",
                grid.getGridsFromDir("O")
            ).forEach(
                grid => grid.status = "broken"
            );
            game.turn++;
        }
    };
    game.actions.push(bomber);
}

function addPincerRule(game) {
    var attackPincer = function () {
        for (var x = 1; x < game.board.width - 1; x++) {
            for (var y = 1; y < game.board.height - 1; y++) {
                var grid = game.board.grids[x][y];
                var broken = true;

                broken = game.board.query(
                    "other valid|other forbid",
                    grid.getGridsFromDir("T"),
                    grid.symbol
                ).length == 4;

                if (broken) {
                    grid.status = "broken";
                    break;
                }

                broken = game.board.query(
                    "other valid|other forbid",
                    grid.getGridsFromDir("X"),
                    grid.symbol
                ).length == 4;

                if (broken) {
                    grid.status = "broken";
                    break;
                }
            }
        }
    };
    game.rules.push(attackPincer);
}