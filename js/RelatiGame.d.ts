import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";
export declare class RelatiGame {
    players: RelatiPlayer[];
    board: RelatiBoard;
    turn: number;
    playerCount: number;
    steps: RelatiGameStep[];
    constructor(players: RelatiPlayer[], board: RelatiBoard);
    readonly nowPlayer: RelatiPlayer;
}
export interface RelatiGameState {
    game?: RelatiGame;
    grid?: RelatiGrid;
    player?: RelatiPlayer;
}
export interface RelatiGameStep {
    turn: RelatiGame["turn"];
    grid: RelatiGrid;
    role: RelatiRole;
}
