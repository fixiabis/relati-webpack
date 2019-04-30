"use strict";
var Relati;
(function (Relati) {
    document.addEventListener("readystatechange", function handler(event) {
        if (document.readyState != "complete")
            return;
        Relati.mainPageSwitch = document.getElementById("main-page-switch");
        Relati.gamePageSwitch = document.getElementById("game-page-switch");
        Relati.helpPageSwitch = document.getElementById("help-page-switch");
        document.removeEventListener("readystatechange", handler);
    });
})(Relati || (Relati = {}));
//# sourceMappingURL=Switcher.js.map