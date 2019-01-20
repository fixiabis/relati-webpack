namespace Relati {
    export interface RelatiGrid extends Grid {
        role?: RelatiRole;
        query(command: string): RelatiGrid;
        queries(command: string): RelatiGrid[];
    }
}