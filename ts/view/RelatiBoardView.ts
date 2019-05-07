import { createSVG, updateSVG } from "../core/SVGProcess";
import {
    RelatiGrid, RelatiBoard,
    RELATI_SYMBOL_N, RELATI_SYMBOL_O, RELATI_SYMBOL_X,
    RELATI_LAUNCHER, RELATI_REPEATER
} from "../core/RelatiBoard";

export class RelatiBoardView {
    public gridViews: RelatiGridView[] = [];
    public view: SVGSVGElement = createSVG("svg");
    public background: SVGGElement = createSVG("g");

    constructor(public board: RelatiBoard, public container: HTMLElement) {
        updateSVG(this.view, {
            "width": `${board.width * 5}`,
            "height": `${board.height * 5}`
        });

        let linesContainer = createSVG("g");

        let lineAttr = {
            "d": "",
            "stroke": "#888",
            "stroke-width": "0.4"
        };

        for (let x = 1; x < board.width; x++) {
            lineAttr["d"] = `M ${x * 5} 0 V ${board.height * 5}`;
            let line = createSVG("path", lineAttr);
            linesContainer.appendChild(line);
        }

        for (let y = 1; y < board.height; y++) {
            lineAttr["d"] = `M 0 ${y * 5} H ${board.width * 5}`;
            let line = createSVG("path", lineAttr);
            linesContainer.appendChild(line);
        }

        container.appendChild(this.view);
        this.view.appendChild(this.background);
        this.view.appendChild(linesContainer);

        for (let grid of board.grids) {
            let gridView = new RelatiGridView(this, grid);
            this.gridViews.push(gridView);
            this.view.appendChild(gridView.view);
        }

        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        let { container, board: { width, height } } = this;

        this.view.style.transform = "scale(" + Math.min(
            container.clientWidth / (width * 5),
            container.clientHeight / (height * 5)
        ) * 0.95 + ")";
    }

    update() {
        for (let i = 0; i < this.gridViews.length; i++) {
            let gridView = this.gridViews[i];
            gridView.update();
        }
    }

    removeBackground() {
        let { background } = this;
        let childCount = background.childNodes.length;
        while (childCount-- > 0) background.removeChild(background.childNodes[0]);
    }
}

export class RelatiGridView {
    public body: number = 0;
    public view: SVGGElement = createSVG("g");

    constructor(public boardView: RelatiBoardView, public grid: RelatiGrid) {
        this.body = grid.body;
    }

    update() {
        let { grid } = this;

        if (this.body === grid.body) return;

        let symbolAttr = {
            "d": "",
            "fill": "none",
            "stroke": "",
            "stroke-width": "0.6"
        };

        let srtX = grid.x * 5 + 1;
        let srtY = grid.y * 5 + 1;
        let endX = grid.x * 5 + 4;
        let endY = grid.y * 5 + 4;

        switch (grid.body & 0b00000111) {
            case RELATI_SYMBOL_N: {
                let childCount = this.view.childNodes.length;
                while (childCount-- > 0) this.view.removeChild(this.view.childNodes[0]);
                break;
            }

            case RELATI_SYMBOL_O: {
                symbolAttr["d"] = (
                    `M ${srtX + 1.5} ${srtY + 1.5} ` +
                    "m 0 -1.5 " +
                    "a 1.5 1.5 0 0 1, 0 3 " +
                    "a 1.5 1.5 0 0 1, 0 -3"
                );
                symbolAttr["stroke"] = "crimson";
                break;
            }

            case RELATI_SYMBOL_X: {
                symbolAttr["d"] = (
                    `M ${srtX} ${srtY} L ${endX} ${endY} ` +
                    `M ${endX} ${srtY} L ${srtX} ${endY}`
                );
                symbolAttr["stroke"] = "royalblue";
                break;
            }
        }

        if (!this.body) {
            if (!grid.isSpace) {
                if (grid.is(RELATI_LAUNCHER)) {
                    symbolAttr["stroke-width"] = "1.2";
                    this.view.appendChild(createSVG("path", symbolAttr));

                    symbolAttr["stroke-width"] = "0.6";
                    symbolAttr["stroke"] = "#f2f2f2";
                    this.view.appendChild(createSVG("path", symbolAttr));
                } else if (grid.is(RELATI_REPEATER)) {
                    this.view.appendChild(createSVG("path", symbolAttr));
                } else {
                    symbolAttr["stroke"] = "#666";
                    this.view.appendChild(createSVG("path", symbolAttr));
                }
            }
        } else if (!grid.is(RELATI_LAUNCHER)) {
            let color = symbolAttr["stroke"];

            if (!grid.is(RELATI_REPEATER)) color = "#666";
            let childCount = this.view.childNodes.length;

            while (childCount-- > 0) updateSVG(
                this.view.childNodes[childCount] as SVGElement,
                { "stroke": color }
            );
        }

        this.body = grid.body;
    }
}