function addEscapeRule(game) {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var escape = {
        condition: function (grid) {
            if (
                !game.options.escape ||
                !grid.is("space-real")
            ) return false;

            var escapeType = game.options.escape;

            for (var i = 0; i < dirO.length; i++) {
                var nowDir = dirO[i];

                do {
                    var escapeGrid = grid.getGridFromDir(nowDir);
                    if (!escapeGrid || escapeGrid.is("other valid")) break;
                    if (escapeGrid.is(`owner ${escapeType}`)) return true;
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