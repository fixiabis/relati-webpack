var createSVG = (function () {
    var svgNS = "http://www.w3.org/2000/svg";
    return tag => document.createElementNS(svgNS, tag);
})();

class RelatiGame {
    constructor(container, size) {
        var board = new GridBoard(size, size);
        var viewer = createSVG("svg");
        var vLines = [];
        var hLines = [];
        var gridSize = (Math.min(
            container.clientWidth,
            container.clientHeight
        ) * 0.9 / size) | 0;
        var gridLineSize = gridSize / 10;

        for (let x = 1; x < size; x++) {
            let line = createSVG("path");
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M ${x * gridSize} 0 V ${gridSize * size}`);
            line.setAttribute("stroke", "#888");
            viewer.appendChild(line);
            vLines.push(line);
        }

        for (let y = 1; y < size; y++) {
            let line = createSVG("path");
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M 0 ${y * gridSize} H ${gridSize * size}`)
            line.setAttribute("stroke", "#888");
            viewer.appendChild(line);
            hLines.push(line);
        }

        viewer.setAttribute("width", gridSize * size);
        viewer.setAttribute("height", gridSize * size);
        viewer.addEventListener("click", function (event) {
            var x = (event.offsetX / this.gridSize) | 0,
                y = (event.offsetY / this.gridSize) | 0;
            var grid = board.grids[x][y];
            if (board.ongridselect) board.ongridselect(grid);
        }.bind(this));

        container.appendChild(viewer);

        this.size = size;
        this.board = board;
        this.viewer = viewer;
        this.vLines = vLines;
        this.hLines = hLines;
        this.gridSize = gridSize;
        this.container = container
    }
    viewerResize() {
        var container = this.container;
        var size = this.size;
        var gridSize = (Math.min(
            container.clientWidth,
            container.clientHeight
        ) * 0.9 / size) | 0;
        var gridLineSize = gridSize / 10;

        for (let x = 1; x < size; x++) {
            var line = this.vLines[x - 1];
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M ${x * gridSize} 0 V ${gridSize * size}`);
        }

        for (let y = 1; y < size; y++) {
            var line = this.hLines[y - 1];
            line.setAttribute("stroke-width", gridLineSize / 2);
            line.setAttribute("d", `M 0 ${y * gridSize} H ${gridSize * size}`)
        }

        this.viewer.setAttribute("width", gridSize * size);
        this.viewer.setAttribute("height", gridSize * size);
        this.gridSize = gridSize;
    }
}