import { RelatiRole, RelatiRoleType } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
export declare class Xa extends RelatiRole {
    static detail: string;
    constructor(grid: RelatiGrid, owner: RelatiPlayer, type?: RelatiRoleType);
}
