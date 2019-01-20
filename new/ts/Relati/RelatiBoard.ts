namespace Relati {
    export interface RelatiBoard extends GridBoard {
        grids: RelatiGrid[][];
        gridList: RelatiGrid[];
        query(command: string): RelatiGrid;
        queries(command: string): RelatiGrid[];
    }
}