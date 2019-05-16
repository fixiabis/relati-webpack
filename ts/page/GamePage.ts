import { Page } from "../view/Page";
import { RelatiGame } from "../main/RelatiGame";
import { RelatiBoard } from "../main/RelatiBoard";
import { RelatiPlayer } from "../main/RelatiPlayer";
import { BY_COMMON_RELATI } from "../main/rule/RelatiRouteRule";
import { RelatiBoardView } from "../view/RelatiBoardView";
import { RelatiGameResult, RelatiSymbol } from "../main/RelatiDefs";
import { createHintEffect, createRelatiEffect } from "../view/RelatiEffectView";
import { PlacementRule } from "../main/rule/PlacementRule";

const toMainPageButton: HTMLElement = document.getElementById("game-to-main") as HTMLElement;

toMainPageButton.addEventListener("click", event => Page.switchTo("main"));

let board = new RelatiBoard(9, 9);
let players = [new RelatiPlayer("O"), new RelatiPlayer("X")]
let game = new RelatiGame(board, players, BY_COMMON_RELATI);
let container = document.getElementById("game-board") as HTMLElement;
let boardView = new RelatiBoardView(game, container);

window.addEventListener("hashchange", () => {
    if (location.hash == "#game") game.restart();
});

boardView.context.addEventListener("click", function (event: MouseEvent) {
    let x: number = Math.floor(event.offsetX / 5),
        y: number = Math.floor(event.offsetY / 5),
        grid = board.getGrid(x, y);

    if (game.selectGrid) game.selectGrid(grid);
});

game.onstart = () => {
    boardView.remove();
};

game.onover = function (gameResult: RelatiGameResult) {
    switch (gameResult) {
        case 1: alert("圈贏"); break;
        case 2: alert("叉贏"); break;
        case 3: alert("平手"); break;
    }

    game.restart();
};

let prevPlayerSymbol: RelatiSymbol = "";

game.onturnstart = () => prevPlayerSymbol = game.nowPlayer.symbol;

game.onturnend = () => {
    boardView.update();

    let symbol = game.nowPlayer.symbol;
    let grids = PlacementRule.trace(
        game, symbol, BY_COMMON_RELATI
    );

    createHintEffect(grids, symbol, boardView.layers[1]);
    createRelatiEffect(prevPlayerSymbol, boardView.layers[0], game);
};