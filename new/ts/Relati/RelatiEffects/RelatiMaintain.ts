namespace Relati {
    export namespace RelatiEffects {
        export var RelatiMaintain: RelatiEffect = {
            name: "連結維持",
            do({ game, grid }) {
                if (
                    !game || !grid || !grid.role ||
                    game.turn < game.players.length
                ) return;

                var owner = grid.role.owner;

                for (let grid of game.board.gridList) {
                    if (grid.role && grid.role.owner == owner) {
                        grid.role.status["relati-repeater"] = false;
                    }
                }

                maintain(grid, owner);
            }
        };

        function maintain(grid: RelatiGrid, owner: RelatiPlayer) {
            if (!grid.role || grid.role.status["relati-repeater"]) return;
            grid.role.status["relati-repeater"] = true;

            var ruleTraces = RelatiRules.RelatiToTarget.trace({ owner, grid });

            for (var trace of ruleTraces) {
                var targetGrid = trace.target;
                maintain(targetGrid, owner);
            }
        }
    }
}