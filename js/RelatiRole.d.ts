import { RelatiInfo } from "./Relati";
import { RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiSkill } from "./RelatiSkill";
export declare type RelatiRoleType = "normal" | "knight" | "wizard" | "leader";
export interface RelatiRole {
    is(status: RelatiRoleStatus): boolean;
    is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
}
export declare class RelatiRole {
    grid: RelatiGrid;
    owner: RelatiPlayer;
    type: RelatiRoleType;
    info: RelatiRoleInfo;
    name: string;
    detail: string;
    status: JSONData<boolean>;
    points: JSONData<number>;
    params: JSONData<string>;
    skills: RelatiSkill[];
    constructor(grid: RelatiGrid, owner: RelatiPlayer, param?: RelatiRoleInfo | RelatiRoleType);
    gain(...status: RelatiRoleStatus[]): void;
    lost(...status: RelatiRoleStatus[]): void;
}
export declare namespace RelatiRoleStatus {
    type Relati = ("relati-launcher" | "relati-repeater" | "relati-receiver");
    let Relati: string[];
}
export declare type RelatiRoleStatus = (RelatiRoleStatus.Relati);
export declare type RelatiRoleInfo = RelatiInfo & {
    type: RelatiRoleType;
    gain?: RelatiRoleStatus[];
    lost?: RelatiRoleStatus[];
    status?: RelatiRole["status"];
    points?: RelatiRole["points"];
    params?: RelatiRole["params"];
    skills?: RelatiRole["skills"];
    leader?: RelatiRoleInfo;
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
