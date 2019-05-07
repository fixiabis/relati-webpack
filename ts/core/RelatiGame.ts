import { RelatiBoard, RELATI_LAUNCHER, RELATI_REPEATER, RELATI_RECEIVER, RelatiGrid } from "./RelatiBoard";
import { hasRelatiRoutesBy } from "./RelatiRoutes";
import { destoryRepeaterBy, restoreRepeaterBy } from "./RelatiAction";

export class RelatiGame {
    public turn = 0;

    constructor(
        public board: RelatiBoard,
        public routeType: number
    ) { }

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

    getPlaceableGrid(symbol: number) {
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
            this.getPlaceableGrid(0),
            this.getPlaceableGrid(1)
        ];

        if (
            placeableGrid[0].length &&
            placeableGrid[1].length
        ) return "none";

        if (placeableGrid[0].length) return "OWin";
        if (placeableGrid[1].length) return "XWin";

        return "draw";
    }
}