function addAttackRule(game) {
    var board = game.board;
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];

    var attackAction = {
        enable: true
    };
    var attackTarget = "other normal|other source|other forbid";
    var validMedium = "owner valid";
    var validBullet = "owner normal";
    var inSpaceRoute = "space|owner";

    var select = {
        condition: function () {
            return (
                attackAction.enable &&
                board.query("select").length > 0
            );
        },
        configure: function (grid) {
            grid.status = "broken";
            board.query("select").forEach(
                grid => grid.status = "normal"
            );
            game.turn++;
        }
    };

    var attack = {
        condition: function (grid) {
            if (
                !grid.is(attackTarget) ||
                game.regionOwner(grid).indexOf(grid.symbol) > -1
            ) return false;

            var selected = false;

            for (var i = 0; i < dirO.length; i++) {
                var nowDir = dirO[i];

                do {
                    var attackGrid = grid.getGridFromDir(nowDir);
                    if (!attackGrid || !attackGrid.is(inSpaceRoute)) break;

                    if (attackGrid.is(validMedium)) {
                        var consumGrid = attackGrid.getGridFromDir(dirO[i]);

                        if (consumGrid && consumGrid.is(validBullet)) {
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
    var defendAction = {
        enable: true
    };

    var defend = {
        condition: function (grid) {
            return (
                defendAction.enable &&
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
    var board = game.board;

    var bomberAction = {
        enable: true
    };
    var bomberSource = "owner shield";
    var bomberTarget = "owner|other";

    var bomber = {
        condition: function (grid) {
            return (
                bomberAction.enable &&
                grid.is(bomberSource)
            );
        },
        configure: function (grid) {
            grid.status = "broken";
            board.query(bomberTarget, grid.getGridsFromDir("O")).forEach(
                grid => grid.status = "broken"
            );
            game.turn++;
        }
    };

    game.actions.push(bomber);
}

function addPincerRule(game) {
    var board = game.board;

    var pincerAction = {
        enable: true
    };
    var pincerSource = "other valid|other forbid";
    var pincerTarget = "owner valid|owner forbid";
    var pincerDir = ["T", "X"];

    function pincer() {
        if (!pincerAction.enable) return;

        for (var x = 1; x < board.width - 1; x++) {
            for (var y = 1; y < board.height - 1; y++) {
                var grid = board.grids[x][y];
                var gridSym = grid.symbol;
                if (!grid.is(pincerTarget, gridSym)) continue;
                var broken = false;

                for (var i = 0; i < pincerDir.length; i++) {
                    var pincerSourceGrid = grid.getGridsFromDir(pincerDir[i]);
                    broken = board.query(
                        pincerSource,
                        pincerSourceGrid,
                        gridSym
                    ).length === pincerSourceGrid.length;
                }

                if (broken) grid.status = "broken";
            }
        }
    }

    game.rules.push(pincer);
}