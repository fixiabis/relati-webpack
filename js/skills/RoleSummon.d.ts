import { RelatiSkill } from "../RelatiSkill";
import { RelatiGame } from "../RelatiGame";
import { RelatiRole } from "../RelatiRole";
export interface RoleSummonState {
    game: RelatiGame;
    role: RelatiRole;
}
export declare type RoleSummonSkill = RelatiSkill<RoleSummonState>;
export declare let RoleSummon: RoleSummonSkill;
