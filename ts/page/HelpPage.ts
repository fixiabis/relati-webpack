import { Page } from "../view/Page";

const toMainPageButton: HTMLElement = document.getElementById("help-to-main") as HTMLElement;

toMainPageButton.addEventListener("click", event => Page.switchTo("main"));