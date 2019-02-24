import { RelatiRoleConstructor } from "./RelatiRole";
import { RelatiGame } from "./RelatiGame";
import { RelatiGrid } from "./RelatiBoard";
import { RelatiSkill } from "./RelatiSkill";
export declare type RelatiCard = RelatiRoleConstructor;
export declare type RelatiPlayerBadge = "O" | "X";
export declare class RelatiPlayer {
    badge: RelatiPlayerBadge;
    deck: RelatiCard[];
    hand: RelatiCard[];
    game?: RelatiGame;
    gridSelect?: (value: RelatiGrid) => void;
    cardSelect?: (value?: RelatiCard) => void;
    skillSelect?: (value?: RelatiSkill) => void;
    constructor(badge: RelatiPlayerBadge);
    draw(times?: number): void;
    shuffle(): void;
    join(game: RelatiGame): void;
    selectCard(cardIndex: number): void;
    selectGrid(grid: RelatiGrid): void;
    selectSkill(skill: RelatiSkill): void;
}
