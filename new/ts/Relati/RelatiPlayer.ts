namespace Relati {
    export class RelatiPlayer {
        public game?: RelatiGame;

        placement(grid: RelatiGrid) {
            var { game } = this;
            var player = this;

            if (!game) return;
            if (game.nowPlayer() !== player) return;
            if (grid.role) return;

            if (game.turn < 2) {
                grid.role = new RelatiRole(this, grid);
                grid.role.type = "leader";
                grid.role.gain("relati-launcher");
                game.turn++;
            } else if (RelatiRules.Relati.allow({
                game, owner: this, grid
            })) {
                grid.role = new RelatiRole(this, grid);
                grid.role.gain("relati-recepter");
                grid.role.gain("relati-repeater");
                game.turn++;
            }
        }
    }
}