function addRelatiRule(game) {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var options = game.options;
    var locate = {
        condition: function (grid) {
            return (
                grid.is("space-real") &&
                game.turn < game.players
            );
        },
        configure: function (grid) {
            grid.symbol = game.symbol[game.turn % game.players];
            grid.status = "source";
            game.turn++;
        }
    };
    var relati = {
        condition: function (grid) {
            if (!grid.is("space-real")) return false;
            return getRelatiList(grid, options).length > 0;
        },
        configure: function (grid) {
            grid.symbol = game.symbol[game.turn % game.players];
            grid.status = "normal";
            game.turn++;
        }
    };
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

        return function getRelatiList(grid, options) {
            var relatiList = [];
            var getGrid = dir => grid.getGridFromDir(dir);
            var gridSym = grid.symbol !== "" ? grid.symbol : undefined;
            var normalSourceGrid = normalSource.map(getGrid);
            var remoteSourceGrid = remoteSource.map(getGrid);
            var remoteStableSourceGrid = remoteStableSource.map(getGrid);
            var remoteSpacesGrid = remoteSpaces.map(getGrid);
            var remoteStableSpacesGrid = remoteStableSpaces.map(
                dirs => dirs.map(dirs => dirs.map(getGrid))
            );

            for (var i = 0; i < 8; i++) {
                var sourceGrid = normalSourceGrid[i];

                if (
                    options.relati.normal &&
                    sourceGrid &&
                    sourceGrid.is("owner valid", gridSym)
                ) {
                    relatiList.push(sourceGrid);
                }

                var sourceGrid = remoteSourceGrid[i];
                var spacesGrid = remoteSpacesGrid[i];

                if (
                    options.relati.remote &&
                    sourceGrid &&
                    sourceGrid.is("owner valid", gridSym)
                ) {
                    if (spacesGrid.is("space")) {
                        relatiList.push(sourceGrid);
                    }
                }

                var sourceGrid = remoteStableSourceGrid[i];
                var allSpacesGrids = remoteStableSpacesGrid[i];

                if (
                    options.relati.remoteStable &&
                    sourceGrid &&
                    sourceGrid.is("owner valid", gridSym)
                ) {
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
        if (!options.relati.forbid) return;
        var sourceGrid = [];
        var related = [];

        game.board.query("forbid").forEach(
            grid => grid.status = "normal"
        );

        game.board.query("source").forEach(
            grid => sourceGrid.push(grid)
        );

        function relatiTree(source) {
            var relatiList = getRelatiList(source, options);

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

        game.board.query("normal").forEach(function (grid) {
            if (related.indexOf(grid) < 0) {
                grid.status = "forbid";
            }
        });
    };
    game.actions.push(locate);
    game.actions.push(relati);
    game.rules.push(relatiForbid);
}