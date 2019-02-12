import { RelatiBoard, RelatiGrid } from "../RelatiBoard";
export declare class RelatiBoardView {
    board: RelatiBoard;
    gridSize: number;
    view: SVGElement;
    width: number;
    height: number;
    background: SVGElement;
    gridViews: RelatiGridView[];
    constructor(board: RelatiBoard, gridSize: number);
    update(): void;
}
export declare class RelatiGridView {
    grid: RelatiGrid;
    gridSize: number;
    view: SVGElement;
    x: number;
    y: number;
    constructor(grid: RelatiGrid, gridSize: number);
    update(): void;
}
