import { RelatiGameState } from "./RelatiGame";
import { RelatiRole } from "./RelatiRole";
export declare type RelatiSkillState = {
    role?: RelatiRole;
} & RelatiGameState;
export interface RelatiSkill<State = {}> {
    name: string;
    type: "action" | "effect";
    detail: string;
    do(state: RelatiSkillState & State): void;
}
