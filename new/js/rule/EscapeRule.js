function addEscapeRule(game) {
    var board = game.board;
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];

    var escapeAction = {
        enable: true
    };
    var validSource = "owner valid";
    var inSpaceRoute = "space|owner";

    var escape = {
        condition: function (grid) {
            if (
                !escapeAction.enable ||
                !grid.is("space-real")
            ) return false;

            for (var i = 0; i < dirO.length; i++) {
                var nowDir = dirO[i];

                do {
                    var escapeGrid = grid.getGridFromDir(nowDir);
                    if (!escapeGrid || !escapeGrid.is(inSpaceRoute)) break;
                    if (escapeGrid.is(validSource, escapeGrid.symbol)) return true;
                    nowDir += dirO[i];
                } while (grid.getGridFromDir(nowDir));
            }

            return false;
        },
        configure: function (grid) {
            board.query(validSource).forEach(
                grid => grid.status = "broken"
            );

            grid.symbol = game.symbol[game.turn % game.players];
            grid.status = "source";
            game.turn++;
        }
    };

    game.actions.push(escape);
}