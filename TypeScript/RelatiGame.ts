class RelatiGame {
    public turn = 0;

    constructor(
        public board: RelatiBoard,
        public boardView: RelatiBoardView
    ) {
        boardView.view.addEventListener("click", function (this: RelatiGame, event: MouseEvent) {
            var x: number = Math.floor(event.offsetX / 5),
                y: number = Math.floor(event.offsetY / 5);
            this.gridSelect(x, y);
        }.bind(this));
    }

    gridSelect(x: number, y: number) {
        let grid = this.board.getGrid(x, y);
        if (!grid.isSpace) return;

        let symbol = this.turn % 2 + 1;

        if (this.turn < 2) {
            grid.symbol = symbol;
            grid.gain(RELATI_LAUNCHER);
        } else if (hasRelatiRoutesBy(grid, symbol | RELATI_REPEATER, BY_COMMON_RELATI)) {
            grid.symbol = symbol;
            grid.gain(RELATI_RECEIVER);
        } else return;

        this.turn++;
        destoryRepeaterBy(this.board);
        restoreRepeaterBy(this.board, BY_COMMON_RELATI);
        this.boardView.update();
    }
}