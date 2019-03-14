import { RelatiSkill } from "../RelatiSkill";
import { RelatiRole } from "../RelatiRole";
import { RelatiGame } from "../RelatiGame";
export interface RelatiDestoryState {
    game: RelatiGame;
    role: RelatiRole;
}
export declare type RelatiDestorySkill = RelatiSkill<RelatiDestoryState>;
export declare let RelatiDestory: RelatiDestorySkill;
