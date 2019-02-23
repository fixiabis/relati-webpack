import { RelatiRuleTraceable, RelatiRuleTrace } from "../RelatiRule";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiRoleStatus, RelatiRole } from "../RelatiRole";
import { RelatiPlayer } from "../RelatiPlayer";
interface RelatiPathState {
    owner: RelatiPlayer;
    status: RelatiRoleStatus[];
    role: RelatiRole;
    fromType: string;
    toType: string;
}
declare type RelatiPathRule = RelatiRuleTraceable<RelatiPathState>;
export declare var RelatiPath: RelatiPathRule;
export interface RelatiPath {
    target: string;
    routes: string;
}
export declare function RelatiPathRouter(path: string): RelatiPath[];
export declare type RelatiGridPath = RelatiRuleTrace;
export declare function RelatiGridPathRouter(path: string, grid: RelatiGrid): RelatiGridPath[];
export declare namespace RelatiPathParam {
    var RemoteStable: string;
    var RemoteNormal: string;
    var Remote: string;
    var Normal: string;
    var Common: string;
    function parse(directionCommands: string | string[]): string;
}
export {};
