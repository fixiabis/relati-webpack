import { RelatiGameState, RelatiInfo } from "./RelatiGame";
export declare type RelatiSkillType = "action" | "effect" | "static" | "forced";
export interface RelatiSkill<State = RelatiGameState> extends RelatiInfo {
    type: RelatiSkillType;
    do(state: State): void;
}
