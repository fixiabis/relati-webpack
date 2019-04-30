"use strict";
var Relati;
(function (Relati) {
    var toMainPage;
    document.addEventListener("readystatechange", function handler(event) {
        if (document.readyState != "complete")
            return;
        toMainPage = document.getElementById("game-to-main");
        toMainPage.addEventListener("click", function (event) {
            Relati.mainPageSwitch.checked = true;
        });
        document.removeEventListener("readystatechange", handler);
    });
})(Relati || (Relati = {}));
//# sourceMappingURL=GamePage.js.map