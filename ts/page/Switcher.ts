namespace Relati {
    export let mainPageSwitch: HTMLInputElement;
    export let gamePageSwitch: HTMLInputElement;
    export let helpPageSwitch: HTMLInputElement;

    document.addEventListener("readystatechange", function handler(event) {
        if (document.readyState != "complete") return;

        mainPageSwitch = document.getElementById("main-page-switch") as HTMLInputElement;
        gamePageSwitch = document.getElementById("game-page-switch") as HTMLInputElement;
        helpPageSwitch = document.getElementById("help-page-switch") as HTMLInputElement;

        document.removeEventListener("readystatechange", handler);
    });
}