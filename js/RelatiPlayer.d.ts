import { RelatiRoleConstructor } from "./RelatiRole";
export declare class RelatiPlayer {
    badge: string;
    deck: RelatiRoleConstructor[];
    hand: RelatiRoleConstructor[];
    constructor(badge: string);
    draw(times?: number): void;
    shuffle(): void;
    selectRole(role: RelatiRoleConstructor): void;
}
