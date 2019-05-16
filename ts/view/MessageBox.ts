export namespace MessageBox {
    export let view: HTMLElement = document.getElementById("message-box") as HTMLElement;
    export let acceptButton: HTMLElement = document.getElementById("message-accept") as HTMLElement;
    export let rejectButton: HTMLElement = document.getElementById("message-reject") as HTMLElement;
    export let verifyButton: HTMLElement = document.getElementById("message-verify") as HTMLElement;

    export type MessageCallback = (result: string) => void;
    let callback: MessageCallback | null;

    export function show(type: string, response: MessageCallback) {
        view.className = type;
        callback = response;
    }

    export function hide() {
        view.className = "none";
    }

    export function response(result: string) {
        if (callback) callback(result);
        callback = null;
        hide();
    }

    acceptButton.addEventListener("click", event => response("accept"));
    rejectButton.addEventListener("click", event => response("reject"));
    verifyButton.addEventListener("click", event => response("verify"));
}