function addAttackRule(game) {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var options = game.options;
    var select = {
        condition: function () {
            if (!options.attack) return false;
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
                !options.attack ||
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
    var options = game.options;
    var defend = {
        condition: function (grid) {
            return (
                options.defend &&
                grid.is("owner normal")
            );
        },
        configure: function (grid) {
            grid.status = "shield";
            game.turn++;
        }
    };
    game.actions.push(defend);
}

function addBomberRule(game) {
    var options = game.options;
    var bomber = {
        condition: function (grid) {
            return (
                options.bomber &&
                grid.is("owner shield")
            );
        },
        configure: function (grid) {
            grid.status = "broken";
            game.board.query(
                "owner|other",
                grid.getGridFromDir("O")
            ).forEach(
                grid => grid.status = "broken"
            );
            game.turn++;
        }
    };
    game.actions.push(bomber);
}

function addPincerRule(game) {
    var options = game.options;
    var attackPincer = function () {
        if (!options.pincer.type) return;

        var type = "other " + options.pincer.type.replace(/\|/g, "|other ");

        for (var x = 1; x < game.board.width - 1; x++) {
            for (var y = 1; y < game.board.height - 1; y++) {
                var grid = game.board.grids[x][y];
                var broken = true;

                if (options.pincer.dir !== "X") {
                    broken = game.board.query(
                        type,
                        grid.getGridsFromDir("T"),
                        grid.symbol
                    ).length == 4;

                    if (broken) {
                        grid.status = "broken";
                        break;
                    }
                }

                if (options.pincer.dir !== "T") {
                    broken = game.board.query(
                        type,
                        grid.getGridsFromDir("X"),
                        grid.symbol
                    ).length == 4;

                    if (broken) {
                        grid.status = "broken";
                        break;
                    }
                }
            }
        }
    };
    game.rules.push(attackPincer);
}