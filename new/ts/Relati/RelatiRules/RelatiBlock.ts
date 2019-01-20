namespace Relati {
    export namespace RelatiRules {
        export var RelatiTargetRoleStatus: RelatiRoleStatus[] = [
            "relati-recepter"
        ];

        export var RelatiBlock: RelatiRuleTraceable = {
            allow(state) {
                return (
                    RelatiNormalBlock.allow(state) ||
                    RelatiRemoteBlock.allow(state)
                );
            },
            trace(state) {
                return [
                    ...RelatiNormalBlock.trace(state),
                    ...RelatiRemoteBlock.trace(state)
                ];
            }
        };

        export var RelatiNormalTargetRoleStatus: RelatiRoleStatus[] = [
            "relati-normal-recepter",
            ...RelatiTargetRoleStatus
        ];

        export var RelatiNormalBlock: RelatiRuleTraceable = {
            allow({ owner, grid }) {
                if (!grid) return false;

                var targetGrids = grid.queries("O");

                for (var i = 0; i < targetGrids.length; i++) {
                    var targetGrid = targetGrids[i];

                    var targetReliable = (
                        targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(
                            RelatiNormalTargetRoleStatus,
                            "any"
                        )
                    );

                    if (targetReliable) return true;
                }

                return false;
            },
            trace({ owner, grid }) {
                if (!grid) return [];

                var targetGrids = grid.queries("O");
                var ruleTraces: RelatiRuleTrace[] = [];

                for (var i = 0; i < targetGrids.length; i++) {
                    var targetGrid = targetGrids[i];

                    var targetReliable = (
                        targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(
                            RelatiNormalTargetRoleStatus,
                            "any"
                        )
                    );

                    if (targetReliable) {
                        ruleTraces.push({
                            target: targetGrid,
                            routes: []
                        });
                    }
                }

                return ruleTraces;
            }
        };

        export var RelatiRemoteTargetRoleStatus: RelatiRoleStatus[] = [
            "relati-remote-recepter",
            ...RelatiTargetRoleStatus
        ];

        export var RelatiRemoteBlock: RelatiRuleTraceable = {
            allow(state) {
                return (
                    RelatiRemoteNormalBlock.allow(state) ||
                    RelatiRemoteStableBlock.allow(state)
                );
            },
            trace(state) {
                return [
                    ...RelatiRemoteNormalBlock.trace(state),
                    ...RelatiRemoteStableBlock.trace(state)
                ];
            }
        };

        export var RelatiRemoteNormalTargetRoleStatus: RelatiRoleStatus[] = [
            "relati-remote-normal-recepter",
            ...RelatiRemoteTargetRoleStatus
        ];

        export var RelatiRemoteNormalBlock: RelatiRuleTraceable = {
            allow({ owner, grid }) {
                if (!grid) return false;

                var targetGrids = grid.queries("2O,O");

                for (var i = 0; i < targetGrids.length; i += 2) {
                    var targetGrid = targetGrids[i];
                    var middleGrid = targetGrids[i + 1];

                    var targetReliable = (
                        targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(
                            RelatiRemoteNormalTargetRoleStatus,
                            "any"
                        )
                    );

                    if (!targetReliable) continue;
                    if (!middleGrid.role) return true;
                }

                return false;
            },
            trace({ owner, grid }) {
                if (!grid) return [];

                var targetGrids = grid.queries("2O,O");
                var ruleTraces: RelatiRuleTrace[] = [];

                for (var i = 0; i < targetGrids.length; i += 2) {
                    var targetGrid = targetGrids[i];
                    var middleGrid = targetGrids[i + 1];

                    var targetReliable = (
                        targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(
                            RelatiRemoteNormalTargetRoleStatus,
                            "any"
                        )
                    );

                    if (!targetReliable) continue;
                    if (!middleGrid.role) {
                        ruleTraces.push({
                            target: targetGrid,
                            routes: [middleGrid]
                        });
                    }
                }

                return ruleTraces;
            }
        };

        export var RelatiRemoteStableTargetRoleStatus: RelatiRoleStatus[] = [
            "relati-remote-stable-recepter",
            ...RelatiRemoteTargetRoleStatus
        ];

        export var RelatiRemoteStableBlock: RelatiRuleTraceable = {
            allow({ owner, grid }) {
                if (!grid) return false;

                var targetGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");

                for (var i = 0; i < targetGrids.length; i += 5) {
                    var targetGrid = targetGrids[i];
                    var middleGrids = targetGrids.slice(i + 1, i + 4);

                    var targetReliable = (
                        targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(
                            RelatiRemoteStableTargetRoleStatus,
                            "any"
                        )
                    );

                    if (!targetReliable) continue;

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

                var targetGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");
                var ruleTraces: RelatiRuleTrace[] = [];

                for (var i = 0; i < targetGrids.length; i += 5) {
                    var targetGrid = targetGrids[i];
                    var middleGrids = targetGrids.slice(i + 1, i + 4);

                    var targetReliable = (
                        targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(
                            RelatiRemoteStableTargetRoleStatus,
                            "any"
                        )
                    );

                    if (!targetReliable) continue;

                    for (var j = 1; j < middleGrids.length - 1; j++) {
                        var middleGrid1 = middleGrids[j];
                        var middleGrid2 = middleGrids[j + 1];

                        if (
                            !middleGrid1.role &&
                            !middleGrid2.role
                        ) {
                            ruleTraces.push({
                                target: targetGrid,
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