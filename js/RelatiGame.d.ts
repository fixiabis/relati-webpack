import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
export declare class RelatiGame {
    players: RelatiPlayer[];
    board: RelatiBoard;
    turn: number;
    playerCount: number;
    constructor(players: RelatiPlayer[], board: RelatiBoard);
    readonly nowPlayer: RelatiPlayer;
}
export interface RelatiGameState {
    game?: RelatiGame;
    grid?: RelatiGrid;
    player?: RelatiPlayer;
}
