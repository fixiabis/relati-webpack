import { RelatiBoard, RelatiGrid } from "../RelatiBoard";
import { RelatiSVG } from "../RelatiSVG";

export class RelatiBoardView {
    public view: SVGElement;
    public width: number;
    public height: number;
    public background = RelatiSVG("g");
    public gridViews: RelatiGridView[] = [];

    constructor(public board: RelatiBoard, public gridSize: number) {
        var { width, height } = board;

        this.width = width * gridSize;
        this.height = height * gridSize;

        this.view = RelatiSVG("svg", {
            "width": `${this.width}`,
            "height": `${this.height}`
        });

        this.view.appendChild(this.background);

        var gridLineProp = {
            "d": "",
            "stroke": "#888",
            "stroke-width": `${gridSize * 0.08}`,
            "fill": "none"
        };

        for (var x = 1; x < width; x++) {
            gridLineProp["d"] = `M ${x * gridSize} 0 V ${gridSize * height}`;
            var gridLine = RelatiSVG("path", gridLineProp);
            this.view.appendChild(gridLine);
        }

        for (var y = 1; y < height; y++) {
            gridLineProp["d"] = `M 0 ${y * gridSize} H ${gridSize * width}`;
            var gridLine = RelatiSVG("path", gridLineProp);
            this.view.appendChild(gridLine);
        }

        for (var grid of board.gridList) {
            this.gridViews.push(new RelatiGridView(grid, gridSize));
        }
    }

    update() {
        for (var gridView of this.gridViews) {
            gridView.update();
        }
    }
}

export class RelatiGridView {
    public view = RelatiSVG("g");
    public x: number;
    public y: number;

    constructor(
        public grid: RelatiGrid,
        public gridSize: number
    ) {
        this.x = grid.x * gridSize;
        this.y = grid.y * gridSize;
    }

    update() {

    }
}