import "./scss/view/RelatiEffectView.scss";

import { RelatiBoard } from "./ts/core/RelatiBoard";
import { RelatiGame } from "./ts/core/RelatiGame";
import { BY_COMMON_RELATI, BY_NORMAL_RELATI } from "./ts/core/RelatiRoutes";
import { RelatiBoardView } from "./ts/view/RelatiBoardView";
import { createRelatiEffect, createHintEffect } from "./ts/view/RelatiEffectView";

var board = new RelatiBoard(9, 9);
var game = new RelatiGame(board, BY_COMMON_RELATI);
var boardView = new RelatiBoardView(board, document.body);

boardView.resize();
window.addEventListener("resize", boardView.resize.bind(boardView));

boardView.body.addEventListener("click", function (event: MouseEvent) {
    var x: number = Math.floor(event.offsetX / 5),
        y: number = Math.floor(event.offsetY / 5);

    var playerSymbol = game.nowPlayerSymbol;

    game.selectGrid(x, y);

    var { background } = boardView;
    var nowPlayerSymbol = game.nowPlayerSymbol;
    var gameResult = game.result;

    if (gameResult !== "none") {
        if (confirm(gameResult)) {
            game.restart();
        }
    }

    boardView.update();
    boardView.removeBackground();

    var placeableGrids = game.getPlaceableGrids(nowPlayerSymbol);
    createHintEffect(placeableGrids, nowPlayerSymbol, background);
    createRelatiEffect(playerSymbol, background, game);
});

(window as any).game = game;