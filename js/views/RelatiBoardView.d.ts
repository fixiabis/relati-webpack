import { RelatiBoard } from "../RelatiBoard";
export declare class RelatiBoardView {
    board: RelatiBoard;
    gridSize: number;
    view: SVGElement;
    width: number;
    height: number;
    background: SVGGElement;
    gridViews: SVGGElement;
    foreground: SVGGElement;
    renderers: RelatiRenderer[];
    constructor(board: RelatiBoard, gridSize: number);
    update(): void;
}
export interface RelatiRenderer {
    render(boardView: RelatiBoardView): void;
}
