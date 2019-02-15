import { RelatiBoard } from "../RelatiBoard";
export declare class RelatiBoardView {
    board: RelatiBoard;
    gridSize: number;
    view: SVGElement;
    width: number;
    height: number;
    background: SVGGElement;
    viewGroups: SVGGElement[];
    renderers: RelatiBoardRenderer[];
    constructor(board: RelatiBoard, gridSize: number);
}
export interface RelatiBoardRenderer {
    render(boardView: RelatiBoardView): void;
}
