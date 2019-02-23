import { RelatiSkill } from "../RelatiSkill";
import { Placement } from "../rules/Placement";

export var RolePlacement: RelatiSkill = {
    type: "action",
    name: "角色放置",
    detail: "放置角色至棋盤格",
    async do({ game, role }) {
        var { grid } = role;

        if (Placement.allow({ role, game })) {
            grid.role = role;
            game.turn++;
        }
    }
};