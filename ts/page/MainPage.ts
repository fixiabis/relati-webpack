import "../../scss/page/main-page.scss";
import { Page } from "../main/Page";

const toGamePage: HTMLElement = document.getElementById("main-to-game") as HTMLElement;
const toHelpPage: HTMLElement = document.getElementById("main-to-help") as HTMLElement;

toGamePage.addEventListener("click", event => Page.switchTo("game"));
toHelpPage.addEventListener("click", event => Page.switchTo("help"));