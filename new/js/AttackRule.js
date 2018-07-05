function addAttackRule(game) {
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
    var attack = 
    {
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
    game.actions.unshift(select);
}