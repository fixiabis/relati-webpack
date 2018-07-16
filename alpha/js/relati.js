var createSVG = (function () {
    var svgNS = "http://www.w3.org/2000/svg";
    return tag => document.createElementNS(svgNS, tag);
})();

var getRelatiList = (function () {
    var dirO = ["F", "B", "R", "L", "FR", "FL", "BR", "BL"]
    var dir2O = dirO.map(dir => dir + dir);
    var dirTX = ["FFR", "FFL", "BBR", "BBL", "FRR", "FLL", "BRR", "BLL"];

    function normalRelatiList(grid, sym) {
        var list = [];

        for (var i = 0; i < dirO.length; i++) {
            var sourceGrid = grid.getGridFromDir(dirO[i]);
            if (!grid) continue;

            if (sourceGrid.symbol === sym) {
                list.push(grid);
            }
        }

        return list;
    }

    function remoteRelatiList(grid, sym) {
        var list = [];

        for (var i = 0; i < dir2O.length; i++) {
            var sourceGrid = grid.getGridFromDir(dir2O[i]);
            if (!grid) continue;

            var spaceGrid = grid.getGridFromDir(dirO[i]);

            if (sourceGrid.symbol === sym && spaceGrid.symbol === "") {
                list.push(grid);
            }
        }

        return list;
    }

    function remoteStableRelatiList(grid, sym) {
        var list = [];

        for (var i = 0; i < dirTX.length; i++) {
            var sourceGrid = grid.getGridFromDir(dirTX[i]);
            if (!grid) continue;

            var spaceGrid2T = grid.getGridFromDir(dir2O[(i / 2) | 0]);
            var spaceGridT = grid.getGridFromDir(dirO[(i / 2) | 0]);
            var spaceGridIH = grid.getGridFromDir(dirO[(i / 2) | 0 + 4]);
            var spaceGridI = grid.getGridFromDir(dirO[(((i % 4) | 0) / 2) | 0]);
            var spaceGridH = grid.getGridFromDir(dirO[i % 2 + 2]);

            if (
                sourceGrid.symbol === sym && (
                    spaceGrid2T.symbol === "" &&
                    spaceGridT.symbol === "" ||
                    spaceGridIH.symbol === "" && (
                        spaceGridI.symbol === "" ||
                        spaceGridH.symbol === ""
                    )
                )
            ) {
                list.push(grid);
            }
        }

        return list;
    }

    return function (grid, sym) {
        var list = [];

        list = list.concat(normalRelatiList(grid, sym));
        list = list.concat(remoteRelatiList(grid, sym));
        list = list.concat(remoteStableRelatiList(grid, sym));

        return list;
    }
})();

class RelatiBoard extends GridBoard {
    constructor(width, height) {
        super(width, height);
        var viewer = createSVG("svg");
        var canvas = createSVG("svg");

        canvas.setAttribute("width", width * 40);
        canvas.setAttribute("height", height * 40);

        for (let x = 1; x < width; x++) {
            let line = createSVG("path");
            line.setAttribute("stroke-width", 2);
            line.setAttribute("d", `M ${x * 40} 0 V ${40 * width}`);
            line.setAttribute("stroke", "#888");
            canvas.appendChild(line);
        }

        for (let y = 1; y < height; y++) {
            let line = createSVG("path");
            line.setAttribute("stroke-width", 2);
            line.setAttribute("d", `M 0 ${y * 40} H ${40 * height}`)
            line.setAttribute("stroke", "#888");
            canvas.appendChild(line);
        }

        viewer.appendChild(canvas);
        viewer.setAttribute("viewbox", `0 0 ${width} ${height}`);

        this.viewer = viewer;
        this.canvas = canvas;
    }
}

var gameStartButton = document.getElementById("game-start");
var welcomePage = document.getElementById("welcome-page");
var selectPage = document.getElementById("select-page");
var boardPage = document.getElementById("board-page");
var board5x5 = document.getElementById("board-5x5");
var board7x7 = document.getElementById("board-7x7");
var board9x9 = document.getElementById("board-9x9");
var board11x11 = document.getElementById("board-11x11")

gameStartButton.addEventListener("click", function () {
    welcomePage.classList.remove("active");
    selectPage.classList.add("active");
});

board5x5.addEventListener("click", function () {
    
});