/// <reference path="base/GridBoard.d.ts" />
/// <reference path="base/Relati.d.ts" />

var { RelatiRules, RelatiRole } = Relati;
type RelatiGame = Relati.RelatiGame;
type RelatiGrid = Relati.RelatiGrid;
type RelatiPlayer = Relati.RelatiPlayer;

class RelatiAI {
    constructor(public game: RelatiGame) { }

    analysis() {
        var { game } = this;
        var playersPoint = game.players.map(() => 0);

        for (var i = 0; i < game.players.length; i++) {
            var player = game.players[i];
            var gridVisited: RelatiGrid[] = [];

            for (var grid of game.board.gridList) {
                if (!grid.role) continue;
                var isValid = grid.role.is(["relati-launcher", "relati-repeater"], "any");

                if (grid.role.owner == player) {
                    if (isValid) {
                        gridVisited.push(grid);
                        playersPoint[i] += 500;
                    } else {
                        playersPoint[i] -= 500;
                    }
                } else {
                    if (isValid) {
                        playersPoint[i] -= 500;
                    } else {
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

                for (var grid of game.board.gridList) {
                    if (grid.role) continue;
                    if (gridVisited.indexOf(grid) > -1) continue;
                    var nearByGrids = grid.queries("O");

                    for (var nearByGrid of nearByGrids) {
                        if (gridVisited.indexOf(nearByGrid) > -1) {
                            controllableGridFinded = true;
                            controllablGrids.push(grid);
                            playersPoint[i] += controllablePoint;

                            for (var j = 0; j < game.players.length; j++) {
                                if (i == j) continue;
                                playersPoint[j] -= controllablePoint;
                            }

                            break;
                        }
                    }

                    if (RelatiRules.RelatiBySource.allow({ game, grid, owner: player })) {
                        var isPrivateArea = true;

                        for (var j = 0; j < game.players.length; j++) {
                            if (i == j) continue;

                            if (RelatiRules.RelatiBySource.allow({
                                game, grid, owner: game.players[j]
                            })) continue;

                            isPrivateArea = false;
                            playersPoint[j] -= 50;
                        }

                        if (isPrivateArea) playersPoint[i] += 50;
                    }
                }

                gridVisited = gridVisited.concat(controllablGrids);
                controllablePoint--;
            } while (controllableGridFinded);
        }

        return playersPoint;
    }

    bestStep(
        playerIndex: number,
        nowPlayerIndex: number,
        level: number,
        alpha: { point: number, grid: RelatiGrid },
        beta: { point: number, grid: RelatiGrid }
    ) {
        var { game } = this;

      // console.groupCollapsed(game.players[nowPlayerIndex].badge, level);

        if (nowPlayerIndex == playerIndex) {
            for (var grid of game.board.gridList) {
                if (grid.role || !RelatiRules.RelatiBySource.allow({
                    game, grid, owner: game.players[nowPlayerIndex]
                })) continue;

                grid.role = new RelatiRole(game.players[nowPlayerIndex], grid);
                grid.role.gain("relati-receiver");

                game.board.gridList.forEach(grid =>
                    grid.role && grid.role.effects.forEach(effect =>
                        effect.do({ game, grid })
                    )
                );

                if (level) {
                    var result = this.bestStep(
                        playerIndex,
                        (nowPlayerIndex + 1) % game.players.length,
                        level - 1, alpha, beta
                    );
                } else {
                    var playerPoint = this.analysis()[playerIndex];
                    var result = { point: playerPoint, grid };
                }

              // console.log(grid.coordinate, result.point);
                // Relati.RelatiView.updateBoardView(game.board, game.view);
                // debugger;
                delete grid.role;
                result.grid = grid;

                game.board.gridList.forEach(grid =>
                    grid.role && grid.role.effects.forEach(effect =>
                        effect.do({ game, grid })
                    )
                );

                if (alpha.point < result.point) alpha = result;
                if (beta.point <= alpha.point) break;
            }

          // console.groupEnd();

            return alpha;
        } else {
            for (var grid of game.board.gridList) {
                if (grid.role || !RelatiRules.RelatiBySource.allow({
                    game, grid, owner: game.players[nowPlayerIndex]
                })) continue;

                grid.role = new RelatiRole(game.players[nowPlayerIndex], grid);
                grid.role.gain("relati-receiver");

                game.board.gridList.forEach(grid =>
                    grid.role && grid.role.effects.forEach(effect =>
                        effect.do({ game, grid })
                    )
                );

                if (level) {
                    var result = this.bestStep(
                        playerIndex,
                        (nowPlayerIndex + 1) % game.players.length,
                        level - 1, alpha, beta
                    );
                } else {
                    var playerPoint = this.analysis()[playerIndex];
                    var result = { point: playerPoint, grid };
                }

              // console.log(grid.coordinate, result.point);
                // Relati.RelatiView.updateBoardView(game.board, game.view);
                // debugger;
                delete grid.role;
                result.grid = grid;

                game.board.gridList.forEach(grid =>
                    grid.role && grid.role.effects.forEach(effect =>
                        effect.do({ game, grid })
                    )
                );

                if (beta.point > result.point) beta = result;
                if (beta.point <= alpha.point) break;
            }

          // console.groupEnd();

            return beta;
        }
    }
}