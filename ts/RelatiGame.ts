import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";

export class RelatiGame {
    public turn = 0;
    public playerCount: number;
    public players: RelatiPlayer[] = [];
    public steps: RelatiGameStep[] = [];

    constructor(
        public playerBadges: string[],
        public board: RelatiBoard
    ) {
        this.playerCount = playerBadges.length;

        for (var playerBadge of playerBadges) {
            var player = new RelatiPlayer(playerBadge, this);
            player.shuffle();
            player.draw(5);
            this.players.push(player);
        }
    }

    get nowPlayer() {
        return this.players[this.turn % this.playerCount];
    }
};

export interface RelatiGameState {
    game?: RelatiGame;
    grid?: RelatiGrid;
    player?: RelatiPlayer;
};

export interface RelatiGameStep {
    turn: RelatiGame["turn"];
    grid: RelatiGrid;
    role: RelatiRole;
}