import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";
export declare class RelatiGame {
    playerBadges: string[];
    board: RelatiBoard;
    turn: number;
    playerCount: number;
    players: RelatiPlayer[];
    steps: RelatiGameStep[];
    constructor(playerBadges: string[], board: RelatiBoard);
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
