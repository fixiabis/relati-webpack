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
    selectedGrid?: RelatiGrid;
    constructor(playerBadges: string[], board: RelatiBoard);
    readonly nowPlayer: RelatiPlayer;
    start(): void;
}
export interface RelatiGameState {
    game: RelatiGame;
    role: RelatiRole;
}
export interface RelatiGameStep {
    turn: RelatiGame["turn"];
    role: RelatiRole;
}
