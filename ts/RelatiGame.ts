import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
import { RoleForcedSkill } from "./skills/RoleForcedSkill";
import { RoleStaticSkill } from "./skills/RoleStaticSkill";

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

    async execute(skill: RelatiSkill, role: RelatiRole) {
        var game = this;
        var { turn } = game;
        await skill.do({ game, role });
        await RoleForcedSkill.do({ game, role });
        await RoleStaticSkill.do({ game, role });
        game.steps.push({ turn, role, skill });
    }
};

export interface RelatiGameState {
    game: RelatiGame;
    role: RelatiRole;
};

export interface RelatiGameStep {
    turn: RelatiGame["turn"];
    role: RelatiRole;
    skill: RelatiSkill;
};