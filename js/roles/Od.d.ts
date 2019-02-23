import { RelatiRole, RelatiRoleType, RelatiRoleInfo } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
export declare class Od extends RelatiRole {
    static info: RelatiRoleInfo;
    constructor(grid: RelatiGrid, owner: RelatiPlayer, type?: RelatiRoleType);
}
