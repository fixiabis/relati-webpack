namespace Relati {
    export let mainPageSwitch: HTMLElement | null = null;
    export let gamePageSwitch: HTMLElement | null = null;
    export let helpPageSwitch: HTMLElement | null = null;

    document.addEventListener("readystatechange", event => {
        if (document.readyState != "complete") return;
        mainPageSwitch = document.getElementById("main-page-switch");
        gamePageSwitch = document.getElementById("game-page-switch");
        helpPageSwitch = document.getElementById("help-page-switch");
    });
}