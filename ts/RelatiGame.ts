import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";

export class RelatiGame {
    public turn = 0;

    constructor(
        public players: RelatiPlayer[],
        public board: RelatiBoard
    ) { }

    get nowPlayer() {
        return this.players[this.turn % this.players.length];
    }
};

export interface RelatiGameState {
    game?: RelatiGame;
    grid?: RelatiGrid;
    player?: RelatiPlayer;
};