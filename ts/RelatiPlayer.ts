import { RelatiRoleConstructor } from "./RelatiRole";
import { RelatiGrid } from "./RelatiBoard";
import { RolePlacement } from "./skills/RolePlacement";
import { RelatiGame } from "./RelatiGame";

export class RelatiPlayer {
    public deck: RelatiRoleConstructor[] = [];
    public hand: RelatiRoleConstructor[] = [];
    public roleSelected?: RelatiRoleConstructor;

    constructor(public badge: string, public game: RelatiGame) { }

    draw(times = 1) {
        for (var i = 0; i < times; i++) this.hand.push(
            this.deck.pop() as RelatiRoleConstructor
        );
    }

    shuffle() {
        var cardCount = this.deck.length;

        for (var i = 0; i < cardCount; i++) {
            var j = (Math.random() * cardCount) | 0;
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    selectRole(roleIndex: number) {
        return this.roleSelected = this.hand.splice(roleIndex, 1)[0];
    }

    selectGrid(grid: RelatiGrid) {
        if (!this.roleSelected) return;
        var roleConstructor = this.roleSelected;
        var role = new roleConstructor(grid, this);
        RolePlacement.do({ game: this.game, role });
    }
}