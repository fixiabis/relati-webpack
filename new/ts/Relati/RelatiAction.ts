namespace Relati {
    export interface RelatiAction {
        name: string;
        do(state: RelatiGameState): void;
    }
}