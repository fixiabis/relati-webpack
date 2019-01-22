namespace Relati {
    export class RelatiGame {
        public turn = 0;
        public players: RelatiPlayer[] = [];

        constructor(public board: RelatiBoard) { }

        getNowPlayer() {
            var totalPlayer = this.players.length;
            return this.players[this.turn % totalPlayer];
        }

        selectGrid(grid: RelatiGrid) {
            
        }
    }
}