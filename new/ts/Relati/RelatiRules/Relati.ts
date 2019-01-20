namespace Relati {
    export namespace RelatiRules {
        export var RelatiSourceRoleStatus: RelatiRoleStatus[] = [
            "relati-launcher",
            "relati-repeater"
        ];

        export var Relati: RelatiRuleTraceable = {
            allow(state) {
                return (
                    RelatiNormal.allow(state) ||
                    RelatiRemote.allow(state)
                );
            },
            trace(state) {
                return [
                    ...RelatiNormal.trace(state),
                    ...RelatiRemote.trace(state)
                ];
            }
        };

        export var RelatiNormalSourceRoleStatus: RelatiRoleStatus[] = [
            "relati-normal-launcher",
            "relati-normal-repeater",
            ...RelatiSourceRoleStatus
        ];

        export var RelatiNormal: RelatiRuleTraceable = {
            allow({ owner, grid }) {
                if (!grid) return false;

                var sourceGrids = grid.queries("O");

                for (var i = 0; i < sourceGrids.length; i++) {
                    var sourceGrid = sourceGrids[i];

                    var sourceReliable = (
                        sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(
                            RelatiNormalSourceRoleStatus,
                            "any"
                        )
                    );

                    if (sourceReliable) return true;
                }

                return false;
            },
            trace({ owner, grid }) {
                if (!grid) return [];

                var sourceGrids = grid.queries("O");
                var ruleTraces: RelatiRuleTrace[] = [];

                for (var i = 0; i < sourceGrids.length; i++) {
                    var sourceGrid = sourceGrids[i];

                    var sourceReliable = (
                        sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(
                            RelatiNormalSourceRoleStatus,
                            "any"
                        )
                    );

                    if (sourceReliable) {
                        ruleTraces.push({
                            target: sourceGrid,
                            routes: []
                        });
                    }
                }

                return ruleTraces;
            }
        };

        export var RelatiRemoteSourceRoleStatus: RelatiRoleStatus[] = [
            "relati-remote-launcher",
            "relati-remote-repeater",
            ...RelatiSourceRoleStatus
        ];

        export var RelatiRemote: RelatiRuleTraceable = {
            allow(state) {
                return (
                    RelatiRemoteNormal.allow(state) ||
                    RelatiRemoteStable.allow(state)
                );
            },
            trace(state) {
                return [
                    ...RelatiRemoteNormal.trace(state),
                    ...RelatiRemoteStable.trace(state)
                ];
            }
        };

        export var RelatiRemoteNormalSourceRoleStatus: RelatiRoleStatus[] = [
            "relati-remote-normal-launcher",
            "relati-remote-normal-repeater",
            ...RelatiRemoteSourceRoleStatus
        ];

        export var RelatiRemoteNormal: RelatiRuleTraceable = {
            allow({ owner, grid }) {
                if (!grid) return false;

                var sourceGrids = grid.queries("2O,O");

                for (var i = 0; i < sourceGrids.length; i += 2) {
                    var sourceGrid = sourceGrids[i];
                    var middleGrid = sourceGrids[i + 1];

                    var sourceReliable = (
                        sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(
                            RelatiRemoteNormalSourceRoleStatus,
                            "any"
                        )
                    );

                    if (!sourceReliable) continue;
                    if (!middleGrid.role) return true;
                }

                return false;
            },
            trace({ owner, grid }) {
                if (!grid) return [];

                var sourceGrids = grid.queries("2O,O");
                var ruleTraces: RelatiRuleTrace[] = [];

                for (var i = 0; i < sourceGrids.length; i += 2) {
                    var sourceGrid = sourceGrids[i];
                    var middleGrid = sourceGrids[i + 1];

                    var sourceReliable = (
                        sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(
                            RelatiRemoteNormalSourceRoleStatus,
                            "any"
                        )
                    );

                    if (!sourceReliable) continue;
                    if (!middleGrid.role) {
                        ruleTraces.push({
                            target: sourceGrid,
                            routes: [middleGrid]
                        });
                    }
                }

                return ruleTraces;
            }
        };

        export var RelatiRemoteStableSourceRoleStatus: RelatiRoleStatus[] = [
            "relati-remote-stable-launcher",
            "relati-remote-stable-repeater",
            ...RelatiRemoteSourceRoleStatus
        ];

        export var RelatiRemoteStable: RelatiRuleTraceable = {
            allow({ owner, grid }) {
                if (!grid) return false;

                var sourceGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");

                for (var i = 0; i < sourceGrids.length; i += 5) {
                    var sourceGrid = sourceGrids[i];

                    var sourceReliable = (
                        sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(
                            RelatiRemoteStableSourceRoleStatus,
                            "any"
                        )
                    );

                    if (!sourceReliable) continue;

                    var middleGrids = sourceGrids.slice(i + 1, i + 4);

                    for (var j = 1; j < middleGrids.length - 1; j++) {
                        var middleGrid1 = middleGrids[j];
                        var middleGrid2 = middleGrids[j + 1];

                        if (
                            !middleGrid1.role &&
                            !middleGrid2.role
                        ) return true;
                    }
                }

                return false;
            },
            trace({ owner, grid }) {
                if (!grid) return [];

                var sourceGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");
                var ruleTraces: RelatiRuleTrace[] = [];

                for (var i = 0; i < sourceGrids.length; i += 5) {
                    var sourceGrid = sourceGrids[i];

                    var sourceReliable = (
                        sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(
                            RelatiRemoteStableSourceRoleStatus,
                            "any"
                        )
                    );

                    if (!sourceReliable) continue;

                    var middleGrids = sourceGrids.slice(i + 1, i + 4);

                    for (var j = 1; j < middleGrids.length - 1; j++) {
                        var middleGrid1 = middleGrids[j];
                        var middleGrid2 = middleGrids[j + 1];

                        if (
                            !middleGrid1.role &&
                            !middleGrid2.role
                        ) {
                            ruleTraces.push({
                                target: sourceGrid,
                                routes: [
                                    middleGrid1,
                                    middleGrid2
                                ]
                            });
                        }
                    }
                }

                return ruleTraces;
            }
        };
    }
}