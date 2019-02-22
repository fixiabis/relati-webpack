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
    exports.RelatiPath = {
        name: "連結規則",
        detail: "判斷是否能夠連結",
        allow: function (_a) {
            var owner = _a.owner, status = _a.status, role = _a.role, fromType = _a.fromType, toType = _a.toType;
            var paths = RelatiGridPathRouter(role.params[fromType], role.grid);
            for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
                var path = paths_1[_i];
                var target = path.target, routes = path.routes;
                if (reliable(target, owner, status) &&
                    relatiable(target, role.grid, toType)) {
                    if (unobstructed(routes))
                        return true;
                }
            }
            return false;
        },
        trace: function (_a) {
            var owner = _a.owner, status = _a.status, role = _a.role, fromType = _a.fromType, toType = _a.toType;
            var paths = RelatiGridPathRouter(role.params[fromType], role.grid);
            var traces = [];
            for (var _i = 0, paths_2 = paths; _i < paths_2.length; _i++) {
                var path = paths_2[_i];
                var target = path.target, routes = path.routes;
                if (reliable(target, owner, status) &&
                    relatiable(target, role.grid, toType)) {
                    if (unobstructed(routes))
                        traces.push(path);
                }
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
    function relatiable(fromGrid, toGrid, type) {
        var paths = RelatiGridPathRouter(fromGrid.role.params[type], fromGrid);
        for (var _i = 0, paths_3 = paths; _i < paths_3.length; _i++) {
            var path = paths_3[_i];
            if (path.target == toGrid)
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
    var cachedPath = {};
    function RelatiPathRouter(path) {
        if (cachedPath[path])
            return cachedPath[path];
        var paths = path.split("|");
        var traces = [];
        for (var _i = 0, paths_4 = paths; _i < paths_4.length; _i++) {
            var path = paths_4[_i];
            var directions = path.split(",");
            traces.push({
                target: directions.shift(),
                routes: directions.join(",")
            });
        }
        return cachedPath[path] = traces;
    }
    exports.RelatiPathRouter = RelatiPathRouter;
    var cachedGridPath = {};
    function RelatiGridPathRouter(path, grid) {
        if (!cachedGridPath[grid.coordinate])
            cachedGridPath[grid.coordinate] = {};
        if (cachedGridPath[grid.coordinate][path])
            return cachedGridPath[grid.coordinate][path];
        var directionPaths = RelatiPathRouter(path);
        var gridPaths = directionPaths.map(function (path) {
            return {
                target: grid.query(path.target),
                routes: grid.queries(path.routes)
            };
        });
        return cachedGridPath[grid.coordinate][path] = gridPaths;
    }
    exports.RelatiGridPathRouter = RelatiGridPathRouter;
    var RelatiPathParam;
    (function (RelatiPathParam) {
        RelatiPathParam.RemoteStable = GridBoard_1.Grid.getOriginalDirection([
            "IIH,II,I", "IIH,IH,I", "IIH,IH,H",
            "IHH,HH,H", "IHH,IH,I", "IHH,IH,H"
        ].join("|")).join("|");
        RelatiPathRouter(RelatiPathParam.RemoteStable);
        RelatiPathParam.RemoteNormal = GridBoard_1.Grid.getOriginalDirection("2O,O").join("|");
        RelatiPathRouter(RelatiPathParam.RemoteNormal);
        RelatiPathParam.Remote = [RelatiPathParam.RemoteNormal, RelatiPathParam.RemoteStable].join("|");
        RelatiPathRouter(RelatiPathParam.Remote);
        RelatiPathParam.Normal = GridBoard_1.Grid.getOriginalDirection("O").join("|");
        RelatiPathRouter(RelatiPathParam.Normal);
        RelatiPathParam.Common = [RelatiPathParam.Normal, RelatiPathParam.Remote].join("|");
        RelatiPathRouter(RelatiPathParam.Common);
    })(RelatiPathParam = exports.RelatiPathParam || (exports.RelatiPathParam = {}));
});
//# sourceMappingURL=RelatiPath.js.map