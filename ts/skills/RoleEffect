import { RelatiSkill } from "../RelatiSkill";

export var RoleEffect: RelatiSkill = {
    type: "effect",
    name: "角色被動技能啟動",
    detail: "任何效果發動時將會啟動",
    async do({ game }) {
        var { board } = game;

        for (var { role } of board.gridList) {
            if (role) for (var skill of role.skills) {
                if (skill.type == "forced") {
                    await skill.do({ role, game });
                }
            }
        }
    }
};
