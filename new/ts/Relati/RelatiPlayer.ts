namespace Relati {
    export class RelatiPlayer {
        constructor(public game: RelatiGame) { }

        placement(grid: RelatiGrid) {
            var { game } = this;
            var player = this;

            if (game.nowPlayer() !== player) return;

            if (game.turn < 2 && !grid.role) {
                grid.role = new RelatiRole(this, grid);
            }
        }
    }
}