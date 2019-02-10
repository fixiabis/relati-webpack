import { RelatiGame } from "../RelatiGame";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiRoleEffect } from "../RelatiRole";
export declare type RelatiMaintainState = {
    game: RelatiGame;
    grid: RelatiGrid;
};
export declare type RelatiMaintainEffect = RelatiRoleEffect<RelatiMaintainState>;
export declare var RelatiCommonMaintain: RelatiMaintainEffect;
export declare var RelatiNormalMaintain: RelatiMaintainEffect;
export declare var RelatiRemoteMaintain: RelatiMaintainEffect;
export declare var RelatiRemoteNormalMaintain: RelatiMaintainEffect;
export declare var RelatiRemoteStableMaintain: RelatiMaintainEffect;
