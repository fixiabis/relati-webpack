declare type SVGElementProp = {
    [name: string]: string;
};
export declare function RelatiSVG(type: string, prop?: SVGElementProp): SVGElement;
export declare namespace RelatiSVG {
    var update: (element: SVGElement, prop: SVGElementProp) => void;
}
export {};
