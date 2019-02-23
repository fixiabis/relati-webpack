import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiRole, RelatiRoleType } from "./RelatiRole";
import { RolePlacement } from "./skills/RolePlacement";
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

    selectGrid(
        grid: RelatiGrid,
        roleType: RelatiRoleType = "normal",
        owner: RelatiPlayer
    ) {
        var game = this;

        if (owner != game.nowPlayer) return;
        if (!owner.roleSelected) return;

        var roleConstructor = owner.roleSelected;
        if (game.turn < game.playerCount) roleType = "leader";
        var role = new roleConstructor(grid, owner, roleType);
        RolePlacement.do({ game, role });

        if (!grid.role) {
            delete owner.roleSelected;
            owner.hand.push(roleConstructor);
        } else {
            RoleForcedSkill.do({ game });
            RoleStaticSkill.do({ game });
        }
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