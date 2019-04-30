"use strict";
var Relati;
(function (Relati) {
    var toGamePage;
    var toHelpPage;
    document.addEventListener("readystatechange", function handler(event) {
        if (document.readyState != "complete")
            return;
        toGamePage = document.getElementById("main-to-game");
        toHelpPage = document.getElementById("main-to-help");
        toGamePage.addEventListener("click", function (event) { return Relati.gamePageSwitch.checked = true; });
        toHelpPage.addEventListener("click", function (event) { return Relati.gamePageSwitch.checked = true; });
        document.removeEventListener("readystatechange", handler);
    });
})(Relati || (Relati = {}));
//# sourceMappingURL=MainPage.js.map