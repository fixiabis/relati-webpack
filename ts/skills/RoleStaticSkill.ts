import { RelatiSkill } from "../RelatiSkill";

export var RoleStaticSkill: RelatiSkill = {
    type: "forced",
    name: "角色靜態技能啟動",
    detail: "任何效果發動時將會啟動",
    async do({ game }) {
        var { board } = game;

        for (var { role } of board.gridList) {
            if (role) for (var skill of role.skills) {
                if (skill.type == "static") {
                    await skill.do({ role, game });
                }
            }
        }
    }
};