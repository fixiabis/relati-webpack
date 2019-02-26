import { RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiSkill } from "./RelatiSkill";
import { RelatiInfo } from "./RelatiGame";
export declare type RelatiRoleType = "normal" | "knight" | "wizard" | "leader";
export interface RelatiRoleConstructor {
    info: RelatiRoleBasicInfo;
    new (grid: RelatiGrid, owner: RelatiPlayer, type?: RelatiRoleType): RelatiRole;
    new (grid: RelatiGrid, owner: RelatiPlayer, info: RelatiRoleInfoParam): RelatiRole;
}
export interface RelatiRole {
    is(status: RelatiRoleStatus): boolean;
    is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
}
export declare class RelatiRole {
    grid: RelatiGrid;
    owner: RelatiPlayer;
    type: RelatiRoleType;
    info: RelatiRoleBasicInfo;
    status: {
        [status: string]: boolean;
    };
    points: {
        [points: string]: number;
    };
    params: {
        [params: string]: string;
    };
    skills: RelatiSkill[];
    constructor(grid: RelatiGrid, owner: RelatiPlayer, param?: RelatiRoleInfoParam | RelatiRoleType);
    gain(...status: RelatiRoleStatus[]): void;
    lost(...status: RelatiRoleStatus[]): void;
}
export declare namespace RelatiRoleStatus {
    type Relati = ("relati-launcher" | "relati-repeater" | "relati-receiver");
    var Relati: string[];
}
export declare type RelatiRoleStatus = (RelatiRoleStatus.Relati);
export interface RelatiRoleBasicInfo extends RelatiInfo {
    type: RelatiRoleType;
    status?: RelatiRole["status"];
    points?: RelatiRole["points"];
    params?: RelatiRole["params"];
    skills?: RelatiRole["skills"];
    leader?: RelatiRoleInfoParam;
}
export declare type RelatiRoleInfoParam = RelatiInfo & {
    status?: RelatiRoleStatus[];
    points?: RelatiRole["points"];
    params?: RelatiRole["params"];
    skills?: RelatiRole["skills"];
    leader?: RelatiRoleInfoParam;
} & ({
    type: "normal" | "knight" | "wizard";
    points: {
        "summon-cost": number;
    };
} | {
    type: "leader";
    points: {
        "summon-assets": number;
    };
});
