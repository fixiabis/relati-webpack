"use strict";
var Relati;
(function (Relati) {
    Relati.mainPageSwitch = null;
    Relati.gamePageSwitch = null;
    Relati.helpPageSwitch = null;
    document.addEventListener("readystatechange", function (event) {
        if (document.readyState != "complete")
            return;
        Relati.mainPageSwitch = document.getElementById("main-page-switch");
        Relati.gamePageSwitch = document.getElementById("game-page-switch");
        Relati.helpPageSwitch = document.getElementById("help-page-switch");
    });
})(Relati || (Relati = {}));
//# sourceMappingURL=Switcher.js.map