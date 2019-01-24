namespace Relati {
    export namespace RelatiEffects {
        var relatiGridList: RelatiGrid[] = [];

        export var RelatiMaintain: RelatiEffect = {
            name: "連結維持",
            do({ game, grid }) {
                if (!game || !grid) return;
                if (!grid.role) return;
                if (game.turn < game.players.length) return;
                var owner = grid.role.owner;

                for (let grid of game.board.gridList) {
                    if (!grid.role) continue;
                    if (grid.role.owner != owner) continue;

                    for (var status of RelatiRoleStatusRelatiRepeater) {
                        if (grid.role.is(status)) {
                            grid.role.lost(status);
                        }
                    }
                }

                relatiGridList = [];
                maintain(grid, owner);

                for (let grid of game.board.gridList) {
                    if (!grid.role) continue;
                    if (grid.role.owner != owner) continue;

                    if (relatiGridList.indexOf(grid) > -1) {
                        grid.role.gain("relati-repeater");
                    }
                }
            }
        };

        function maintain(grid: RelatiGrid, owner: RelatiPlayer) {
            if (relatiGridList.indexOf(grid) > -1) return;
            relatiGridList.push(grid);

            var ruleTraces = RelatiRules.RelatiToTarget.trace({ owner, grid });

            for (var trace of ruleTraces) {
                var targetGrid = trace.target;
                maintain(targetGrid, owner);
            }
        }
    }
}