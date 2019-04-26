"use strict";
var Relati;
(function (Relati) {
    var RELATI_VISITIED = 128;
    var SYMBOL_COLOR = ["#666", "crimson", "royalblue"];
    var dotAttr = {
        "cx": "",
        "cy": "",
        "r": "0.5",
        "fill": ""
    };
    function createDot(color, x, y) {
        dotAttr["cx"] = "" + (x * 5 + 2.5);
        dotAttr["cy"] = "" + (y * 5 + 2.5);
        dotAttr["fill"] = color;
        return Relati.createSVG("circle", dotAttr);
    }
    function createHint(grids, symbol, view) {
        var color = SYMBOL_COLOR[symbol];
        for (var _i = 0, grids_1 = grids; _i < grids_1.length; _i++) {
            var _a = grids_1[_i], x = _a.x, y = _a.y;
            view.appendChild(createDot(color, x, y));
        }
    }
    Relati.createHint = createHint;
    var lineAttr = {
        "d": "",
        "stroke-width": "0.5",
        "stroke": "",
        "fill": "none",
        "class": "relati-effect-line"
    };
    function createLine(source, traces, color, view) {
        lineAttr["d"] = "M " + (source.x * 5 + 2.5) + " " + (source.y * 5 + 2.5);
        lineAttr["stroke"] = color;
        for (var _i = 0, traces_1 = traces; _i < traces_1.length; _i++) {
            var grid = traces_1[_i];
            lineAttr["d"] += " L " + (grid.x * 5 + 2.5) + " " + (grid.y * 5 + 2.5);
        }
        var path = Relati.createSVG("path", lineAttr);
        path.style.opacity = "0.2";
        view.appendChild(path);
    }
    function createRelatiEffect(symbol, game) {
        var board = game.board, routeType = game.routeType, turn = game.turn;
        var color = SYMBOL_COLOR[symbol];
        for (var _i = 0, _a = board.grids; _i < _a.length; _i++) {
            var grid = _a[_i];
            grid.lost(RELATI_VISITIED);
        }
        for (var _b = 0, _c = board.grids; _b < _c.length; _b++) {
            var grid = _c[_b];
            if (grid.is(Relati.RELATI_LAUNCHER) && grid.symbol == symbol) {
                relatiEffect(grid, routeType, color, game, turn);
            }
        }
    }
    Relati.createRelatiEffect = createRelatiEffect;
    function relatiEffect(grid, routeType, color, game, turn) {
        if (grid.is(RELATI_VISITIED) || game.turn > turn)
            return;
        grid.gain(RELATI_VISITIED);
        game.boardView.update();
        setTimeout(function () {
            if (game.turn > turn)
                return;
            var traces = Relati.getRelatiTracesBy(grid, grid.symbol | Relati.RELATI_RECEIVER, routeType);
            for (var _i = 0, traces_2 = traces; _i < traces_2.length; _i++) {
                var grids = traces_2[_i];
                var targetGrid = grids[grids.length - 1];
                if (!targetGrid.is(RELATI_VISITIED)) {
                    createLine(grid, grids, color, game.boardView.background);
                    relatiEffect(targetGrid, routeType, color, game, turn);
                }
            }
        }, 500);
    }
})(Relati || (Relati = {}));
