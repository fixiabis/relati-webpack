import { RelatiRuleTraceable } from "../RelatiRule";
import { RelatiRoleStatus } from "../RelatiRoleStatus";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
import {
    RelatiPathState,
    RelatiCommonPath,
    RelatiNormalPath,
    RelatiRemotePath,
    RelatiRemoteNormalPath,
    RelatiRemoteStablePath
} from "././RelatiPath";

/** 來源連結規則所需狀態 */
export type RelatiTargetPathState = {
    grid: RelatiGrid,
    owner: RelatiPlayer
};

/** 來源連結規則 */
export type RelatiTargetPathRule = RelatiRuleTraceable<RelatiTargetPathState>;

/** 通用連結來源狀態 */
export var RelatiCommonTargetStatus: RelatiRoleStatus.RelatiCommon[] = [
    "relati-receiver"
];

/** 通用連結來源規則 */
export var RelatiCommonToTarget: RelatiTargetPathRule = {
    allow(state: RelatiPathState) {
        state.status = RelatiCommonTargetStatus;
        return RelatiCommonPath.allow(state);
    },
    trace(state: RelatiPathState) {
        state.status = RelatiCommonTargetStatus;
        return RelatiCommonPath.trace(state);
    }
};

/** 一般連結來源狀態 */
export var RelatiNormalTargetStatus: RelatiRoleStatus.RelatiNormal[] = [
    "relati-normal-receiver"
];

/** 一般連結來源規則 */
export var RelatiNormalToTarget: RelatiTargetPathRule = {
    allow(state: RelatiPathState) {
        state.status = RelatiNormalTargetStatus;
        return RelatiNormalPath.allow(state);
    },
    trace(state: RelatiPathState) {
        state.status = RelatiNormalTargetStatus;
        return RelatiNormalPath.trace(state);
    }
};

/** 遠程連結來源狀態 */
export var RelatiRemoteTargetStatus: RelatiRoleStatus.RelatiRemote[] = [
    "relati-remote-receiver"
];

/** 遠程連結來源規則 */
export var RelatiRemoteToTarget: RelatiTargetPathRule = {
    allow(state: RelatiPathState) {
        state.status = RelatiRemoteTargetStatus;
        return RelatiRemotePath.allow(state);
    },
    trace(state: RelatiPathState) {
        state.status = RelatiRemoteTargetStatus;
        return RelatiRemotePath.trace(state);
    }
};

/** 遠程一般連結來源狀態 */
export var RelatiRemoteNormalTargetStatus: RelatiRoleStatus.RelatiRemoteNormal[] = [
    "relati-remote-normal-receiver"
];

/** 遠程一般連結來源規則 */
export var RelatiRemoteNormalToTarget: RelatiTargetPathRule = {
    allow(state: RelatiPathState) {
        state.status = RelatiRemoteNormalTargetStatus;
        return RelatiRemoteNormalPath.allow(state);
    },
    trace(state: RelatiPathState) {
        state.status = RelatiRemoteNormalTargetStatus;
        return RelatiRemoteNormalPath.trace(state);
    }
};

/** 遠程穩定連結來源狀態 */
export var RelatiRemoteStableTargetStatus: RelatiRoleStatus.RelatiRemoteStable[] = [
    "relati-remote-stable-receiver"
];

/** 遠程穩定連結來源規則 */
export var RelatiRemoteStableToTarget: RelatiTargetPathRule = {
    allow(state: RelatiPathState) {
        state.status = RelatiRemoteStableTargetStatus;
        return RelatiRemoteStablePath.allow(state);
    },
    trace(state: RelatiPathState) {
        state.status = RelatiRemoteStableTargetStatus;
        return RelatiRemoteStablePath.trace(state);
    }
};