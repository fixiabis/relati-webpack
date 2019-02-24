import { RelatiPlayer, RelatiCard } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiRole, RelatiRoleType } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
import { RoleForcedSkill } from "./skills/RoleForcedSkill";
import { RoleStaticSkill } from "./skills/RoleStaticSkill";
import { RolePlacement } from "./skills/RolePlacement";
import { Judgement } from "./rules/Judgement";

export type RelatiGameResult = "O Win" | "X Win" | "Relati";

export class RelatiGame {
    public turn = 0;
    public playerCount: number = 0;
    public steps: RelatiGameStep[] = [];
    public result?: RelatiGameResult;

    constructor(
        public board: RelatiBoard,
        public players: RelatiPlayer[] = []
    ) { this.playerCount = players.length; }

    async start() {
        for (var player of this.players) {
            player.game = this;
            player.shuffle();
            player.draw(5);
        }

        while (!this.result) {
            var player = this.nowPlayer;
            player.draw();

            if (!Judgement.allow({ game: this })) {
                this.turn++;

                if (!Judgement.allow({ game: this })) {
                    this.result = "Relati";
                } else {
                    this.result = (
                        this.nowPlayer.badge + " Win"
                    ) as RelatiGameResult;
                }

                break;
            }

            var grid = await new Promise<RelatiGrid>(
                select => player.gridSelect = select
            );

            if (grid.role && grid.role.owner == player) {
                var skill = await new Promise<maybeExists<RelatiSkill>>(
                    select => player.skillSelect = select
                );

                if (!skill || skill.type != "action") continue;
                await this.execute(skill, grid.role);
                continue;
            }

            var card = await new Promise<maybeExists<RelatiCard>>(
                select => player.cardSelect = select
            );

            if (!card) continue;

            if (this.turn < this.playerCount) {
                if (!card.leader) continue;
                card = card.leader;
            }

            var role = new RelatiRole(grid, player, card);
            await this.execute(RolePlacement, role);
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
        game.steps.push({ turn, role, skill });
        await RoleForcedSkill.do({ game, role });
        await RoleStaticSkill.do({ game, role });
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

export interface RelatiInfo {
    name: string;
    detail: string;
};