import { RelatiGameState } from "./RelatiGame";
import { RelatiRole } from "./RelatiRole";
export declare type RelatiSkillState = {
    role?: RelatiRole;
} & RelatiGameState;
export declare type RelatiSkillType = "action" | "effect" | "static" | "forced";
export interface RelatiSkill<State = {}> {
    name: string;
    type: RelatiSkillType;
    detail: string;
    do(state: RelatiSkillState & State): void;
}