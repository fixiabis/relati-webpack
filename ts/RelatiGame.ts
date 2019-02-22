import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";

export class RelatiGame {
    public turn = 0;
    public playerCount: number;

    constructor(
        public players: RelatiPlayer[],
        public board: RelatiBoard
    ) {
        this.playerCount = players.length;

        for (var player of players) {
            player.shuffle();
            player.draw(5);
        }
    }

    get nowPlayer() {
        return this.players[this.turn % this.playerCount];
    }
};

export interface RelatiGameState {
    game?: RelatiGame;
    grid?: RelatiGrid;
    player?: RelatiPlayer;
};