var createSVG = (function () {
    var svgNS = "http://www.w3.org/2000/svg";
    return tag => document.createElementNS(svgNS, tag);
})();

class RelatiGame {
    constructor(container) {
        var board = new GridBoard(5, 5);
        var viewer = createSVG("svg");
        var vLines = [];
        var hLines = [];
        var gridSize = (Math.min(
            container.clientWidth,
            container.clientHeight
        ) * 0.8 / 5) | 0;
        var gridLineSize = gridSize / 10;

        for (let x = 1; x < 5; x++) {
            let line = createSVG("path");
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M ${x * gridSize} 0 V ${gridSize * 5}`);
            line.setAttribute("stroke", "#888");
            viewer.appendChild(line);
            vLines.push(line);
        }

        for (let y = 1; y < 5; y++) {
            let line = createSVG("path");
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M 0 ${y * gridSize} H ${gridSize * 5}`)
            line.setAttribute("stroke", "#888");
            viewer.appendChild(line);
            hLines.push(line);
        }

        viewer.setAttribute("width", gridSize * 5);
        viewer.setAttribute("height", gridSize * 5);
        viewer.addEventListener("click", function (event) {
            var x = (event.offsetX / this.gridSize) | 0,
                y = (event.offsetY / this.gridSize) | 0;
            var grid = board.grids[x][y];
            if (board.ongridselect) board.ongridselect(grid);
        }.bind(this));

        container.appendChild(viewer);

        this.board = board;
        this.viewer = viewer;
        this.vLines = vLines;
        this.hLines = hLines;
        this.gridSize = gridSize;
        this.container = container
    }
    viewerResize() {
        var container = this.container;
        var gridSize = (Math.min(
            container.clientWidth,
            container.clientHeight
        ) * 0.8 / 5);
        var gridLineSize = gridSize / 10;

        for (let x = 1; x < 5; x++) {
            var line = this.vLines[x - 1];
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M ${x * gridSize} 0 V ${gridSize * 5}`);
        }

        for (let y = 1; y < 5; y++) {
            var line = this.hLines[y - 1];
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M 0 ${y * gridSize} H ${gridSize * 5}`)
        }

        this.viewer.setAttribute("width", gridSize * 5);
        this.viewer.setAttribute("height", gridSize * 5);
        this.gridSize = gridSize;
    }
}