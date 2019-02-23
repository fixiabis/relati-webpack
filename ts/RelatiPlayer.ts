import { RelatiRoleConstructor, RelatiRoleType } from "./RelatiRole";
import { RelatiGame } from "./RelatiGame";
import { RelatiGrid } from "./RelatiBoard";
import { RelatiSkill } from "./RelatiSkill";

export type RelatiCard = RelatiRoleConstructor;
export type RelatiPlayerBadge = "O" | "X";

export class RelatiPlayer {
    public deck: RelatiCard[] = [];
    public hand: RelatiCard[] = [];
    public game?: RelatiGame;
    public gridSelect?: (value: RelatiGrid) => void;
    public cardSelect?: (value?: RelatiCard) => void;
    public skillSelect?: (value?: RelatiSkill) => void;

    constructor(public badge: string) { }

    draw(times = 1) {
        for (var i = 0; i < times; i++) this.hand.push(
            this.deck.pop() as RelatiCard
        );
    }

    shuffle() {
        var cardCount = this.deck.length;

        for (var i = 0; i < cardCount; i++) {
            var j = (Math.random() * cardCount) | 0;
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    join(game: RelatiGame) {
        game.players.push(this);
        game.playerCount = game.players.length;
    }

    selectCard(cardIndex: number) {
        if (this.cardSelect) {
            this.cardSelect(this.hand.splice(cardIndex, 1)[0]);
        }
    }

    selectGrid(grid: RelatiGrid) {
        if (this.gridSelect) this.gridSelect(grid);
    }

    selectSkill(skill: RelatiSkill) {
        if (this.skillSelect) this.skillSelect(skill);
    }
}