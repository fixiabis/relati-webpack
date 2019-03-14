import { RelatiRuleTrace, RelatiRuleTraceable } from "../RelatiRule";
import { RelatiRole, RelatiRoleStatus } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
export interface RelatiProtocolState {
    role: RelatiRole;
    type: {
        from: string;
        to: string;
    };
    status: RelatiRoleStatus[];
}
export declare type RelatiProtocolRule = RelatiRuleTraceable<RelatiProtocolState>;
export declare let RelatiProtocol: RelatiProtocolRule;
export interface RelatiPathTrace {
    target: string;
    routes: string;
}
export declare function RelatiProtocolRouter(path: string): RelatiPathTrace[];
export declare function RelatiProtocolRouter(path: string, grid: RelatiGrid): RelatiRuleTrace[];
export declare namespace RelatiProtocolParam {
    function parse(directionCommands: string | string[]): string;
    const RemoteStable: string;
    const RemoteNormal: string;
    const Remote: string;
    const Normal: string;
    const Common: string;
}
