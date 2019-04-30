"use strict";
var Relati;
(function (Relati) {
    var toMainPage;
    document.addEventListener("readystatechange", function handler(event) {
        if (document.readyState != "complete")
            return;
        toMainPage = document.getElementById("help-to-main");
        toMainPage.addEventListener("click", function (event) {
            Relati.mainPageSwitch.checked = true;
        });
        document.removeEventListener("readystatechange", handler);
    });
})(Relati || (Relati = {}));
//# sourceMappingURL=HelpPage.js.map