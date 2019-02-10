import { RelatiRoleEffect } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiGame } from "../RelatiGame";
import { RelatiTargetPathRule } from "../rules/RelatiToTarget";
import { RelatiRoleStatus } from "../RelatiRoleStatus";
export declare type RelatiMaintainRouteState = {
    game: RelatiGame;
    grid: RelatiGrid;
    status: RelatiRoleStatus;
    toTarget: RelatiTargetPathRule;
};
export declare type RelatiMaintainRouteEffect = RelatiRoleEffect<RelatiMaintainRouteState>;
export declare var RelatiMaintainRoute: RelatiMaintainRouteEffect;
