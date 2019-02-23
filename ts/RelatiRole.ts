import { RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiSkill } from "./RelatiSkill";
import { RolePlacement } from "./skills/RolePlacement";

export type RelatiRoleType = "normal" | "knight" | "wizard" | "leader";
export type RelatiRoleConstructor = new (
    grid: RelatiGrid,
    owner: RelatiPlayer,
    type?: RelatiRoleType
) => RelatiRole;

export interface RelatiRole {
    is(status: RelatiRoleStatus): boolean;
    is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
}

export class RelatiRole {
    public status: { [status: string]: boolean } = {};
    public points: { [points: string]: number } = {};
    public params: { [params: string]: string } = {};
    public skills: RelatiSkill[] = [RolePlacement];

    constructor(
        public grid: RelatiGrid,
        public owner: RelatiPlayer,
        public type: RelatiRoleType = "normal"
    ) { }

    is(status: RelatiRoleStatus | RelatiRoleStatus[], type?: "all" | "any") {
        if (typeof status === "string") return this.status[status];

        if (type === "any") {
            for (var name of status) {
                if (this.status[name]) return true;
            }

            return false;
        } else {
            for (var name of status) {
                if (!this.status[name]) return false;
            }

            return true;
        }
    }

    gain(...status: RelatiRoleStatus[]) {
        for (var name of status) this.status[name] = true;
    }

    lost(...status: RelatiRoleStatus[]) {
        for (var name of status) this.status[name] = false;
    }
}

export namespace RelatiRoleStatus {
    export type Relati = (
        "relati-launcher" |
        "relati-repeater" |
        "relati-receiver"
    );

    export var Relati = [
        "relati-launcher",
        "relati-repeater",
        "relati-receiver"
    ];
}

export type RelatiRoleStatus = (
    RelatiRoleStatus.Relati
);

export interface RelatiRoleInfo {
    name: string;
    detail: string;
    status?: RelatiRole["status"];
    points?: RelatiRole["points"];
    params?: RelatiRole["params"];
    skills?: RelatiRole["status"];
}