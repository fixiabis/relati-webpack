import { RelatiGameState, RelatiInfo } from "./RelatiGame";
export declare type RelatiSkillType = "action" | "effect";
export interface RelatiSkill<State = RelatiGameState> extends RelatiInfo {
    type: RelatiSkillType;
    do(state: State): void;
}
