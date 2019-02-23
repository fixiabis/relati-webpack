import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";

export class RelatiGame {
    public turn = 0;
    public playerCount: number;
    public players: RelatiPlayer[] = [];
    public steps: RelatiGameStep[] = [];
    public selectedGrid?: RelatiGrid;

    constructor(
        public playerBadges: string[],
        public board: RelatiBoard
    ) {
        this.playerCount = playerBadges.length;

        for (var playerBadge of playerBadges) {
            var player = new RelatiPlayer(playerBadge, this);
            this.players.push(player);
        }
    }

    get nowPlayer() {
        return this.players[this.turn % this.playerCount];
    }

    start() {
        for (var player of this.players) {
            player.shuffle();
            player.draw(5);
        }
    }
};

export interface RelatiGameState {
    game: RelatiGame;
    role: RelatiRole;
};

export interface RelatiGameStep {
    turn: RelatiGame["turn"];
    role: RelatiRole;
};