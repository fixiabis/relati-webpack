function addEscapeRule(game) {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var options = game.options;
    var escape = {
        condition: function (grid) {
            if (
                !options.escape ||
                !grid.is("space-real")
            ) return false;

            var type = "owner " + options.escape.replace(/\|/, "|owner ");

            for (var i = 0; i < dirO.length; i++) {
                var nowDir = dirO[i];

                do {
                    var escapeGrid = grid.getGridFromDir(nowDir);
                    if (!escapeGrid || escapeGrid.is("other valid")) break;
                    if (escapeGrid.is(type, escapeGrid.symbol)) return true;
                    nowDir += dirO[i];
                } while (grid.getGridFromDir(nowDir));
            }

            return false;
        },
        configure: function (grid) {
            game.board.query("owner valid").forEach(
                grid => grid.status = "broken"
            );

            grid.symbol = game.symbol[game.turn % game.players];
            grid.status = "source";
            game.turn++;
        }
    };
    game.actions.push(escape);
}