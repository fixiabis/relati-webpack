function addRelatiRule(game) {
    var board = game.board;
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"];
    var validSource = "owner valid";
    var inSpaceRoute = "space";

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
            return (
                grid.is("space-real") &&
                getRelatiList(grid).length > 0
            );
        },
        configure: function (grid) {
            grid.symbol = game.symbol[game.turn % game.players];
            grid.status = "normal";
            game.turn++;
        }
    };

    var source = {
        normal: dirO,
        remote: dirO.map(dir => dir + dir),
        remoteStable: [
            "FFR", "FFL", "BBR", "BBL",
            "FRR", "BRR", "FLL", "BLL"
        ]
    };

    var spaces = {
        remote: dirO,
        remoteStable: [
            [["FF", "F"], ["F", "FR"], ["R", "FR"]],
            [["FF", "F"], ["F", "FL"], ["L", "FL"]],
            [["BB", "B"], ["B", "BR"], ["R", "BR"]],
            [["BB", "B"], ["B", "BL"], ["L", "BL"]],
            [["RR", "R"], ["F", "FR"], ["R", "FR"]],
            [["RR", "R"], ["B", "BR"], ["R", "BR"]],
            [["LL", "L"], ["F", "FL"], ["L", "FL"]],
            [["LL", "L"], ["B", "BL"], ["L", "BL"]]
        ]
    };

    var getRelatiList = function (grid) {
        var relatiList = [];
        var getGrid = dir => grid.getGridFromDir(dir);
        var normalSourceGrid = source.normal.map(getGrid);
        var remoteSourceGrid = source.remote.map(getGrid);
        var remoteStableSourceGrid = source.remoteStable.map(getGrid);
        var remoteSpacesGrid = spaces.remote.map(getGrid);
        var remoteStableSpacesGrid = spaces.remoteStable.map(
            dirs => dirs.map(dirs => dirs.map(getGrid))
        );
        var gridSym = grid.symbol !== "" ? grid.symbol : undefined;

        for (var i = 0; i < 8; i++) {
            var sourceGrid = normalSourceGrid[i];
            var sourceGridIsOwnerValid = () => (
                sourceGrid &&
                sourceGrid.is(validSource, gridSym)
            );
            var isNormalRelati = sourceGridIsOwnerValid();

            if (isNormalRelati) {
                relatiList.push(sourceGrid);
            }

            var sourceGrid = remoteSourceGrid[i];
            var spacesGrid = remoteSpacesGrid[i];
            var isRemoteRelati = (
                sourceGridIsOwnerValid() && 
                spacesGrid.is(inSpaceRoute, gridSym)
            );

            if (isRemoteRelati) {
                relatiList.push(sourceGrid);
            }

            var sourceGrid = remoteStableSourceGrid[i];
            var allSpacesGrids = remoteStableSpacesGrid[i];

            if (sourceGridIsOwnerValid()) {
                for (var j = 0; j < allSpacesGrids.length; j++) {
                    var spacesGrids = allSpacesGrids[j];
                    var isValidSpaceRoute = (
                        spacesGrids[0].is(inSpaceRoute, gridSym) &&
                        spacesGrids[1].is(inSpaceRoute, gridSym)
                    );

                    if (isValidSpaceRoute) {
                        relatiList.push(sourceGrid);
                        break;
                    }
                }
            }
        }

        return relatiList;
    };

    var relatiForbid = function () {
        var sourceGrid = [];
        var related = [];

        board.query("forbid").forEach(grid => grid.status = "normal");
        board.query("source").forEach(grid => sourceGrid.push(grid));

        function relatiTree(source) {
            var relatiList = getRelatiList(source, true);

            for (var i = 0; i < relatiList.length; i++) {
                var relatiGrid = relatiList[i];
                if (related.indexOf(relatiGrid) < 0) {
                    related.push(relatiGrid);
                    relatiTree(relatiGrid);
                }
            }
        }

        sourceGrid.forEach(grid => {
            related.push(grid);
            relatiTree(grid);
        });

        board.query("normal").forEach(function (grid) {
            if (related.indexOf(grid) < 0 && !grid.is("space-real")) {
                grid.status = "forbid";
            }
        });
    };

    window.relatiForbid = relatiForbid;

    game.actions.push(locate);
    game.actions.push(relati);
    game.rules.push(relatiForbid);
}