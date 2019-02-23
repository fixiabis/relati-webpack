import { RelatiSkill } from "../RelatiSkill";
import { RelatiRole } from "../RelatiRole";
import { RelatiPath } from "../rules/RelatiPath";

export var RelatiRecovery: RelatiSkill = {
    type: "static",
    name: "連結恢復",
    detail: "將所有連結狀態恢復",
    async do({ game, role }) {
        if (game.turn < game.playerCount) return console.warn("有玩家尚未下子");
        if (!role.is("relati-launcher")) return console.warn("該角色不該擁有此技能");

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