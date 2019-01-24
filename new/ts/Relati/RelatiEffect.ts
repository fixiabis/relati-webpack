namespace Relati {
    export interface RelatiEffect {
        name: string;
        do(state: RelatiGameState): void;
    }
}