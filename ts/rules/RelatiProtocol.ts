import { RelatiRuleTraceable, RelatiRuleTraces } from "../RelatiRule";
import { RelatiRole, RelatiRoleStatus } from "../RelatiRole";
import { RelatiGrid, RelatiGridHasRole } from "../RelatiBoard";
import { Grid } from "../base/GridBoard";
import { RelatiPlayer } from "../RelatiPlayer";
import { JSONData } from "../Relati";

export type RelatiProtocolType = "relati-source" | "relati-target";
export type RelatiProtocolParams = RelatiRole["params"][RelatiProtocolType];

export type RelatiProtocolRuleState = {
    role: RelatiRole,
    sourceType: RelatiProtocolType,
    targetType: RelatiProtocolType,
    relyStatus: RelatiRoleStatus[]
};

export type RelatiProtocolRule = {
    parse(
        grid: RelatiGrid,
        protocol: RelatiProtocolParams
    ): RelatiRuleTraces,
    cache: JSONData<JSONData<RelatiRuleTraces>>
} & RelatiRuleTraceable<RelatiProtocolRuleState>;

export let RelatiProtocol: RelatiProtocolRule = {
    name: "Relati協定",
    detail: "判定是否符合Relati原則",
    allow({ role, role: { owner, grid }, sourceType, targetType, relyStatus }) {
        let protocolTraces = RelatiProtocol.parse(grid, role.params[targetType]);

        for (let { target, routes } of protocolTraces) {
            if (
                reliable(target, owner, relyStatus) &&
                relatiable(target, grid, sourceType) &&
                unobstructed(routes)
            ) return true;
        }

        return false;
    },
    trace({ role, role: { owner, grid }, sourceType, targetType, relyStatus }) {
        let traces: RelatiRuleTraces = [];
        let protocolTraces = RelatiProtocol.parse(grid, role.params[targetType]);

        for (let { target, routes } of protocolTraces) {
            if (
                reliable(target, owner, relyStatus) &&
                relatiable(target, grid, sourceType) &&
                unobstructed(routes)
            ) traces.push({ target, routes });
        }

        return traces;
    },
    parse(grid, protocol) {
        if (!RelatiProtocol.cache[grid.coordinate]) {
            RelatiProtocol.cache[grid.coordinate] = {};
        }

        if (RelatiProtocol.cache[grid.coordinate][protocol]) {
            return RelatiProtocol.cache[grid.coordinate][protocol];
        }

        let traces: RelatiRuleTraces = [];

        for (let routes of protocol.split(";")) {
            let route = routes.split(",");

            traces.push({
                target: grid.query(route.pop() as string),
                routes: grid.queries(route.join(","))
            });
        }

        return RelatiProtocol.cache[grid.coordinate][protocol] = traces;
    },
    cache: {}
};

export namespace RelatiProtocolParams {
    export const RelatiNormal = Grid.getOriginalDirection("O").join(";");
    export const RelatiRemoteNormal = Grid.getOriginalDirection("O,2O").join(";");

    export const RelatiRemoteStable = Grid.getOriginalDirection(
        "I,IH,IIH;H,IH,IIH;I,II,IIH;I,IH,IHH;H,IH,IHH;H,HH,IHH"
    ).join(";");

    export const RelatiRemote = `${RelatiRemoteNormal};${RelatiRemoteStable}`;
    export const RelatiCommon = `${RelatiNormal};${RelatiRemote}`;
}

function reliable(
    grid: RelatiGrid,
    owner: RelatiPlayer,
    status: RelatiRoleStatus[]
): grid is RelatiGridHasRole {
    return (
        grid &&
        grid.role &&
        grid.role.owner == owner &&
        grid.role.is(status, "any")
    ) as boolean;
}

function relatiable(
    sourceGrid: RelatiGridHasRole,
    targetGrid: RelatiGrid,
    type: string
) {
    let protocolTrace = RelatiProtocol.parse(sourceGrid, sourceGrid.role.params[type]);
    for (let { target } of protocolTrace) if (target == targetGrid) return true;
    return false;
}

function unobstructed(middleGrids: RelatiGrid[]) {
    for (let middleGrid of middleGrids) {
        if (middleGrid.role) return false;
    }

    return true;
}