import { RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiRoleStatus } from "./RelatiRoleStatus";
import { RelatiSkill } from "./RelatiSkill";

export type RelatiRoleType = "normal" | "knight" | "wizard" | "leader";

export interface RelatiRole {
    is(status: RelatiRoleStatus): boolean;
    is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
}

export class RelatiRole {
    public status: { [status: string]: boolean } = {};
    public points: { [points: string]: number } = {};
    public params: { [params: string]: string } = {};
    public skills: RelatiSkill[] = [];

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

    gain(...statusList: RelatiRoleStatus[]) {
        for (var name of statusList) {
            this.status[name] = true;
        }
    }

    lost(...statusList: RelatiRoleStatus[]) {
        for (var name of statusList) {
            this.status[name] = false;
        }
    }
}