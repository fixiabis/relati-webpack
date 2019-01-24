namespace Relati {
    export class RelatiGame {
        public turn = 0;
        public players: RelatiPlayer[] = [];
        public view: { [name: string]: SVGElement } = {};

        constructor(public board: RelatiBoard, container: HTMLElement) {
            RelatiView.viewInitialize(board, 5, container, this.view);

            this.view.board.addEventListener("click", function (this: RelatiGame, event: MouseEvent) {
                var x: number = Math.floor(event.offsetX / 5),
                    y: number = Math.floor(event.offsetY / 5),
                    grid = board.grids[x] && board.grids[x][y];
                this.selectGrid(grid);
            }.bind(this));
        }

        getNowPlayer() {
            var totalPlayer = this.players.length;
            return this.players[this.turn % totalPlayer];
        }

        selectGrid(grid: RelatiGrid) {
            if (grid.role && grid.role.owner) return;
            var owner = this.getNowPlayer();
            var game = this;

            if (this.turn < this.players.length) {
                grid.role = new RelatiRoles.RelatiLeader(owner, grid);
                grid.role.gain("relati-launcher");
            } else if (RelatiRules.RelatiBySource.allow({ game, grid, owner })) {
                grid.role = new RelatiRole(owner, grid);
                grid.role.gain("relati-receiver");
            } else return;

            this.turn++;

            for (let grid of this.board.gridList) {
                if (!grid.role) continue;

                for (var effect of grid.role.effects) {
                    effect.do({ game, grid, owner });
                }
            }

            RelatiView.updateBoardView(this.board, this.view);
        }
    }

    export interface RelatiGameState {
        game?: RelatiGame,
        owner?: RelatiPlayer,
        grid?: RelatiGrid
    }
}