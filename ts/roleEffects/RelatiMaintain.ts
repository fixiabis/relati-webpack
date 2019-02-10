import { RelatiGame } from "../RelatiGame";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiRoleEffect } from "../RelatiRole";

import {
    RelatiMaintainRoute,
    RelatiMaintainRouteState
} from "./RelatiMaintainRoute";

import {
    RelatiCommonToTarget,
    RelatiNormalToTarget,
    RelatiRemoteToTarget,
    RelatiRemoteNormalToTarget,
    RelatiRemoteStableToTarget
} from "../rules/RelatiToTarget";

export type RelatiMaintainState = {
    game: RelatiGame;
    grid: RelatiGrid;
};

export type RelatiMaintainEffect = RelatiRoleEffect<RelatiMaintainState>;

export var RelatiCommonMaintain: RelatiMaintainEffect = {
    name: "通用連結維持",
    do(state: RelatiMaintainRouteState) {
        state.status = "relati-repeater";
        state.toTarget = RelatiCommonToTarget;
        return RelatiMaintainRoute.do(state);
    }
};

export var RelatiNormalMaintain: RelatiMaintainEffect = {
    name: "一般連結維持",
    do(state: RelatiMaintainRouteState) {
        state.status = "relati-normal-repeater";
        state.toTarget = RelatiNormalToTarget;
        return RelatiMaintainRoute.do(state);
    }
};

export var RelatiRemoteMaintain: RelatiMaintainEffect = {
    name: "遠程連結維持",
    do(state: RelatiMaintainRouteState) {
        state.status = "relati-remote-repeater";
        state.toTarget = RelatiRemoteToTarget;
        return RelatiMaintainRoute.do(state);
    }
};

export var RelatiRemoteNormalMaintain: RelatiMaintainEffect = {
    name: "遠程一般連結維持",
    do(state: RelatiMaintainRouteState) {
        state.status = "relati-remote-normal-repeater";
        state.toTarget = RelatiRemoteNormalToTarget;
        return RelatiMaintainRoute.do(state);
    }
};

export var RelatiRemoteStableMaintain: RelatiMaintainEffect = {
    name: "遠程穩定連結維持",
    do(state: RelatiMaintainRouteState) {
        state.status = "relati-remote-stable-repeater";
        state.toTarget = RelatiRemoteStableToTarget;
        return RelatiMaintainRoute.do(state);
    }
};