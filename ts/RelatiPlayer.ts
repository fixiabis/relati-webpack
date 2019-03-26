import { RelatiRole } from "./RelatiRole";
import { RelatiGrid } from "./RelatiBoard";

export class RelatiPlayer {
    leader?: RelatiRole;
    selectRole?: (role: RelatiRole) => void;
    selectGrid?: (grid: RelatiGrid) => void;
    constructor(public name: string) { }
}

export interface RelatiPlayerHasLeader extends RelatiPlayer {
    leader: RelatiRole;
}