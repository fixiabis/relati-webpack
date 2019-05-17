import { Page } from "../view/Page";
import { MessageBox } from "../view/MessageBox";

const toMainPageButton: HTMLElement = document.getElementById("help-to-main") as HTMLElement;

toMainPageButton.addEventListener("click", event => {
    MessageBox.show("confirm accept reject", "確認離開？", message => {
        if (message == "accept") Page.switchTo("main");
    });
});