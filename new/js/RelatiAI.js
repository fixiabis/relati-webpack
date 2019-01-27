"use strict";
/// <reference path="base/GridBoard.d.ts" />
/// <reference path="base/Relati.d.ts" />
var RelatiRules = Relati.RelatiRules, RelatiRole = Relati.RelatiRole;
var RelatiAI = /** @class */ (function () {
    function RelatiAI(game) {
        this.game = game;
    }
    RelatiAI.prototype.analysis = function () {
        var game = this.game;
        var playersPoint = game.players.map(function () { return 0; });
        for (var i = 0; i < game.players.length; i++) {
            var player = game.players[i];
            var gridVisited = [];
            for (var _i = 0, _a = game.board.gridList; _i < _a.length; _i++) {
                var grid = _a[_i];
                if (!grid.role)
                    continue;
                var isValid = grid.role.is(["relati-launcher", "relati-repeater"], "any");
                if (grid.role.owner == player) {
                    if (isValid) {
                        gridVisited.push(grid);
                        playersPoint[i] += 500;
                    }
                    else {
                        playersPoint[i] -= 500;
                    }
                }
                else {
                    if (isValid) {
                        playersPoint[i] -= 500;
                    }
                    else {
                        playersPoint[i] += 500;
                    }
                }
            }
            var controllablGrids = [];
            var controllablePoint = 100;
            var controllableGridFinded = false;
            do {
                controllablGrids = [];
                controllableGridFinded = false;
                for (var _b = 0, _c = game.board.gridList; _b < _c.length; _b++) {
                    var grid = _c[_b];
                    if (grid.role)
                        continue;
                    if (gridVisited.indexOf(grid) > -1)
                        continue;
                    var nearByGrids = grid.queries("O");
                    for (var _d = 0, nearByGrids_1 = nearByGrids; _d < nearByGrids_1.length; _d++) {
                        var nearByGrid = nearByGrids_1[_d];
                        if (gridVisited.indexOf(nearByGrid) > -1) {
                            controllableGridFinded = true;
                            controllablGrids.push(grid);
                            playersPoint[i] += controllablePoint;
                            for (var j = 0; j < game.players.length; j++) {
                                if (i == j)
                                    continue;
                                playersPoint[j] -= controllablePoint;
                            }
                            break;
                        }
                    }
                    if (RelatiRules.RelatiBySource.allow({ game: game, grid: grid, owner: player })) {
                        var isPrivateArea = true;
                        for (var j = 0; j < game.players.length; j++) {
                            if (i == j)
                                continue;
                            if (RelatiRules.RelatiBySource.allow({
                                game: game, grid: grid, owner: game.players[j]
                            }))
                                continue;
                            isPrivateArea = false;
                            playersPoint[j] -= 50;
                        }
                        if (isPrivateArea)
                            playersPoint[i] += 50;
                    }
                }
                gridVisited = gridVisited.concat(controllablGrids);
                controllablePoint--;
            } while (controllableGridFinded);
        }
        return playersPoint;
    };
    RelatiAI.prototype.bestStep = function (playerIndex, nowPlayerIndex, level, alpha, beta) {
        var game = this.game;
        // console.groupCollapsed(game.players[nowPlayerIndex].badge, level);
        if (nowPlayerIndex == playerIndex) {
            for (var _i = 0, _a = game.board.gridList; _i < _a.length; _i++) {
                var grid = _a[_i];
                if (grid.role || !RelatiRules.RelatiBySource.allow({
                    game: game, grid: grid, owner: game.players[nowPlayerIndex]
                }))
                    continue;
                grid.role = new RelatiRole(game.players[nowPlayerIndex], grid);
                grid.role.gain("relati-receiver");
                game.board.gridList.forEach(function (grid) {
                    return grid.role && grid.role.effects.forEach(function (effect) {
                        return effect.do({ game: game, grid: grid });
                    });
                });
                if (level) {
                    var result = this.bestStep(playerIndex, (nowPlayerIndex + 1) % game.players.length, level - 1, alpha, beta);
                }
                else {
                    var playerPoint = this.analysis()[playerIndex];
                    var result = { point: playerPoint, grid: grid };
                }
                // console.log(grid.coordinate, result.point);
                // Relati.RelatiView.updateBoardView(game.board, game.view);
                // debugger;
                delete grid.role;
                result.grid = grid;
                game.board.gridList.forEach(function (grid) {
                    return grid.role && grid.role.effects.forEach(function (effect) {
                        return effect.do({ game: game, grid: grid });
                    });
                });
                if (alpha.point < result.point)
                    alpha = result;
                if (beta.point <= alpha.point)
                    break;
            }
            // console.groupEnd();
            return alpha;
        }
        else {
            for (var _b = 0, _c = game.board.gridList; _b < _c.length; _b++) {
                var grid = _c[_b];
                if (grid.role || !RelatiRules.RelatiBySource.allow({
                    game: game, grid: grid, owner: game.players[nowPlayerIndex]
                }))
                    continue;
                grid.role = new RelatiRole(game.players[nowPlayerIndex], grid);
                grid.role.gain("relati-receiver");
                game.board.gridList.forEach(function (grid) {
                    return grid.role && grid.role.effects.forEach(function (effect) {
                        return effect.do({ game: game, grid: grid });
                    });
                });
                if (level) {
                    var result = this.bestStep(playerIndex, (nowPlayerIndex + 1) % game.players.length, level - 1, alpha, beta);
                }
                else {
                    var playerPoint = this.analysis()[playerIndex];
                    var result = { point: playerPoint, grid: grid };
                }
                // console.log(grid.coordinate, result.point);
                // Relati.RelatiView.updateBoardView(game.board, game.view);
                // debugger;
                delete grid.role;
                result.grid = grid;
                game.board.gridList.forEach(function (grid) {
                    return grid.role && grid.role.effects.forEach(function (effect) {
                        return effect.do({ game: game, grid: grid });
                    });
                });
                if (beta.point > result.point)
                    beta = result;
                if (beta.point <= alpha.point)
                    break;
            }
            // console.groupEnd();
            return beta;
        }
    };
    return RelatiAI;
}());
//# sourceMappingURL=RelatiAI.js.map