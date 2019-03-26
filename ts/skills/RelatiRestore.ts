import { RelatiSkill } from "../RelatiSkill";
import { RelatiRole, RelatiRoleParams, RelatiRoleStatus } from "../RelatiRole";
import { RelatiGame } from "../RelatiGame";
import { RelatiProtocol } from "../rules/RelatiProtocol";

export interface RelatiRestoreState {
    game: RelatiGame;
    role: RelatiRole;
}

export type RelatiRestoreSkill = RelatiSkill<RelatiRestoreState>;

export let RelatiRestore: RelatiRestoreSkill = {
    type: "effect",
    name: "連結恢復",
    detail: "恢復我方所有角色的連結轉發機能",
    priority: 10,
    async do({ game, role }) {
        if (
            game.turn < game.playerCount ||
            !role.is("relati-launcher")
        ) return;

        await restore(role);
    }
};

const sourceType: RelatiRoleParams = "relati-source";
const targetType: RelatiRoleParams = "relati-target";
const relyStatus: RelatiRoleStatus[] = ["relati-receiver"];

async function restore(role: RelatiRole) {
    if (role.is("relati-repeater")) return;
    role.gain("relati-repeater");

    var traces = RelatiProtocol.trace({
        role,
        sourceType,
        targetType,
        relyStatus
    });

    await Promise.all(traces.map(({ target }) =>
        new Promise<void>(resolve => {
            if (!target.role) return resolve();
            restore(target.role).then(resolve);
        })
    ));
}