import { RelatiGrid } from "./RelatiBoard";
import { RelatiGameState } from "./RelatiGame";

export interface RelatiRule<State = {}> {
    name: string;
    detail: string;
    allow(state: RelatiGameState & State): boolean;
}

export interface RelatiRuleTraceable<State = {}> extends RelatiRule<State> {
    trace(state: RelatiGameState & State): RelatiRuleTrace[];
}

export interface RelatiRuleTrace {
    target: RelatiGrid;
    routes: RelatiGrid[];
}