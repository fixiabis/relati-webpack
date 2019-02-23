import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
export declare class RelatiGame {
    playerBadges: string[];
    board: RelatiBoard;
    turn: number;
    playerCount: number;
    players: RelatiPlayer[];
    steps: RelatiGameStep[];
    constructor(playerBadges: string[], board: RelatiBoard);
    readonly nowPlayer: RelatiPlayer;
    start(): void;
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
