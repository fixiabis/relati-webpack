import { RelatiSkill } from "../RelatiSkill";
import { RelatiGame } from "../RelatiGame";

export type RoleForcedSkill = RelatiSkill<{
    game: RelatiGame
}>

export var RoleForcedSkill: RoleForcedSkill = {
    type: "forced",
    name: "角色強制觸發技能啟動",
    detail: "任何效果發動時將會啟動",
    async do({ game }) {
        var { board } = game;

        for (var { role } of board.gridList) {
            if (role) for (var skill of role.skills) {
                if (skill.type == "forced") {
                    await skill.do({ role: role, game });
                }
            }
        }
    }
};