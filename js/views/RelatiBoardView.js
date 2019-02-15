(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../RelatiSVG"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RelatiSVG_1 = require("../RelatiSVG");
    var RelatiBoardView = /** @class */ (function () {
        function RelatiBoardView(board, gridSize) {
            this.board = board;
            this.gridSize = gridSize;
            this.background = RelatiSVG_1.RelatiSVG("g");
            this.gridViews = RelatiSVG_1.RelatiSVG("g");
            this.foreground = RelatiSVG_1.RelatiSVG("g");
            this.renderers = [];
            var width = board.width, height = board.height;
            this.width = width * gridSize;
            this.height = height * gridSize;
            this.view = RelatiSVG_1.RelatiSVG("svg", {
                "width": "" + this.width,
                "height": "" + this.height
            });
            this.view.appendChild(this.background);
            var gridLineProp = {
                "d": "",
                "stroke": "#888",
                "stroke-width": "" + gridSize * 0.08,
                "fill": "none"
            };
            for (var x = 1; x < width; x++) {
                gridLineProp["d"] = "M " + x * gridSize + " 0 V " + gridSize * height;
                var gridLine = RelatiSVG_1.RelatiSVG("path", gridLineProp);
                this.view.appendChild(gridLine);
            }
            for (var y = 1; y < height; y++) {
                gridLineProp["d"] = "M 0 " + y * gridSize + " H " + gridSize * width;
                var gridLine = RelatiSVG_1.RelatiSVG("path", gridLineProp);
                this.view.appendChild(gridLine);
            }
        }
        RelatiBoardView.prototype.update = function () {
            this.view.removeChild(this.gridViews);
            this.gridViews = RelatiSVG_1.RelatiSVG("g");
            for (var _i = 0, _a = this.renderers; _i < _a.length; _i++) {
                var roleRenderer = _a[_i];
                roleRenderer.render(this);
            }
        };
        return RelatiBoardView;
    }());
    exports.RelatiBoardView = RelatiBoardView;
});
//# sourceMappingURL=RelatiBoardView.js.map