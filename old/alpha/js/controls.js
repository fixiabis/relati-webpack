var elementId = id => document.getElementById(id);

var startPage = elementId("start-page");
var startButton = elementId("start-button");

var selectPage = elementId("select-page");
var easyModeButton = elementId("easy-mode"),
    hardModeButton = elementId("hard-mode"),
    addonsModeButton = elementId("addons-mode"),
    customModeButton = elementId("custom-mode");

var easyModePage = elementId("easy-mode-page");
var easyModeStartButton = elementId("easy-mode-start-button");
var easyModeBoard = elementId("easy-mode-board");
var hardModePage = elementId("hard-mode-page");

startPage.addEventListener("click", function () {
    document.body.style.color = "#0a6050";
    document.body.style.background = "#eee";
    selectPage.style.transform = "scale(1)";
    startPage.style.opacity = 0;
});

easyModeButton.addEventListener("click", function () {
    addStatusBoardIn("#easy-mode-page ", ["normal", "source"]);
    addRelatiNormalBoardIn("#easy-mode-page ");
    easyModePage.style.transform = "scale(1)";
    selectPage.style.opacity = 0;
});

easyModeStartButton.addEventListener("click", function () {
    createGame("easy-mode");
    easyModeBoard.style.transform = "scale(1)";
    easyModePage.style.opacity = 0;
});

hardModeButton.addEventListener("click", function () {
    addStatusBoardIn("#hard-mode-page ", ["normal", "source", "forbid"]);
    addRelatiNormalBoardIn("#hard-mode-page ");
    addRelatiRemoteBoardIn("#hard-mode-page ");
    addRelatiRemoteStableBoardIn("#hard-mode-page ");
    addRelatiForbidBoardIn("#hard-mode-page ");
    hardModePage.style.transform = "scale(1)";
    selectPage.style.opacity = 0;
});

function createGame(mode) {
    var players = elementId(`${mode}-players`).value | 0;
    var game = new RelatiGame(players, elementId(`${mode}-board`));
    game.board.viewerRefresh();
    addSkinOn(game.board, game);
    addRelatiRule(game, {
        "use-relati-normal": true,
        "relati-source": "owner valid"
    });
}