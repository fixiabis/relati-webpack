import { RelatiGameState } from "./RelatiGame";

export interface RelatiSkill<State = {}> {
    name: string;
    type: "action" | "effect";
    detail: string;
    do(state: RelatiGameState & State): void;
}