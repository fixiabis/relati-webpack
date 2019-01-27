/// <reference path="../ts/RelatiAI/base/GridBoard.d.ts" />
/// <reference path="../ts/RelatiAI/base/Relati.d.ts" />
declare var RelatiRules: typeof Relati.RelatiRules, RelatiRole: typeof Relati.RelatiRole;
declare type RelatiGame = Relati.RelatiGame;
declare type RelatiGrid = Relati.RelatiGrid;
declare type RelatiRole = Relati.RelatiRole;
declare type RelatiPlayer = Relati.RelatiPlayer;
declare class RelatiAI {
    game: RelatiGame;
    leaderGrids: RelatiGrid[];
    constructor(game: RelatiGame);
    initialize(): void;
    analysis(): number[];
    bestStep(playerIndex: number, nowPlayerIndex: number, level: number, alpha: {
        point: number;
        grid: RelatiGrid;
    }, beta: {
        point: number;
        grid: RelatiGrid;
    }): {
        point: number;
        grid: Relati.RelatiGrid;
    };
}
