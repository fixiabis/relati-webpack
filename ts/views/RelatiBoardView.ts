import { RelatiBoard, RelatiGrid } from "../RelatiBoard";
import { RelatiSVG } from "../RelatiSVG";

export class RelatiBoardView {
    public view: SVGElement;
    public width: number;
    public height: number;
    public background = RelatiSVG("g");
    public viewGroups: SVGGElement[] = [];
    public renderers: RelatiBoardRenderer[] = [];

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

        this.viewGroups.push(this.background);
    }
}

export interface RelatiBoardRenderer {
    render(boardView: RelatiBoardView): void;
}