namespace Relati {
    let toGamePage: HTMLElement;
    let toHelpPage: HTMLElement;

    document.addEventListener("readystatechange", function handler(event) {
        if (document.readyState != "complete") return;

        toGamePage = document.getElementById("main-to-game") as HTMLElement;
        toHelpPage = document.getElementById("main-to-help") as HTMLElement;

        toGamePage.addEventListener("click", event => gamePageSwitch.checked = true);
        toHelpPage.addEventListener("click", event => gamePageSwitch.checked = true);

        document.removeEventListener("readystatechange", handler);
    });
}