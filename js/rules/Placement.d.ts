import { RelatiRule } from "../RelatiRule";
import { RelatiRole } from "../RelatiRole";
import { RelatiPlayer } from "../RelatiPlayer";
import { RelatiGame } from "../RelatiGame";
export declare type PlacementState = {
    role: RelatiRole;
    owner: RelatiPlayer;
    game: RelatiGame;
};
export declare type PlacementRule = RelatiRule<PlacementState>;
export declare var Placement: PlacementRule;
