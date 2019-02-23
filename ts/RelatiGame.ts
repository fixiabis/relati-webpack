import { RelatiPlayer, RelatiCard } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiRole, RelatiRoleConstructor, RelatiRoleType, RelatiRoleInfo } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";
import { RoleForcedSkill } from "./skills/RoleForcedSkill";
import { RoleStaticSkill } from "./skills/RoleStaticSkill";
import { RolePlacement } from "./skills/RolePlacement";

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

        console.log("遊戲開始");

        while (!this.result) {
            var player = this.nowPlayer;

            console.log("等待選取格子");

            var grid = await new Promise<RelatiGrid>(
                resolve => player.gridSelect = resolve
            );

            console.log(`選取格子:${grid.coordinate}`);

            if (grid.role && grid.role.owner == player) {
                console.log("等待選取技能");

                var skill = await new Promise<RelatiSkill | undefined>(
                    resolve => player.skillSelect = resolve
                );

                if (!skill) continue;
                console.log(`選取技能:${skill.name}`);
                this.execute(skill, grid.role);
                continue;
            }

            console.log("等待選取卡牌");
            var card = await new Promise<RelatiCard | undefined>(
                resolve => player.cardSelect = resolve
            );

            if (!card) continue;
            console.log(`選取卡牌:${(card.info as RelatiRoleInfo).name}`)

            var type: RelatiRoleType | undefined;
            if (this.turn < this.playerCount) type = "leader";
            var role = new card(grid, player, type);

            console.log("放置角色");
            this.execute(RolePlacement, role);
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