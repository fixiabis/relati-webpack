"use strict";
var Grid = /** @class */ (function () {
    function Grid(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
        this._queryCache = {};
        this._queriesCache = {};
        this.coordinate = "" + String.fromCharCode(x + 65) + (y + 1);
        this.board[this.coordinate] = this;
    }
    Grid.prototype.query = function (directionCommand) {
        if (this._queryCache[directionCommand]) {
            return this._queryCache[directionCommand];
        }
        var _a = this, x = _a.x, y = _a.y, board = _a.board;
        var unitCarried = 1;
        var unit = 1;
        for (var _i = 0, directionCommand_1 = directionCommand; _i < directionCommand_1.length; _i++) {
            var direction = directionCommand_1[_i];
            switch (direction) {
                case "F":
                    unitCarried = 1;
                    y -= unit;
                    break;
                case "B":
                    unitCarried = 1;
                    y += unit;
                    break;
                case "R":
                    unitCarried = 1;
                    x += unit;
                    break;
                case "L":
                    unitCarried = 1;
                    x -= unit;
                    break;
                case "-":
                    unit *= -1;
                    break;
                default:
                    var unitValue = parseInt(direction);
                    if (isNaN(unitValue))
                        break;
                    if (unitCarried == 1)
                        unit = unitValue;
                    else
                        unit = unit * 10 + unitValue;
                    unitCarried++;
                    break;
            }
        }
        return this._cacheQueryResult(directionCommand, board.grids[x] && board.grids[x][y]);
    };
    Grid.prototype.queries = function (directionCommands) {
        if (this._queriesCache[directionCommands]) {
            return this._queriesCache[directionCommands];
        }
        var simplifyDirectionList = Grid.simplifyDirectionList, originalDirectionLists = Grid.originalDirectionLists;
        var gridList = [];
        if (directionCommands.indexOf(";") > -1) {
            for (var _i = 0, _a = directionCommands.split(";"); _i < _a.length; _i++) {
                var directionCommand = _a[_i];
                gridList = gridList.concat(this.queries(directionCommand));
            }
            return this._cacheQueriesResult(directionCommands, gridList);
        }
        for (var i = 0; i < simplifyDirectionList.length; i++) {
            var simplifyDirection = simplifyDirectionList[i];
            if (!directionCommands.match(simplifyDirection))
                continue;
            for (var _b = 0, _c = originalDirectionLists[i]; _b < _c.length; _b++) {
                var originalDirection = _c[_b];
                gridList = gridList.concat(this.queries(directionCommands.replace(simplifyDirection, originalDirection)));
            }
            return this._cacheQueriesResult(directionCommands, gridList);
        }
        if (directionCommands.indexOf(",") > -1) {
            for (var _d = 0, _e = directionCommands.split(","); _d < _e.length; _d++) {
                var directionCommand = _e[_d];
                gridList = gridList.concat(this.queries(directionCommand));
            }
            return this._cacheQueriesResult(directionCommands, gridList);
        }
        return this._cacheQueriesResult(directionCommands, [this.query(directionCommands)]);
    };
    Grid.prototype._cacheQueryResult = function (command, result) {
        return this._queryCache[command] = result;
    };
    Grid.prototype._cacheQueriesResult = function (commmands, results) {
        return this._queriesCache[commmands] = results;
    };
    Grid.prototype.clearQueryResult = function (command) {
        return delete this._queryCache[command];
    };
    Grid.prototype.clearQueriesResult = function (commands) {
        return delete this._queriesCache[commands];
    };
    Grid.simplifyDirectionList = [/I/g, /H/g, /T/g, /X/g, /O/g];
    Grid.originalDirectionLists = [
        ["F", "B"], ["R", "L"],
        ["F", "B", "R", "L"],
        ["FR", "FL", "BR", "BL"],
        ["F", "B", "R", "L", "FR", "FL", "BR", "BL"]
    ];
    return Grid;
}());
var GridBoard = /** @class */ (function () {
    function GridBoard(width, height) {
        this.width = width;
        this.height = height;
        this.grids = [];
        this.gridList = [];
        this._queryCache = {};
        this._queriesCache = {};
        for (var x = 0; x < width; x++) {
            var gridRow = [];
            for (var y = 0; y < height; y++) {
                var grid = new Grid(this, x, y);
                gridRow.push(grid);
                this.gridList.push(grid);
                this._queryCache[grid.coordinate] = grid;
            }
            this.grids.push(gridRow);
        }
    }
    GridBoard.prototype.query = function (coordinateCommand) {
        if (this._queryCache[coordinateCommand]) {
            return this._queryCache[coordinateCommand];
        }
        var coordinate = coordinateCommand;
        var x = coordinate[0].charCodeAt(0) - 65;
        var y = parseInt(coordinate.substr(1, coordinate.length - 1)) - 1;
        return this._cacheQueryResult(coordinateCommand, this.grids[x] && this.grids[x][y]);
    };
    GridBoard.prototype.queries = function (coordinateCommands) {
        if (this._queriesCache[coordinateCommands]) {
            return this._queriesCache[coordinateCommands];
        }
        var gridList = [];
        var _a = this, width = _a.width, height = _a.height;
        if (coordinateCommands == "*")
            return this.gridList;
        if (coordinateCommands.indexOf(",") > -1) {
            for (var _i = 0, _b = coordinateCommands.split(","); _i < _b.length; _i++) {
                var coordinate = _b[_i];
                gridList = gridList.concat(this.queries(coordinate));
            }
            return this._cacheQueriesResult(coordinateCommands, gridList);
        }
        if (coordinateCommands.indexOf(":")) {
            var coordinates = coordinateCommands.split(":");
            var startCoordinate = coordinates[0];
            var endCoordinate = coordinates[1];
            var startGrid = this.query(startCoordinate);
            var endGrid = this.query(endCoordinate);
            var startX = Math.min(startGrid.x, endGrid.x);
            var endX = Math.max(startGrid.x, endGrid.x);
            var startY = Math.min(startGrid.y, endGrid.y);
            var endY = Math.max(startGrid.y, endGrid.y);
            for (var x = startX; x <= endX; x++) {
                for (var y = startY; y <= endY; y++) {
                    var grid = this.grids[x] && this.grids[x][y];
                    gridList.push(grid);
                }
            }
            return this._cacheQueriesResult(coordinateCommands, gridList);
        }
        var y = parseInt(coordinateCommands);
        if (!isNaN(y)) {
            for (var x = 0; x < width; x++) {
                gridList.push(this.grids[x][y]);
            }
            return this._cacheQueriesResult(coordinateCommands, gridList);
        }
        else if (coordinateCommands.length == 1) {
            var x = coordinateCommands.charCodeAt(0) - 65;
            for (var y = 0; y < height; y++) {
                gridList.push(this.grids[x][y]);
            }
            return this._cacheQueriesResult(coordinateCommands, gridList);
        }
        return this._cacheQueriesResult(coordinateCommands, [this.query(coordinateCommands)]);
    };
    GridBoard.prototype._cacheQueryResult = function (command, result) {
        return this._queryCache[command] = result;
    };
    GridBoard.prototype._cacheQueriesResult = function (commmands, results) {
        return this._queriesCache[commmands] = results;
    };
    GridBoard.prototype.clearQueryResult = function (command) {
        return delete this._queryCache[command];
    };
    GridBoard.prototype.clearQueriesResult = function (commands) {
        return delete this._queriesCache[commands];
    };
    return GridBoard;
}());
var Relati;
(function (Relati) {
    var RelatiGame = /** @class */ (function () {
        function RelatiGame(board, players) {
            this.board = board;
            this.players = players;
            this.turn = 0;
            for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
                var player = players_1[_i];
                player.game = this;
            }
        }
        RelatiGame.prototype.nowPlayer = function () {
            var game = this;
            return game.players[game.turn % 2];
        };
        return RelatiGame;
    }());
    Relati.RelatiGame = RelatiGame;
})(Relati || (Relati = {}));
var Relati;
(function (Relati) {
    var RelatiPlayer = /** @class */ (function () {
        function RelatiPlayer() {
        }
        RelatiPlayer.prototype.placement = function (grid) {
            var game = this.game;
            var player = this;
            if (!game)
                return;
            if (game.nowPlayer() !== player)
                return;
            if (grid.role)
                return;
            if (game.turn < 2) {
                grid.role = new Relati.RelatiRole(this, grid);
                grid.role.type = "leader";
                grid.role.gain("relati-launcher");
                game.turn++;
            }
            else if (Relati.RelatiRules.Relati.allow({
                game: game, owner: this, grid: grid
            })) {
                grid.role = new Relati.RelatiRole(this, grid);
                grid.role.gain("relati-recepter");
                grid.role.gain("relati-repeater");
                game.turn++;
            }
        };
        return RelatiPlayer;
    }());
    Relati.RelatiPlayer = RelatiPlayer;
})(Relati || (Relati = {}));
var Relati;
(function (Relati) {
    var RelatiRole = /** @class */ (function () {
        function RelatiRole(owner, grid) {
            this.owner = owner;
            this.grid = grid;
            this.type = "normal";
            this.status = {};
        }
        RelatiRole.prototype.is = function (status, type) {
            if (typeof status === "string")
                return this.status[status];
            if (type == "any") {
                for (var _i = 0, status_1 = status; _i < status_1.length; _i++) {
                    var statusName = status_1[_i];
                    if (this.status[statusName])
                        return true;
                }
                return false;
            }
            else {
                for (var _a = 0, status_2 = status; _a < status_2.length; _a++) {
                    var statusName = status_2[_a];
                    if (!this.status[statusName])
                        return false;
                }
                return true;
            }
        };
        RelatiRole.prototype.gain = function (status) {
            this.status[status] = true;
        };
        RelatiRole.prototype.lost = function (status) {
            this.status[status] = false;
        };
        return RelatiRole;
    }());
    Relati.RelatiRole = RelatiRole;
})(Relati || (Relati = {}));
var Relati;
(function (Relati) {
    var RelatiActions;
    (function (RelatiActions) {
        RelatiActions.RelatiBlockGridStatus = [
            "relati-blocked",
            "relati-normal-blocked",
            "relati-remote-blocked",
            "relati-remote-normal-blocked",
            "relati-remote-stable-blocked"
        ];
        RelatiActions.RelatiBlock = {
            action: function (_a) {
                var game = _a.game, owner = _a.owner, grid = _a.grid;
                if (!game || !owner || !grid)
                    return;
                for (var _i = 0, _b = game.board.gridList; _i < _b.length; _i++) {
                    var grid_1 = _b[_i];
                    if (!grid_1.role)
                        continue;
                    if (grid_1.role.owner != owner)
                        continue;
                    for (var _c = 0, RelatiBlockGridStatus_1 = RelatiActions.RelatiBlockGridStatus; _c < RelatiBlockGridStatus_1.length; _c++) {
                        var status = RelatiBlockGridStatus_1[_c];
                        if (grid_1.role.is(status)) {
                            grid_1.role.lost(status);
                        }
                    }
                }
                relatiGridList = [];
                relatiExpand(grid, owner);
                for (var _d = 0, _e = game.board.gridList; _d < _e.length; _d++) {
                    var grid_2 = _e[_d];
                    if (!grid_2.role)
                        continue;
                    if (grid_2.role.owner != owner)
                        continue;
                    if (relatiGridList.indexOf(grid_2) < 0) {
                        grid_2.role.gain("relati-blocked");
                    }
                }
            }
        };
        var relatiGridList = [];
        function relatiExpand(grid, owner) {
            if (relatiGridList.indexOf(grid) > -1)
                return;
            relatiGridList.push(grid);
            var ruleTraces = Relati.RelatiRules.RelatiBlock.trace({ owner: owner, grid: grid });
            for (var _i = 0, ruleTraces_1 = ruleTraces; _i < ruleTraces_1.length; _i++) {
                var targetGrid = ruleTraces_1[_i].target;
                relatiExpand(targetGrid, owner);
            }
        }
    })(RelatiActions = Relati.RelatiActions || (Relati.RelatiActions = {}));
})(Relati || (Relati = {}));
var Relati;
(function (Relati_1) {
    var RelatiRules;
    (function (RelatiRules) {
        RelatiRules.RelatiSourceRoleStatus = [
            "relati-launcher",
            "relati-repeater"
        ];
        RelatiRules.Relati = {
            allow: function (state) {
                return (RelatiRules.RelatiNormal.allow(state) ||
                    RelatiRules.RelatiRemote.allow(state));
            },
            trace: function (state) {
                return RelatiRules.RelatiNormal.trace(state).concat(RelatiRules.RelatiRemote.trace(state));
            }
        };
        RelatiRules.RelatiNormalSourceRoleStatus = [
            "relati-normal-launcher",
            "relati-normal-repeater"
        ].concat(RelatiRules.RelatiSourceRoleStatus);
        RelatiRules.RelatiNormal = {
            allow: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return false;
                var sourceGrids = grid.queries("O");
                for (var i = 0; i < sourceGrids.length; i++) {
                    var sourceGrid = sourceGrids[i];
                    var sourceReliable = (sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(RelatiRules.RelatiNormalSourceRoleStatus, "any"));
                    if (sourceReliable)
                        return true;
                }
                return false;
            },
            trace: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return [];
                var sourceGrids = grid.queries("O");
                var ruleTraces = [];
                for (var i = 0; i < sourceGrids.length; i++) {
                    var sourceGrid = sourceGrids[i];
                    var sourceReliable = (sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(RelatiRules.RelatiNormalSourceRoleStatus, "any"));
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
        RelatiRules.RelatiRemoteSourceRoleStatus = [
            "relati-remote-launcher",
            "relati-remote-repeater"
        ].concat(RelatiRules.RelatiSourceRoleStatus);
        RelatiRules.RelatiRemote = {
            allow: function (state) {
                return (RelatiRules.RelatiRemoteNormal.allow(state) ||
                    RelatiRules.RelatiRemoteStable.allow(state));
            },
            trace: function (state) {
                return RelatiRules.RelatiRemoteNormal.trace(state).concat(RelatiRules.RelatiRemoteStable.trace(state));
            }
        };
        RelatiRules.RelatiRemoteNormalSourceRoleStatus = [
            "relati-remote-normal-launcher",
            "relati-remote-normal-repeater"
        ].concat(RelatiRules.RelatiRemoteSourceRoleStatus);
        RelatiRules.RelatiRemoteNormal = {
            allow: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return false;
                var sourceGrids = grid.queries("2O,O");
                for (var i = 0; i < sourceGrids.length; i += 2) {
                    var sourceGrid = sourceGrids[i];
                    var middleGrid = sourceGrids[i + 1];
                    var sourceReliable = (sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(RelatiRules.RelatiRemoteNormalSourceRoleStatus, "any"));
                    if (!sourceReliable)
                        continue;
                    if (!middleGrid.role)
                        return true;
                }
                return false;
            },
            trace: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return [];
                var sourceGrids = grid.queries("2O,O");
                var ruleTraces = [];
                for (var i = 0; i < sourceGrids.length; i += 2) {
                    var sourceGrid = sourceGrids[i];
                    var middleGrid = sourceGrids[i + 1];
                    var sourceReliable = (sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(RelatiRules.RelatiRemoteNormalSourceRoleStatus, "any"));
                    if (!sourceReliable)
                        continue;
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
        RelatiRules.RelatiRemoteStableSourceRoleStatus = [
            "relati-remote-stable-launcher",
            "relati-remote-stable-repeater"
        ].concat(RelatiRules.RelatiRemoteSourceRoleStatus);
        RelatiRules.RelatiRemoteStable = {
            allow: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return false;
                var sourceGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");
                for (var i = 0; i < sourceGrids.length; i += 5) {
                    var sourceGrid = sourceGrids[i];
                    var sourceReliable = (sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(RelatiRules.RelatiRemoteStableSourceRoleStatus, "any"));
                    if (!sourceReliable)
                        continue;
                    var middleGrids = sourceGrids.slice(i + 1, i + 4);
                    for (var j = 1; j < middleGrids.length - 1; j++) {
                        var middleGrid1 = middleGrids[j];
                        var middleGrid2 = middleGrids[j + 1];
                        if (!middleGrid1.role &&
                            !middleGrid2.role)
                            return true;
                    }
                }
                return false;
            },
            trace: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return [];
                var sourceGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");
                var ruleTraces = [];
                for (var i = 0; i < sourceGrids.length; i += 5) {
                    var sourceGrid = sourceGrids[i];
                    var sourceReliable = (sourceGrid &&
                        sourceGrid.role &&
                        sourceGrid.role.owner == owner &&
                        sourceGrid.role.is(RelatiRules.RelatiRemoteStableSourceRoleStatus, "any"));
                    if (!sourceReliable)
                        continue;
                    var middleGrids = sourceGrids.slice(i + 1, i + 4);
                    for (var j = 1; j < middleGrids.length - 1; j++) {
                        var middleGrid1 = middleGrids[j];
                        var middleGrid2 = middleGrids[j + 1];
                        if (!middleGrid1.role &&
                            !middleGrid2.role) {
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
    })(RelatiRules = Relati_1.RelatiRules || (Relati_1.RelatiRules = {}));
})(Relati || (Relati = {}));
var Relati;
(function (Relati) {
    var RelatiRules;
    (function (RelatiRules) {
        RelatiRules.RelatiTargetRoleStatus = [
            "relati-recepter"
        ];
        RelatiRules.RelatiBlock = {
            allow: function (state) {
                return (RelatiRules.RelatiNormalBlock.allow(state) ||
                    RelatiRules.RelatiRemoteBlock.allow(state));
            },
            trace: function (state) {
                return RelatiRules.RelatiNormalBlock.trace(state).concat(RelatiRules.RelatiRemoteBlock.trace(state));
            }
        };
        RelatiRules.RelatiNormalTargetRoleStatus = [
            "relati-normal-recepter"
        ].concat(RelatiRules.RelatiTargetRoleStatus);
        RelatiRules.RelatiNormalBlock = {
            allow: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return false;
                var targetGrids = grid.queries("O");
                for (var i = 0; i < targetGrids.length; i++) {
                    var targetGrid = targetGrids[i];
                    var targetReliable = (targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(RelatiRules.RelatiNormalTargetRoleStatus, "any"));
                    if (targetReliable)
                        return true;
                }
                return false;
            },
            trace: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return [];
                var targetGrids = grid.queries("O");
                var ruleTraces = [];
                for (var i = 0; i < targetGrids.length; i++) {
                    var targetGrid = targetGrids[i];
                    var targetReliable = (targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(RelatiRules.RelatiNormalTargetRoleStatus, "any"));
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
        RelatiRules.RelatiRemoteTargetRoleStatus = [
            "relati-remote-recepter"
        ].concat(RelatiRules.RelatiTargetRoleStatus);
        RelatiRules.RelatiRemoteBlock = {
            allow: function (state) {
                return (RelatiRules.RelatiRemoteNormalBlock.allow(state) ||
                    RelatiRules.RelatiRemoteStableBlock.allow(state));
            },
            trace: function (state) {
                return RelatiRules.RelatiRemoteNormalBlock.trace(state).concat(RelatiRules.RelatiRemoteStableBlock.trace(state));
            }
        };
        RelatiRules.RelatiRemoteNormalTargetRoleStatus = [
            "relati-remote-normal-recepter"
        ].concat(RelatiRules.RelatiRemoteTargetRoleStatus);
        RelatiRules.RelatiRemoteNormalBlock = {
            allow: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return false;
                var targetGrids = grid.queries("2O,O");
                for (var i = 0; i < targetGrids.length; i += 2) {
                    var targetGrid = targetGrids[i];
                    var middleGrid = targetGrids[i + 1];
                    var targetReliable = (targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(RelatiRules.RelatiRemoteNormalTargetRoleStatus, "any"));
                    if (!targetReliable)
                        continue;
                    if (!middleGrid.role)
                        return true;
                }
                return false;
            },
            trace: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return [];
                var targetGrids = grid.queries("2O,O");
                var ruleTraces = [];
                for (var i = 0; i < targetGrids.length; i += 2) {
                    var targetGrid = targetGrids[i];
                    var middleGrid = targetGrids[i + 1];
                    var targetReliable = (targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(RelatiRules.RelatiRemoteNormalTargetRoleStatus, "any"));
                    if (!targetReliable)
                        continue;
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
        RelatiRules.RelatiRemoteStableTargetRoleStatus = [
            "relati-remote-stable-recepter"
        ].concat(RelatiRules.RelatiRemoteTargetRoleStatus);
        RelatiRules.RelatiRemoteStableBlock = {
            allow: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return false;
                var targetGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");
                for (var i = 0; i < targetGrids.length; i += 5) {
                    var targetGrid = targetGrids[i];
                    var middleGrids = targetGrids.slice(i + 1, i + 4);
                    var targetReliable = (targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(RelatiRules.RelatiRemoteStableTargetRoleStatus, "any"));
                    if (!targetReliable)
                        continue;
                    for (var j = 1; j < middleGrids.length - 1; j++) {
                        var middleGrid1 = middleGrids[j];
                        var middleGrid2 = middleGrids[j + 1];
                        if (!middleGrid1.role &&
                            !middleGrid2.role)
                            return true;
                    }
                }
                return false;
            },
            trace: function (_a) {
                var owner = _a.owner, grid = _a.grid;
                if (!grid)
                    return [];
                var targetGrids = grid.queries("IIH,II,I,IH,H,IHH,HH,H,HI,I");
                var ruleTraces = [];
                for (var i = 0; i < targetGrids.length; i += 5) {
                    var targetGrid = targetGrids[i];
                    var middleGrids = targetGrids.slice(i + 1, i + 4);
                    var targetReliable = (targetGrid &&
                        targetGrid.role &&
                        targetGrid.role.owner == owner &&
                        targetGrid.role.is(RelatiRules.RelatiRemoteStableTargetRoleStatus, "any"));
                    if (!targetReliable)
                        continue;
                    for (var j = 1; j < middleGrids.length - 1; j++) {
                        var middleGrid1 = middleGrids[j];
                        var middleGrid2 = middleGrids[j + 1];
                        if (!middleGrid1.role &&
                            !middleGrid2.role) {
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
    })(RelatiRules = Relati.RelatiRules || (Relati.RelatiRules = {}));
})(Relati || (Relati = {}));
//# sourceMappingURL=Relati.js.map