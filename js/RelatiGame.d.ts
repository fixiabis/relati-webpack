import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
export declare class RelatiGame {
    board: RelatiBoard;
    players: RelatiPlayer[];
    turn: number;
    playerCount: number;
    steps: RelatiGameStep[];
    constructor(board: RelatiBoard, players?: RelatiPlayer[]);
    start(): void;
    readonly nowPlayer: RelatiPlayer;
    execute(skill: RelatiSkill, role: RelatiRole): Promise<void>;
}
export interface RelatiGameState {
    game: RelatiGame;
    role: RelatiRole;
}
export interface RelatiGameStep {
    turn: RelatiGame["turn"];
    role: RelatiRole;
    skill: RelatiSkill;
}
