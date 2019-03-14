(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../base/GridBoard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridBoard_1 = require("../base/GridBoard");
    ;
    exports.RelatiProtocol = {
        name: "連結協定",
        detail: "判斷連結是否符合規則",
        allow: function (_a) {
            var role = _a.role, _b = _a.type, from = _b.from, to = _b.to, status = _a.status;
            var owner = role.owner, source = role.grid;
            var pathTrace = RelatiProtocolRouter(role.params[to], source);
            for (var _i = 0, pathTrace_1 = pathTrace; _i < pathTrace_1.length; _i++) {
                var _c = pathTrace_1[_i], target = _c.target, routes = _c.routes;
                if (reliable(target, owner, status) &&
                    relatiable(target, source, from) &&
                    unobstructed(routes))
                    return true;
            }
            return false;
        },
        trace: function (_a) {
            var role = _a.role, _b = _a.type, from = _b.from, to = _b.to, status = _a.status;
            var traces = [];
            var owner = role.owner, grid = role.grid;
            var pathTrace = RelatiProtocolRouter(role.params[to], grid);
            for (var _i = 0, pathTrace_2 = pathTrace; _i < pathTrace_2.length; _i++) {
                var _c = pathTrace_2[_i], target = _c.target, routes = _c.routes;
                if (reliable(target, owner, status) &&
                    relatiable(target, grid, from) &&
                    unobstructed(routes))
                    traces.push({ target: target, routes: routes });
            }
            return traces;
        }
    };
    function reliable(grid, owner, status) {
        return (grid &&
            grid.role &&
            grid.role.owner == owner &&
            grid.role.is(status, "any"));
    }
    function relatiable(sourceGrid, targetGrid, type) {
        var paths = RelatiProtocolRouter(sourceGrid.role.params[type], sourceGrid);
        for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var path = paths_1[_i];
            if (path.target == targetGrid)
                return true;
        }
        return false;
    }
    function unobstructed(middleGrids) {
        for (var _i = 0, middleGrids_1 = middleGrids; _i < middleGrids_1.length; _i++) {
            var middleGrid = middleGrids_1[_i];
            if (middleGrid.role)
                return false;
        }
        return true;
    }
    ;
    var cachedRoute;
    function RelatiProtocolRouter(path, grid) {
        if (grid) {
            var pathTraces = cachedRoute[path] || RelatiProtocolRouter(path);
            var traces = [];
            for (var _i = 0, pathTraces_1 = pathTraces; _i < pathTraces_1.length; _i++) {
                var trace = pathTraces_1[_i];
                traces.push({
                    target: grid.query(trace.target),
                    routes: grid.queries(trace.routes)
                });
            }
            return traces;
        }
        else {
            if (cachedRoute[path])
                return cachedRoute[path];
            var paths = path.split("|");
            var traces = [];
            for (var _a = 0, paths_2 = paths; _a < paths_2.length; _a++) {
                var path_1 = paths_2[_a];
                var directions = path_1.split(",");
                traces.push({
                    target: directions.shift(),
                    routes: directions.join(",")
                });
            }
            return cachedRoute[path] = traces;
        }
    }
    exports.RelatiProtocolRouter = RelatiProtocolRouter;
    ;
    var RelatiProtocolParam;
    (function (RelatiProtocolParam) {
        function parse(directionCommands) {
            if (directionCommands instanceof Array) {
                directionCommands = directionCommands.join("|");
            }
            var directions = GridBoard_1.Grid.getOriginalDirection(directionCommands).join("|");
            RelatiProtocolRouter(directions);
            return directions;
        }
        RelatiProtocolParam.parse = parse;
        ;
        RelatiProtocolParam.RemoteStable = parse([
            "IIH,II,I", "IIH,IH,I", "IIH,IH,H",
            "IHH,HH,H", "IHH,IH,I", "IHH,IH,H"
        ]);
        RelatiProtocolRouter(RelatiProtocolParam.RemoteStable);
        RelatiProtocolParam.RemoteNormal = parse("2O,O");
        RelatiProtocolRouter(RelatiProtocolParam.RemoteNormal);
        RelatiProtocolParam.Remote = [RelatiProtocolParam.RemoteNormal, RelatiProtocolParam.RemoteStable].join("|");
        RelatiProtocolRouter(RelatiProtocolParam.Remote);
        RelatiProtocolParam.Normal = parse("O");
        RelatiProtocolRouter(RelatiProtocolParam.Normal);
        RelatiProtocolParam.Common = [RelatiProtocolParam.Normal, RelatiProtocolParam.Remote].join("|");
        RelatiProtocolRouter(RelatiProtocolParam.Common);
    })(RelatiProtocolParam = exports.RelatiProtocolParam || (exports.RelatiProtocolParam = {}));
});
//# sourceMappingURL=RelatiProtocol.js.map