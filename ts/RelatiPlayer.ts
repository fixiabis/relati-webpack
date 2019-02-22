import { RelatiRole, RelatiRoleConstructor } from "./RelatiRole";

export class RelatiPlayer {
    public deck: RelatiRoleConstructor[] = [];
    public hand: RelatiRoleConstructor[] = [];

    constructor(public badge: string) { }

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

    selectRole(role: RelatiRoleConstructor) {
        var newOnHand = [];
        var selected = false;

        for (var card of this.hand) {
            if (card == role && !selected) selected = true;
            else newOnHand.push(card);
        }

        this.hand = newOnHand;
    }
}