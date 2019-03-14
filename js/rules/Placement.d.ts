import { RelatiRule } from "../RelatiRule";
import { RelatiRole } from "../RelatiRole";
import { RelatiGame } from "../RelatiGame";
export interface PlacementState {
    game: RelatiGame;
    role: RelatiRole;
}
export declare type PlacementRule = RelatiRule<PlacementState>;
export declare var Placement: PlacementRule;
