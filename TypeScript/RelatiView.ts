const SVGNS = "http://www.w3.org/2000/svg";

function createSVG<T extends keyof SVGElementTagNameMap>(
    tagName: T,
    attribute?: { [name: string]: string }
): SVGElementTagNameMap[T] {
    let element = document.createElementNS(SVGNS, tagName);
    if (attribute) updateSVG(element, attribute);
    return element;
}

function updateSVG(element: SVGElement, attribute: { [name: string]: string }) {
    for (let name in attribute) {
        element.setAttribute(name, attribute[name]);
    }
}

class RelatiBoardView {
    public gridViews: RelatiGridView[] = [];
    public view: SVGSVGElement = createSVG("svg");
    public background: SVGGElement = createSVG("g");

    constructor(public board: RelatiBoard, public container: HTMLElement) {
        let lines = createSVG("g");

        let lineAttr = {
            "d": "",
            "stroke": "#888",
            "stroke-width": "0.4"
        };

        for (let x = 1; x < board.width; x++) {
            lineAttr["d"] = `M ${x * 5} 0 V ${board.height * 5}`;
            let line = createSVG("path", lineAttr);
            lines.appendChild(line);
        }

        for (let y = 1; y < board.height; y++) {
            lineAttr["d"] = `M 0 ${y * 5} H ${board.width * 5}`;
            let line = createSVG("path", lineAttr);
            lines.appendChild(line);
        }

        updateSVG(this.view, {
            "width": `${board.width * 5}`,
            "height": `${board.height * 5}`
        });

        container.appendChild(this.view);
        this.view.appendChild(this.background);
        this.view.appendChild(lines);


        for (let i = 0; i < board.length; i++) {
            let grid = board.grids[i];
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
}

class RelatiGridView {
    public body: number = 0;
    public view: SVGGElement = createSVG("g");

    constructor(public boardView: RelatiBoardView, public grid: RelatiGrid) {
        this.body = grid.body;
    }

    update() {
        let { grid } = this;

        if (this.body === grid.body) return;
        this.body = grid.body;

        let symbolAttr = {
            "d": "",
            "fill": "none",
            "stroke": "",
            "stroke-width": "0.6"
        };

        var srtX = grid.x * 5 + 1;
        var srtY = grid.y * 5 + 1;
        var endX = grid.x * 5 + 4;
        var endY = grid.y * 5 + 4;

        switch (this.body & 0b00000111) {
            case RELATI_SYMBOL_N: {
                let times = this.view.childNodes.length;
                while (times-- > 0) this.view.removeChild(this.view.childNodes[0]);
                break;
            }

            case RELATI_SYMBOL_O: {
                symbolAttr["d"] = `
                    M ${srtX + 1.5} ${srtY + 1.5}
                    m 0 -1.5
                    a 1.5 1.5 0 0 1, 0 3
                    a 1.5 1.5 0 0 1, 0 -3
                `;
                symbolAttr["stroke"] = "crimson";
                break;
            }

            case RELATI_SYMBOL_X: {
                symbolAttr["d"] = `
                    M ${srtX} ${srtY} L ${endX} ${endY}
                    M ${endX} ${srtY} L ${srtX} ${endY}
                `;
                symbolAttr["stroke"] = "royalblue";
                break;
            }
        }

        if (!grid.isSpace) if (grid.is(RELATI_LAUNCHER)) {
            symbolAttr["stroke-width"] = "1.2";
            this.view.appendChild(createSVG("path", symbolAttr));
            symbolAttr["stroke-width"] = "0.6";
            symbolAttr["stroke"] = "#f2f2f2";
            this.view.appendChild(createSVG("path", symbolAttr));
        } else if (grid.is(RELATI_REPEATER)) {
            this.view.appendChild(createSVG("path", symbolAttr));
        } else {
            symbolAttr.stroke = "#666";
            this.view.appendChild(createSVG("path", symbolAttr));
        }
    }
}