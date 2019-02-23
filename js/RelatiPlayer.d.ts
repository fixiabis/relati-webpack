import { RelatiRoleConstructor, RelatiRoleType } from "./RelatiRole";
import { RelatiGrid } from "./RelatiBoard";
import { RelatiGame } from "./RelatiGame";
export declare class RelatiPlayer {
    badge: string;
    game: RelatiGame;
    deck: RelatiRoleConstructor[];
    hand: RelatiRoleConstructor[];
    roleSelected?: RelatiRoleConstructor;
    constructor(badge: string, game: RelatiGame);
    draw(times?: number): void;
    shuffle(): void;
    selectRole(roleIndex: number): RelatiRoleConstructor;
    selectGrid(grid: RelatiGrid, roleType?: RelatiRoleType): void;
}
