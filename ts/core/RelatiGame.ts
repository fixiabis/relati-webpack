import { RelatiBoard, RELATI_LAUNCHER, RELATI_REPEATER, RELATI_RECEIVER, RelatiGrid, RELATI_SYMBOL_O, RELATI_SYMBOL_X } from "./RelatiBoard";
import { hasRelatiRoutesBy } from "./RelatiRoutes";
import { destoryRepeaterBy, restoreRepeaterBy } from "./RelatiAction";

const RELATI_ANYSTAT = ~0b00000000;

export class RelatiGame {
    public turn = 0;

    constructor(
        public board: RelatiBoard,
        public routeType: number
    ) { this.restart(); }

    restart() {
        this.turn = 0;

        for (let grid of this.board.grids) {
            grid.lost(RELATI_ANYSTAT);
        }
    }

    selectGrid(x: number, y: number) {
        let grid = this.board.getGrid(x, y);
        if (!grid.isSpace) return;

        let symbol = this.nowPlayerSymbol;
        let { routeType, board } = this;

        if (this.turn < 2) {
            grid.symbol = symbol;
            grid.gain(RELATI_LAUNCHER);
        } else if (hasRelatiRoutesBy(grid, symbol | RELATI_REPEATER, routeType)) {
            grid.symbol = symbol;
            grid.gain(RELATI_RECEIVER);
        } else return;

        this.turn++;
        destoryRepeaterBy(board);
        restoreRepeaterBy(board, routeType);
    }

    getPlaceableGrids(symbol: number) {
        let grids: RelatiGrid[] = [];

        for (let grid of this.board.grids) {
            if (grid.isSpace && hasRelatiRoutesBy(
                grid,
                symbol | RELATI_REPEATER,
                this.routeType
            )) grids.push(grid);
        }

        return grids;
    }

    get nowPlayerSymbol() {
        return this.turn % 2 + 1;
    }

    get result() {
        if (this.turn < 2) return "none";

        let placeableGrid = [
            this.getPlaceableGrids(RELATI_SYMBOL_O),
            this.getPlaceableGrids(RELATI_SYMBOL_X)
        ];

        let { nowPlayerSymbol } = this;

        if (
            placeableGrid[0].length &&
            placeableGrid[1].length
        ) return "none";

        if (nowPlayerSymbol == RELATI_SYMBOL_X) {
            if (placeableGrid[1].length) return "none";
            else if (placeableGrid[0].length) return "OWin";
        } else if (nowPlayerSymbol == RELATI_SYMBOL_O) {
            if (placeableGrid[0].length) return "none";
            else if (placeableGrid[1].length) return "XWin";
        }

        return "draw";
    }
}