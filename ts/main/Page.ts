export namespace Page {
    export function switchTo(pageName: string) {
        let activePage;
    
        activePage = document.getElementsByClassName("page active")[0];
        if (activePage) activePage.classList.remove("active");
    
        activePage = document.getElementById(`${pageName}-page`);
        if (activePage) activePage.classList.add("active");
    }
}