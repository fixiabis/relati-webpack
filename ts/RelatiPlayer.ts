import { RelatiRoleConstructor, RelatiRoleType } from "./RelatiRole";
import { RelatiGame } from "./RelatiGame";

export class RelatiPlayer {
    public deck: RelatiRoleConstructor[] = [];
    public hand: RelatiRoleConstructor[] = [];
    public roleSelected?: RelatiRoleConstructor;
    public joinedGame?: RelatiGame;

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

    join(game: RelatiGame) {
        game.players.push(this);
        game.playerCount = game.players.length;
    }

    selectRole(roleIndex: number) {
        return this.roleSelected = this.hand.splice(roleIndex, 1)[0];
    }
}