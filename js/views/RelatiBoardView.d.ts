import { RelatiGame } from "../RelatiGame";
import { RelatiGrid } from "../RelatiBoard";
export declare class RelatiBoardView {
    game: RelatiGame;
    gridSize: number;
    width: number;
    height: number;
    layers: SVGGElement[];
    container: SVGSVGElement;
    background: SVGGElement;
    gridRenderers: GridRenderer[];
    boardRenderers: BoardRenderer[];
    constructor(game: RelatiGame, gridSize: number);
    render(): void;
}
export interface GridRenderer {
    render(grid: RelatiGrid, gridSize: number): SVGElement | undefined;
}
export interface BoardRenderer {
    boardView: RelatiBoardView;
    render(): void;
}
