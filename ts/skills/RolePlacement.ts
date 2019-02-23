import { RelatiSkill } from "../RelatiSkill";
import { RelatiGame } from "../RelatiGame";
import { RelatiRole } from "../RelatiRole";
import { Placement } from "../rules/Placement";

export type RolePlacement = RelatiSkill<{
    game: RelatiGame,
    role: RelatiRole
}>;

export var RolePlacement: RolePlacement = {
    type: "action",
    name: "角色放置",
    detail: "放置角色至棋盤格",
    async do({ game, role }) {
        var { owner, grid } = role;

        if (Placement.allow({ role, game })) {
            grid.role = role;
            game.turn++;
        }
    }
};