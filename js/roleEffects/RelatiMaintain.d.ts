import { RelatiRoleEffect } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiGame } from "../RelatiGame";
export declare type RelatiMaintainState = {
    game: RelatiGame;
    grid: RelatiGrid;
};
export declare var RelatiCommonMaintain: RelatiRoleEffect<RelatiMaintainState>;
