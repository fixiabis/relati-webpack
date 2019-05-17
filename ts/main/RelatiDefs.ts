import { RelatiGrid } from "./RelatiBoard";
import { RelatiGame } from "./RelatiGame";

export type RelatiStatus = (
    "relati-launcher" |
    "relati-repeater" |
    "relati-receiver" |
    "attack-selected" |
    "effect-activate"
);

export type RelatiSymbol = "" | "O" | "X";

export interface RelatiRule {
    allow?(...state: any[]): boolean;
    trace?(...state: any[]): any[];
    state?(...state: any[]): number;
}

export interface RelatiAction {
    do(grid: RelatiGrid, game: RelatiGame, ...state: any[]): boolean | Promise<boolean>;
}

export interface RelatiEffect {
    do(game: RelatiGame, ...state: any[]): void;
}

export type RelatiRouteType = 0 | 1;

export type RelatiGameResult = 0 | 1 | 2 | 3;

export let RelatiStatusList: RelatiStatus[] = [
    "relati-launcher",
    "relati-repeater",
    "relati-receiver",
    "attack-selected",
    "effect-activate"
];

export let AllRelatiStatus: RelatiStatus[] = RelatiStatusList;

export let RelatiSymbolList: RelatiSymbol[] = ["", "O", "X"];