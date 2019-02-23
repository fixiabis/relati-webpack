import { RelatiGameState } from "./RelatiGame";
export declare type RelatiSkillType = "action" | "effect" | "static" | "forced";
export interface RelatiSkill<State = RelatiGameState> {
    name: string;
    type: RelatiSkillType;
    detail: string;
    do(state: State): void;
}
