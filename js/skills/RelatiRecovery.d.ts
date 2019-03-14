import { RelatiSkill } from "../RelatiSkill";
import { RelatiRole } from "../RelatiRole";
import { RelatiGame } from "../RelatiGame";
export interface RelatiRecoveryState {
    game: RelatiGame;
    role: RelatiRole;
}
export declare type RelatiRecoverySkill = RelatiSkill<RelatiRecoveryState>;
export declare let RelatiRecovery: RelatiRecoverySkill;
