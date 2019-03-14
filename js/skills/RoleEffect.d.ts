import { RelatiSkill } from "../RelatiSkill";
import { RelatiGame } from "../RelatiGame";
import { RelatiRole } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiCard } from "../RelatiPlayer";
export interface RoleEffectState {
    game: RelatiGame;
    grid?: RelatiGrid;
    role?: RelatiRole;
    card?: RelatiCard;
    skill?: RelatiSkill;
}
export declare type RoleEffectSkill = RelatiSkill<RoleEffectState>;
export declare let RoleEffect: RoleEffectSkill;
