type SVGElementProp = { [name: string]: string };

export function RelatiView(type: string, prop: SVGElementProp = {}) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", type);

    for (var name in prop) {
        element.setAttribute(name, prop[name]);
    }

    return element;
}

RelatiView.update = function (element: SVGElement, prop: SVGElementProp) {
    for (var name in prop) {
        element.setAttribute(name, prop[name]);
    }
};