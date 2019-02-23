import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard } from "./RelatiBoard";
import { RelatiRole } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
import { RoleForcedSkill } from "./skills/RoleForcedSkill";
import { RoleStaticSkill } from "./skills/RoleStaticSkill";

export class RelatiGame {
    public turn = 0;
    public playerCount: number = 0;
    public steps: RelatiGameStep[] = [];

    constructor(
        public board: RelatiBoard,
        public players: RelatiPlayer[] = []
    ) { this.playerCount = players.length; }

    start() {
        for (var player of this.players) {
            player.joinedGame = this;
            player.shuffle();
            player.draw(5);
        }
    }

    get nowPlayer() {
        return this.players[this.turn % this.playerCount];
    }

    async execute(skill: RelatiSkill, role: RelatiRole) {
        var game = this;
        if (game.nowPlayer != role.owner) return console.warn("尚未輪到該玩家");
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