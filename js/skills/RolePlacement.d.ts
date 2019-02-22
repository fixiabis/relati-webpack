import { RelatiSkill } from "../RelatiSkill";
import { RelatiGame } from "../RelatiGame";
import { RelatiRole } from "../RelatiRole";
export declare type RolePlacement = RelatiSkill<{
    game: RelatiGame;
    role: RelatiRole;
}>;
export declare var RolePlacement: RolePlacement;
