(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function RelatiSVG(type, prop) {
        if (prop === void 0) { prop = {}; }
        var element = document.createElementNS("http://www.w3.org/2000/svg", type);
        for (var name in prop) {
            element.setAttribute(name, prop[name]);
        }
        return element;
    }
    exports.RelatiSVG = RelatiSVG;
    RelatiSVG.update = function (element, prop) {
        for (var name in prop) {
            element.setAttribute(name, prop[name]);
        }
    };
});
//# sourceMappingURL=RelatiSVG.js.map