import { RelatiGrid } from "./RelatiBoard";
import { RelatiGameState } from "./RelatiGame";
export interface RelatiRule<State = RelatiGameState> {
    name: string;
    detail: string;
    allow(state: State): boolean;
}
export interface RelatiRuleTraceable<State = RelatiGameState> extends RelatiRule<State> {
    trace(state: State): RelatiRuleTrace[];
}
export interface RelatiRuleTrace {
    target: RelatiGrid;
    routes: RelatiGrid[];
}
