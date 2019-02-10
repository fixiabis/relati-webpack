import { RelatiRuleTraceable } from "../RelatiRule";
import { RelatiRoleStatus } from "../RelatiRoleStatus";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
/** 來源連結規則所需狀態 */
export declare type RelatiTargetPathState = {
    grid: RelatiGrid;
    owner: RelatiPlayer;
};
/** 來源連結規則 */
export declare type RelatiTargetPathRule = RelatiRuleTraceable<RelatiTargetPathState>;
/** 通用連結來源狀態 */
export declare var RelatiCommonTargetStatus: RelatiRoleStatus.RelatiCommon[];
/** 通用連結來源規則 */
export declare var RelatiCommonToTarget: RelatiTargetPathRule;
/** 一般連結來源狀態 */
export declare var RelatiNormalTargetStatus: RelatiRoleStatus.RelatiNormal[];
/** 一般連結來源規則 */
export declare var RelatiNormalToTarget: RelatiTargetPathRule;
/** 遠程連結來源狀態 */
export declare var RelatiRemoteTargetStatus: RelatiRoleStatus.RelatiRemote[];
/** 遠程連結來源規則 */
export declare var RelatiRemoteToTarget: RelatiTargetPathRule;
/** 遠程一般連結來源狀態 */
export declare var RelatiRemoteNormalTargetStatus: RelatiRoleStatus.RelatiRemoteNormal[];
/** 遠程一般連結來源規則 */
export declare var RelatiRemoteNormalToTarget: RelatiTargetPathRule;
/** 遠程穩定連結來源狀態 */
export declare var RelatiRemoteStableTargetStatus: RelatiRoleStatus.RelatiRemoteStable[];
/** 遠程穩定連結來源規則 */
export declare var RelatiRemoteStableToTarget: RelatiTargetPathRule;
