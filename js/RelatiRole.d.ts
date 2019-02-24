import { RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiSkill } from "./RelatiSkill";
import { RelatiInfo } from "./RelatiGame";
export declare type RelatiRoleType = "normal" | "knight" | "wizard" | "leader";
export interface RelatiRoleConstructor {
    info: RelatiRoleInfo;
    new (grid: RelatiGrid, owner: RelatiPlayer, type?: RelatiRoleType): RelatiRole;
}
export interface RelatiRole {
    is(status: RelatiRoleStatus): boolean;
    is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
}
export declare class RelatiRole {
    grid: RelatiGrid;
    owner: RelatiPlayer;
    type: RelatiRoleType;
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
    constructor(grid: RelatiGrid, owner: RelatiPlayer, type?: RelatiRoleType);
    gain(...status: RelatiRoleStatus[]): void;
    lost(...status: RelatiRoleStatus[]): void;
}
export declare namespace RelatiRoleStatus {
    type Relati = ("relati-launcher" | "relati-repeater" | "relati-receiver");
    var Relati: string[];
}
export declare type RelatiRoleStatus = (RelatiRoleStatus.Relati);
export interface RelatiRoleInfo extends RelatiInfo {
    status?: RelatiRole["status"];
    points?: RelatiRole["points"];
    params?: RelatiRole["params"];
    skills?: RelatiRole["status"];
}
