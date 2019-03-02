import { RelatiRole } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer, RelatiCard } from "./RelatiPlayer";
export declare type RelatiGameResult = "O Win" | "X Win" | "Relati";
export interface RelatiGameState {
    game: RelatiGame;
    card?: RelatiCard;
    role?: RelatiRole;
    grid?: RelatiGrid;
    skill?: RelatiSkill;
}
export interface RelatiGameStep {
    turn: RelatiGame["turn"];
    role: RelatiRole;
    skill: RelatiSkill;
}
export declare class RelatiGame {
    board: RelatiBoard;
    players: RelatiPlayer[];
    turn: number;
    steps: RelatiGameStep[];
    result?: RelatiGameResult;
    constructor(board: RelatiBoard, players?: RelatiPlayer[]);
    start(): Promise<void>;
    readonly playerCount: number;
    readonly nowPlayer: RelatiPlayer;
    addPlayer(player: RelatiPlayer): void;
    execute(skill: RelatiSkill, role: RelatiRole): Promise<void>;
}
