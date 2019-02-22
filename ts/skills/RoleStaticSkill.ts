import { RelatiSkill } from "../RelatiSkill";
import { RelatiGame } from "../RelatiGame";

export type RoleStaticSkill = RelatiSkill<{
    game: RelatiGame
}>

export var RoleStaticSkill: RoleStaticSkill = {
    type: "forced",
    name: "角色靜態技能啟動",
    detail: "任何效果發動時將會啟動",
    do({ game }) {
        var { board } = game;

        for (var { role } of board.gridList) {
            if (role) for (var skill of role.skills) {
                if (skill.type == "static") {
                    skill.do({ role: role, game });
                }
            }
        }
    }
};