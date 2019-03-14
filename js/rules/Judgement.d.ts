import { RelatiRule } from "../RelatiRule";
import { RelatiGame } from "../RelatiGame";
export interface JudgementState {
    game: RelatiGame;
}
export declare type JudgementRule = RelatiRule<JudgementState>;
export declare var Judgement: JudgementRule;
