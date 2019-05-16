import { RelatiSymbol } from "./RelatiDefs";
import { RelatiGrid } from "./RelatiBoard";

export class RelatiPlayer {
    public leader?: RelatiGrid;
    public status: { [status: string]: boolean } = {};
    public points: { [points: string]: number } = {};
    public params: { [params: string]: string } = {};
    constructor(public symbol: RelatiSymbol) { }
}