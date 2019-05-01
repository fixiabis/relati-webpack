import { RelatiBoard } from "./ts/core/RelatiBoard";
import { RelatiBoardView } from "./ts/game/RelatiView";
import { RelatiGame } from "./ts/main/RelatiGame";
import { BY_COMMON_RELATI } from "./ts/core/RelatiRoutes";

require("./scss/game/RelatiViewEffect.scss");
require("./scss/main/RelatiGame.scss");
require("./scss/page/GamePage.scss");
require("./scss/page/HelpPage.scss");
require("./scss/page/MainPage.scss");

require("./ts/page/Switcher.ts");
require("./ts/page/GamePage.ts");
require("./ts/page/HelpPage.ts");
require("./ts/page/MainPage.ts");

let gameView = document.querySelector("#board-container") as HTMLElement;
let board = new RelatiBoard(9, 9);
let boardView = new RelatiBoardView(board, gameView);
let game = new RelatiGame(board, boardView, BY_COMMON_RELATI);