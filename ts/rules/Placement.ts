import { RelatiRule } from "../RelatiRule";
import { RelatiRole } from "../RelatiRole";
import { RelatiPlayer } from "../RelatiPlayer";
import { RelatiPath } from "./RelatiPath";
import { RelatiGame } from "../RelatiGame";

export type PlacementState = {
    role: RelatiRole,
    owner: RelatiPlayer,
    game: RelatiGame
};

export type PlacementRule = RelatiRule<PlacementState>;

export var Placement: PlacementRule = {
    name: "設置規則",
    detail: "確認該格子是否可以放置角色",
    allow({ role, owner, game }) {
        var { grid } = role;
        var placeable = !grid.role;
        if (!placeable) return false;
        if (game.turn < game.playerCount) return placeable;

        var relatiable = RelatiPath.allow({
            role, owner,
            status: ["relati-launcher", "relati-repeater"],
            fromType: "relati-source",
            toType: "relati-target"
        });

        return relatiable;
    }
};