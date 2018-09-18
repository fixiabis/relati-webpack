"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lib;
(function (lib) {
    var colors = {
        "O": "#dc143c",
        "X": "#4169e1"
    };
    var viewOperate = {
        symbol: {
            "": function (grid) {
                removeView(grid);
            },
            "O": function (grid) {
                removeView(grid);
                grid.views = [
                    grid.board.viewer.create("circle", {
                        "stroke-width": "0.6",
                        "cx": "" + (grid.x * 5 + 2.5),
                        "cy": "" + (grid.y * 5 + 2.5),
                        "r": "1.5",
                        "stroke": colors.O,
                        "fill": "none"
                    })
                ];
                appendView(grid);
                grid.prop.status = "normal";
            },
            "X": function (grid) {
                removeView(grid);
                var srtX = grid.x * 5 + 1;
                var srtY = grid.y * 5 + 1;
                var endX = grid.x * 5 + 4;
                var endY = grid.y * 5 + 4;
                grid.views = [
                    grid.board.viewer.create("path", {
                        "stroke-width": "0.6",
                        "stroke": colors.X,
                        "d": "M " + srtX + " " + srtY + " L " + endX + " " + endY,
                        "fill": "none"
                    }),
                    grid.board.viewer.create("path", {
                        "stroke-width": "0.6",
                        "stroke": colors.X,
                        "d": "M " + srtX + " " + endY + " L " + endX + " " + srtY,
                        "fill": "none"
                    })
                ];
                appendView(grid);
                grid.prop.status = "normal";
            }
        },
        status: {
            "normal": function (grid) {
                grid.symbol = grid.symbol;
            },
            "source": function (grid) {
                updateView(grid, { "stroke-width": "1.2" });
                var views = grid.views;
                removeView(grid);
                grid.symbol = grid.symbol;
                updateView(grid, { "stroke": "#f2f2f2" });
                views = views.concat(grid.views);
                removeView(grid);
                grid.views = views;
                appendView(grid);
            },
            "forbid": function (grid) {
                grid.symbol = grid.symbol;
                updateView(grid, { "stroke": "#666" });
            },
            "broken": function (grid) {
                grid.symbol = grid.symbol;
                updateView(grid, { "stroke": "#bbb" });
            },
            "select": function (grid) {
                var srtX = grid.x * 5 + 0.5;
                var srtY = grid.y * 5 + 0.5;
                var endX = grid.x * 5 + 4.5;
                var endY = grid.y * 5 + 4.5;
                var views = grid.views;
                removeView(grid);
                grid.views = views.concat([
                    grid.board.viewer.create("path", {
                        "stroke-width": "0.4",
                        "d": "M " + srtX + " " + (srtY + 1) + " V " + srtY + " H " + (srtX + 1),
                        "stroke": colors[grid.symbol],
                        "fill": "none"
                    }),
                    grid.board.viewer.create("path", {
                        "stroke-width": "0.4",
                        "d": "M " + endX + " " + (srtY + 1) + " V " + srtY + " H " + (endX - 1),
                        "stroke": colors[grid.symbol],
                        "fill": "none"
                    }),
                    grid.board.viewer.create("path", {
                        "stroke-width": "0.4",
                        "d": "M " + (srtX + 1) + " " + endY + " H " + srtX + " V " + (endY - 1),
                        "stroke": colors[grid.symbol],
                        "fill": "none"
                    }),
                    grid.board.viewer.create("path", {
                        "stroke-width": "0.4",
                        "d": "M " + (endX - 1) + " " + endY + " H " + endX + " V " + (endY - 1),
                        "stroke": colors[grid.symbol],
                        "fill": "none"
                    })
                ]);
                appendView(grid);
            }
        }
    };
    ["O", "X"].forEach(function (sym) {
        viewOperate.status[sym + ".next"] = function (grid) {
            return createDot(grid, sym, 0.4);
        };
    });
    ["O", "X"].forEach(function (sym) {
        viewOperate.status[sym + ".exit"] = function (grid) {
            createDot(grid, sym, 0.2);
        };
    });
    function appendView(grid) {
        grid.views.forEach(function (view) {
            grid.board.viewer.body.appendChild(view);
        });
    }
    function removeView(grid) {
        grid.views.forEach(function (view) {
            grid.board.viewer.body.removeChild(view);
        });
        grid.views = [];
    }
    function updateView(grid, property) {
        grid.views.forEach(function (view) {
            for (var name in property) {
                var value = property[name];
                view.setAttribute(name, value);
            }
        });
    }
    function createDot(grid, sym, size) {
        removeView(grid);
        grid.views = [
            grid.board.viewer.create("circle", {
                "cx": "" + (grid.x * 5 + 2.5),
                "cy": "" + (grid.y * 5 + 2.5),
                "r": "" + size,
                "fill": colors[sym]
            })
        ];
        appendView(grid);
    }
    function gridIs(type, sym) {
        var _this = this;
        switch (type) {
            case "space": return this.symbol === "";
            case "owner": return this.symbol === sym;
            case "other": return !this.is("owner|space", sym);
            case "valid": return this.is("source|normal", sym) && !this.is("space", sym);
            default:
                if (this.is[type])
                    return this.is[type].bind(this)(sym);
                if (type.indexOf("|") > -1) {
                    var types = type.split(/\|/g);
                    return types.map(function (type) { return _this.is(type, sym); }).indexOf(true) > -1;
                }
                if (type.indexOf("&") > -1 || type.indexOf(" ") > -1) {
                    var types = type.split(/&| /g);
                    return types.map(function (type) { return _this.is(type, sym); }).indexOf(false) < 0;
                }
                return this.status === type;
        }
    }
    function gridPatch(grid) {
        grid.is = gridIs;
        grid.prop = {
            symbol: "",
            status: "normal"
        };
        grid.views = [];
        ["symbol", "status"].forEach(function (name) {
            Object.defineProperty(grid, name, {
                get: function () { return this.prop[name]; },
                set: function (value) {
                    if (!viewOperate[name][value])
                        return;
                    viewOperate[name][value](this);
                    this.prop[name] = value;
                }
            });
        });
    }
    function viewerPatch(viewer) {
        viewer.appendGridPath = appendGridPath;
        viewer.removeBackground = removeBackground;
    }
    function appendGridPath(grids, color) {
        if (this.backgroundFixed)
            return;
        var root = grids[0];
        var path = "M " + (root.x * 5 + 2.5) + " " + (root.y * 5 + 2.5) + " ";
        for (var i = 1; i < grids.length; i++) {
            var grid = grids[i];
            path += "L " + (grid.x * 5 + 2.5) + " " + (grid.y * 5 + 2.5) + " ";
        }
        var line = this.create("path", {
            "stroke-width": "0.4",
            "stroke": color || colors[root.symbol],
            "d": path,
            "fill": "none"
        });
        line.style.opacity = "0.2";
        this.background.appendChild(line);
    }
    ;
    function removeBackground() {
        if (this.backgroundFixed)
            return;
        var childNodes = this.background.childNodes;
        while (childNodes.length > 0) {
            this.background.removeChild(childNodes[0]);
        }
    }
    ;
    var SymtusBoard = (function (_super) {
        __extends(SymtusBoard, _super);
        function SymtusBoard(width, height) {
            var _this = _super.call(this, width, height) || this;
            for (var crd in _this.gridOf) {
                var grid = _this[crd];
                gridPatch(grid);
            }
            viewerPatch(_this.viewer);
            return _this;
        }
        SymtusBoard.prototype.find = function (type, sym) {
            var result = [];
            for (var crd in this.gridOf) {
                var grid = this[crd];
                if (grid.is(type, sym)) {
                    result.push(grid);
                }
            }
            return result;
        };
        SymtusBoard.prototype.clean = function () {
            for (var crd in this.gridOf) {
                var grid = this[crd];
                grid.symbol = "";
                grid.status = "normal";
            }
            this.viewer.backgroundFixed = false;
            this.viewer.removeBackground();
        };
        return SymtusBoard;
    }(lib.GridBoard));
    lib.SymtusBoard = SymtusBoard;
})(lib || (lib = {}));
