import { RelatiRole, RelatiRoleType, RelatiRoleInfo } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
export declare class Xa extends RelatiRole {
    static info: RelatiRoleInfo;
    constructor(grid: RelatiGrid, owner: RelatiPlayer, type?: RelatiRoleType);
}
