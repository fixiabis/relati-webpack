namespace Relati {
    export class RelatiGame {
        public turn = 0;

        constructor(
            public board: RelatiBoard,
            public players: RelatiPlayer[]
        ) {
            for (var player of players) {
                player.game = this;
            }
        }

        public nowPlayer() {
            var game = this;
            return game.players[game.turn % 2];
        }
    }

    export interface RelatiGameState {
        game?: RelatiGame,
        owner?: RelatiPlayer,
        grid?: RelatiGrid
    }
}