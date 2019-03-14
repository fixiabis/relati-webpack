import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer, RelatiCard } from "./RelatiPlayer";
import { RelatiRole } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
export declare type RelatiGameState = {
    game: RelatiGame;
    grid?: RelatiGrid;
    card?: RelatiCard;
    role?: RelatiRole;
    skill?: RelatiSkill;
};
export declare type RelatiGameStep = ({
    grid: RelatiGrid;
} | {
    card: RelatiCard;
} | {
    role: RelatiRole;
    skill: RelatiSkill;
}) & {
    turn: number;
};
export declare class RelatiGame {
    players: RelatiPlayer[];
    turn: number;
    steps: RelatiGameStep[];
    board: RelatiBoard;
    result?: string;
    gridSelectable: boolean;
    cardSelectable: boolean;
    skillSelectable: boolean;
    skillExecutable: boolean;
    constructor(size?: number, players?: RelatiPlayer[]);
    start(): Promise<void>;
    round(player: RelatiPlayer): Promise<void>;
    addPlayer(player: RelatiPlayer): void;
    readonly playerCount: number;
    readonly nowPlayer: RelatiPlayer;
    readonly allPlayerReady: boolean;
    execute(skill: RelatiSkill, role: RelatiRole): Promise<void>;
}
