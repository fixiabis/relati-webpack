import { RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiSkill } from "./RelatiSkill";
import { RelatiInfo } from "./RelatiGame";

export type RelatiRoleType = "normal" | "knight" | "wizard" | "leader";
export interface RelatiRoleConstructor {
    info: RelatiRoleInfo;

    new(
        grid: RelatiGrid,
        owner: RelatiPlayer,
        type?: RelatiRoleType
    ): RelatiRole;

    new(
        grid: RelatiGrid,
        owner: RelatiPlayer,
        info: RelatiRoleInfo
    ): RelatiRole;
}

export interface RelatiRole {
    is(status: RelatiRoleStatus): boolean;
    is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
}

export class RelatiRole {
    public type: RelatiRoleType;
    public info: RelatiRoleInfo = {
        type: "normal",
        name: "無名",
        detail: "沒有那種東西"
    };
    public status: { [status: string]: boolean } = {};
    public points: { [points: string]: number } = {};
    public params: { [params: string]: string } = {};
    public skills: RelatiSkill[] = [];

    constructor(
        public grid: RelatiGrid,
        public owner: RelatiPlayer,
        param: RelatiRoleType | RelatiRoleInfo = "normal"
    ) {
        if (typeof param == "string") {
            this.type = param;
        } else {
            var { type, status, points, params, skills } = param;

            this.type = type;
            this.info = param;

            if (status) this.gain(...status);
            if (points) Object.assign(this.points, points);
            if (params) Object.assign(this.params, params);
            if (skills) Object.assign(this.skills, skills);
        }
    }

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

export interface RelatiRoleInfo extends RelatiInfo {
    type: RelatiRoleType;
    status?: RelatiRoleStatus[];
    points?: RelatiRole["points"];
    params?: RelatiRole["params"];
    skills?: RelatiRole["skills"];
    leader?: RelatiRoleInfo
}