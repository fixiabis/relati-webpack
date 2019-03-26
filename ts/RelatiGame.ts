import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiBoard } from "./RelatiBoard";
import { RelatiRole, RelatiRoleInfo } from "./RelatiRole";
import { RelatiSkill } from "./RelatiSkill";

export interface RelatGame {
    do(type: "role-create", role: RelatiRole): Promise<void>;
    do(type: "role-update", role: RelatiRole, info: RelatiRoleInfo): Promise<void>;
    do(type: "role-delete", role: RelatiRole): Promise<void>;
    do(type: "role-leader", role: RelatiRole): Promise<void>;
    do(type: "next-player"): Promise<void>
}

export class RelatiGame {
    public turn = 0;
    public eventPrevented = false;

    private listeners: JSONData<RelatiGameEvent[]> = {
        "role-create": [],
        "role-update": [],
        "role-delete": [],
        "role-leader": [],
        "next-player": []
    };

    constructor(
        public board: RelatiBoard,
        public players: RelatiPlayer[]
    ) { }

    get playerCount() { return this.players.length; }
    get playerNow() { return this.players[this.turn % this.playerCount]; }

    on(
        type: RelatiGameEventType,
        owner: RelatiRole,
        skill: RelatiSkill<RelatiGameEventState>
    ) { this.listeners[type].push({ owner, skill }); }

    do(type: RelatiGameEventType, role?: RelatiRole, info?: RelatiRoleInfo) {
        return new Promise((resolve, reject) => {
            this.eventPrevented = false;

            for (let { owner, skill } of this.listeners[type]) {
                skill.do({ game: this, owner, role, info });
                if (this.eventPrevented) return reject();
            }

            switch (type) {
                case "role-create":
                    (role as RelatiRole).grid.role = role;
                    (role as RelatiRole).born(this);
                    break;

                case "role-update":
                    for (let type in info) {
                        for (let status in (info as JSONData)[type]) {
                            (role as JSONData)[type][status] = (info as JSONData)[type][status];
                        }
                    }

                    break;
                
                case "role-delete":
                    delete (role as RelatiRole).grid.role;
                    break;

                case "role-leader":
                    (role as RelatiRole).owner.leader = role;
                    break;
                
                case "next-player":
                    this.turn++;
            }

            resolve();
        });
    }
}

export interface RelatiGameState {
    game: RelatiGame;
    role: RelatiRole;
}

export type RelatiGameEventType = (
    "role-create" |
    "role-update" |
    "role-delete" |
    "role-leader" |
    "next-player"
);

export interface RelatiGameEvent {
    owner: RelatiRole;
    skill: RelatiSkill<RelatiGameEventState>;
}

export interface RelatiGameEventState {
    game: RelatiGame;
    role?: RelatiRole;
    info?: RelatiRoleInfo;
    owner: RelatiRole;
}