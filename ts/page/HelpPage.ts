namespace Relati {
    let toMainPage: HTMLElement;

    document.addEventListener("readystatechange", function handler(event) {
        if (document.readyState != "complete") return;

        toMainPage = document.getElementById("help-to-main") as HTMLElement;
        toMainPage.addEventListener("click", event => {
            mainPageSwitch.checked = true;
        });

        document.removeEventListener("readystatechange", handler);
    });
}