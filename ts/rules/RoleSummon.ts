import { RelatiRoleParams, RelatiRoleStatus } from "../RelatiRole";
import { RelatiRule } from "../RelatiRule";
import { RelatiProtocol } from "./RelatiProtocol";

const sourceType: RelatiRoleParams = "relati-target";
const targetType: RelatiRoleParams = "relati-source";
const relyStatus: RelatiRoleStatus[] = ["relati-launcher", "relati-repeater"];

export type RoleSummonRule = RelatiRule;

export let RoleSummon: RoleSummonRule = {
    name: "角色召喚",
    detail: "是否符合角色召喚的規則",
    allow({ game, role, role: { grid } }) {
        if (grid.role) return false;
        if (game.playerNow != role.owner) return false;
        if (game.turn < game.playerCount) return true;

        return RelatiProtocol.allow({
            role,
            sourceType,
            targetType,
            relyStatus
        });
    }
};