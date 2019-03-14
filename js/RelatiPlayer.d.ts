import { RelatiRoleInfo, RelatiRole } from "./RelatiRole";
import { RelatiGame } from "./RelatiGame";
import { RelatiGrid } from "./RelatiBoard";
import { RelatiSkill } from "./RelatiSkill";
export declare type RelatiCard = RelatiRoleInfo;
export declare type RelatiAction<value> = ((value: value) => void);
export declare class RelatiPlayer {
    name: string;
    game?: RelatiGame;
    deck: RelatiCard[];
    hand: RelatiCard[];
    leader?: RelatiRole;
    gridSelect?: RelatiAction<RelatiGrid>;
    cardSelect?: RelatiAction<RelatiCard>;
    skillSelect?: RelatiAction<RelatiSkill>;
    constructor(name: string);
    draw(times?: number): void;
    shuffle(): void;
    join(game: RelatiGame): void;
    selectCard(cardIndex: number): void;
    selectGrid(grid: RelatiGrid): void;
    selectSkill(skill: RelatiSkill): void;
}
export declare type RelatiPlayerHasLeader = RelatiPlayer & {
    leader: RelatiRole;
};
