import { RelatiRoleConstructor } from "./RelatiRole";
import { RelatiGame } from "./RelatiGame";
export declare class RelatiPlayer {
    badge: string;
    deck: RelatiRoleConstructor[];
    hand: RelatiRoleConstructor[];
    roleSelected?: RelatiRoleConstructor;
    joinedGame?: RelatiGame;
    constructor(badge: string);
    draw(times?: number): void;
    shuffle(): void;
    join(game: RelatiGame): void;
    selectRole(roleIndex: number): RelatiRoleConstructor;
}
