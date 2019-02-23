import { RelatiSkill } from "../RelatiSkill";
import { RelatiGame } from "../RelatiGame";
import { RelatiRole } from "../RelatiRole";
import { RelatiPath } from "../rules/RelatiPath";

export type RelatiRecovery = RelatiSkill<{
    game: RelatiGame,
    role: RelatiRole
}>;

export var RelatiRecovery: RelatiRecovery = {
    type: "static",
    name: "連結恢復",
    detail: "將所有連結狀態恢復",
    async do({ game, role }) {
        if (game.turn < game.playerCount) return;
        if (!role.is("relati-launcher")) return;

        var { owner, grid } = role;
        var { board } = grid;

        for (var grid of board.gridList) {
            if (grid.role && grid.role.owner == owner) {
                grid.role.lost("relati-repeater");
            }
        }

        recovery(role);
    }
};

function recovery(role: RelatiRole) {
    if (role.is("relati-repeater")) return;
    role.gain("relati-repeater");

    var receiversTrace = RelatiPath.trace({
        role,
        status: ["relati-receiver"],
        fromType: "relati-target",
        toType: "relati-source"
    });

    for (var { target } of receiversTrace) {
        if (target.role) recovery(target.role);
    }
}