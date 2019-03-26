import { RelatiSkill } from "../RelatiSkill";
import { RelatiRole } from "../RelatiRole";
import { RelatiGame } from "../RelatiGame";

export interface RelatiDestoryState {
    game: RelatiGame;
    role: RelatiRole;
}

export type RelatiDestorySkill = RelatiSkill<RelatiDestoryState>;

export let RelatiDestory: RelatiDestorySkill = {
    type: "effect",
    name: "連結破壞",
    detail: "破壞對方所有角色的連結轉發機能",
    priority: 0,
    async do({ game: { board: { gridList } }, role: { owner } }) {
        for (var { role } of gridList) {
            if (role && role.owner != owner) {
                role.lost("relati-repeater");
            }
        }
    }
};