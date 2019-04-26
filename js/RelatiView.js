"use strict";
var Relati;
(function (Relati) {
    var SVGNS = "http://www.w3.org/2000/svg";
    function createSVG(tagName, attribute) {
        var element = document.createElementNS(SVGNS, tagName);
        if (attribute)
            updateSVG(element, attribute);
        return element;
    }
    Relati.createSVG = createSVG;
    function updateSVG(element, attribute) {
        for (var name_1 in attribute) {
            element.setAttribute(name_1, attribute[name_1]);
        }
    }
    Relati.updateSVG = updateSVG;
    var RelatiBoardView = /** @class */ (function () {
        function RelatiBoardView(board, container) {
            this.board = board;
            this.container = container;
            this.gridViews = [];
            this.view = createSVG("svg");
            this.background = createSVG("g");
            var lines = createSVG("g");
            var lineAttr = {
                "d": "",
                "stroke": "#888",
                "stroke-width": "0.4"
            };
            for (var x = 1; x < board.width; x++) {
                lineAttr["d"] = "M " + x * 5 + " 0 V " + board.height * 5;
                var line = createSVG("path", lineAttr);
                lines.appendChild(line);
            }
            for (var y = 1; y < board.height; y++) {
                lineAttr["d"] = "M 0 " + y * 5 + " H " + board.width * 5;
                var line = createSVG("path", lineAttr);
                lines.appendChild(line);
            }
            updateSVG(this.view, {
                "width": "" + board.width * 5,
                "height": "" + board.height * 5
            });
            container.appendChild(this.view);
            this.view.appendChild(this.background);
            this.view.appendChild(lines);
            for (var _i = 0, _a = board.grids; _i < _a.length; _i++) {
                var grid = _a[_i];
                var gridView = new RelatiGridView(this, grid);
                this.gridViews.push(gridView);
                this.view.appendChild(gridView.view);
            }
            this.resize();
            window.addEventListener("resize", this.resize.bind(this));
        }
        RelatiBoardView.prototype.resize = function () {
            var _a = this, container = _a.container, _b = _a.board, width = _b.width, height = _b.height;
            this.view.style.transform = "scale(" + Math.min(container.clientWidth / (width * 5), container.clientHeight / (height * 5)) * 0.95 + ")";
        };
        RelatiBoardView.prototype.update = function () {
            for (var i = 0; i < this.gridViews.length; i++) {
                var gridView = this.gridViews[i];
                gridView.update();
            }
        };
        RelatiBoardView.prototype.removeBackground = function () {
            var background = this.background;
            var times = background.childNodes.length;
            while (times-- > 0)
                background.removeChild(background.childNodes[0]);
        };
        return RelatiBoardView;
    }());
    Relati.RelatiBoardView = RelatiBoardView;
    var RelatiGridView = /** @class */ (function () {
        function RelatiGridView(boardView, grid) {
            this.boardView = boardView;
            this.grid = grid;
            this.body = 0;
            this.view = createSVG("g");
            this.body = grid.body;
        }
        RelatiGridView.prototype.update = function () {
            var grid = this.grid;
            if (this.body === grid.body)
                return;
            var symbolAttr = {
                "d": "",
                "fill": "none",
                "stroke": "",
                "stroke-width": "0.6"
            };
            var srtX = grid.x * 5 + 1;
            var srtY = grid.y * 5 + 1;
            var endX = grid.x * 5 + 4;
            var endY = grid.y * 5 + 4;
            switch (grid.body & 7) {
                case Relati.RELATI_SYMBOL_N: {
                    var times = this.view.childNodes.length;
                    while (times-- > 0)
                        this.view.removeChild(this.view.childNodes[0]);
                    break;
                }
                case Relati.RELATI_SYMBOL_O: {
                    symbolAttr["d"] = ("M " + (srtX + 1.5) + " " + (srtY + 1.5) + " " +
                        "m 0 -1.5 " +
                        "a 1.5 1.5 0 0 1, 0 3 " +
                        "a 1.5 1.5 0 0 1, 0 -3");
                    symbolAttr["stroke"] = "crimson";
                    break;
                }
                case Relati.RELATI_SYMBOL_X: {
                    symbolAttr["d"] = ("M " + srtX + " " + srtY + " L " + endX + " " + endY + " " +
                        ("M " + endX + " " + srtY + " L " + srtX + " " + endY));
                    symbolAttr["stroke"] = "royalblue";
                    break;
                }
            }
            if (!this.body) {
                if (!grid.isSpace) {
                    if (grid.is(Relati.RELATI_LAUNCHER)) {
                        symbolAttr["stroke-width"] = "1.2";
                        this.view.appendChild(createSVG("path", symbolAttr));
                        symbolAttr["stroke-width"] = "0.6";
                        symbolAttr["stroke"] = "#f2f2f2";
                        this.view.appendChild(createSVG("path", symbolAttr));
                    }
                    else if (grid.is(Relati.RELATI_REPEATER)) {
                        this.view.appendChild(createSVG("path", symbolAttr));
                    }
                    else {
                        symbolAttr["stroke"] = "#666";
                        this.view.appendChild(createSVG("path", symbolAttr));
                    }
                }
            }
            else if (!grid.is(Relati.RELATI_LAUNCHER)) {
                var color = symbolAttr["stroke"];
                if (!grid.is(Relati.RELATI_REPEATER))
                    color = "#666";
                var times = this.view.childNodes.length;
                while (times-- > 0)
                    updateSVG(this.view.childNodes[times], { "stroke": color });
            }
            this.body = grid.body;
        };
        return RelatiGridView;
    }());
    Relati.RelatiGridView = RelatiGridView;
})(Relati || (Relati = {}));
