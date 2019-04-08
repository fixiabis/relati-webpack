const RELATI_SYMBOL_N = 0b00000000;
const RELATI_SYMBOL_O = 0b00000001;
const RELATI_SYMBOL_X = 0b00000010;

const RELATI_RECEIVER = 0b00001000;
const RELATI_REPEATER = 0b00010000;
const RELATI_LAUNCHER = 0b00100000;

const RELATI_NORMAL = [["F"], ["B"], ["R"], ["L"], ["FR"], ["FL"], ["BR"], ["BL"]];
const RELATI_REMOTE_NORMAL = [
    ["FF", "F"], ["BB", "B"], ["RR", "R"], ["LL", "L"],
    ["FFRR", "FR"], ["FFLL", "FL"], ["BBRR", "BR"], ["BBLL", "BL"]
];
const RELATI_REMOTE_STABLE = [
    ["FFR", "FF", "F"], ["FFL", "FF", "F"], ["BBR", "BB", "B"], ["BBL", "BB", "B"],
    ["FFR", "FR", "F"], ["FFL", "FL", "F"], ["BBR", "BR", "B"], ["BBL", "BL", "B"],
    ["FFR", "FR", "R"], ["FFL", "FL", "L"], ["BBR", "BR", "R"], ["BBL", "BL", "L"],
    ["FRR", "FR", "F"], ["FLL", "FL", "F"], ["BRR", "BR", "B"], ["BLL", "BL", "B"],
    ["FRR", "RR", "R"], ["FLL", "LL", "L"], ["BRR", "RR", "R"], ["BLL", "LL", "L"],
    ["FRR", "FR", "R"], ["FLL", "FL", "L"], ["BRR", "BR", "R"], ["BLL", "BL", "L"]
];
const RELATI_REMOTE = [...RELATI_REMOTE_NORMAL, ...RELATI_REMOTE_STABLE];
const RELATI_COMMON = [...RELATI_NORMAL, ...RELATI_REMOTE];

let symbol = [" ", "O", "X"];
let color = ["#888", "crimson", "royalblue"];

class RelatiBoard extends Int8Array {
    constructor(
        public width: number,
        public height: number
    ) { super(width * height); }

    query(i: number): RelatiGrid
    query(q: string): RelatiGrid
    query(x: number, y: number): RelatiGrid
    query(x: number | string, y?: number) {
        if (typeof x === "string") {
            let q = x;
            x = q.charCodeAt(0) - 65;
            y = parseInt(q.substr(1)) - 1;
        } else if (y === undefined) {
            let i = x;
            y = i % this.height;
            x = (i - y) / this.width;
        }

        return new RelatiGrid(this, x, y);
    }

    print() {
        let first = true;
        let printParams: string[] = ["%c", "color: #888"];

        for (let y = 0; y < this.height; y++) {
            if (first) first = false;
            else printParams[0] += "\n";

            printParams[0] += "|";

            for (let x = 0; x < this.width; x++) {
                let grid = this.query(x, y);

                printParams[0] += ` %c${symbol[grid.owner]} `;

                if (!grid.is(RELATI_REPEATER)) {
                    printParams.push("color: #666");
                } else printParams.push(color[grid.owner]);

                printParams[0] += "%c|";
                printParams.push("color: #888");
            }
        }

        console.log(...printParams);
    }
}

class RelatiGrid {
    public i: number;

    constructor(
        public board: RelatiBoard,
        public x: number,
        public y: number
    ) {
        let i = x * board.width + y;
        this.i = i < 0 || i >= board.width * board.height ? -1 : i;
    }

    query(q: string) {
        let l = q.length;
        let { x, y, board } = this;

        for (let i = 0; i < l; i++) switch (q[i]) {
            case 'F': y--; break;
            case 'B': y++; break;
            case 'R': x++; break;
            case 'L': x--; break;
        }

        return new RelatiGrid(board, x, y);
    }

    is(s: number) { return (this.board[this.i] & (s || ~s)) === s; }
    gain(s: number) { return this.board[this.i] |= s; }
    lost(s: number) { return this.board[this.i] &= ~s; }
    get owner() { return this.board[this.i] & 0b00000111; }
    set owner(o) { this.gain(o & 0b00000111); }
}

class RelatiGame {
    public turn = 0;

    constructor(
        public board: RelatiBoard,
        public protocol: string[][],
        public playerCount: number
    ) { }

    nowPlayer() { return this.turn % this.playerCount + 1; }

    selectGrid(grid: RelatiGrid, owner: number) {
        if (!grid.is(RELATI_SYMBOL_N)) return false;

        if (this.turn < this.playerCount) {
            grid.gain(owner);
            grid.gain(RELATI_LAUNCHER);
        } else if (gridPlaceable(grid, this.protocol, owner)) {
            grid.gain(owner);
            grid.gain(RELATI_RECEIVER);
        } else return false;

        RelatiDestory(this.board);
        RelatiRestore(this.board, this.protocol);
        this.turn++;
        return true;
    }
}

function RelatiDestory(board: RelatiBoard) {
    for (let i = 0; i < board.length; i++) {
        let grid = board.query(i);
        grid.lost(RELATI_REPEATER);
    }
}

function RelatiRestore(board: RelatiBoard, pathList: string[][]) {
    for (let i = 0; i < board.length; i++) {
        let grid = board.query(i);
        if (grid.is(RELATI_LAUNCHER)) RelatiDeliver(grid, pathList, grid.owner);
    }
}

function RelatiDeliver(grid: RelatiGrid, pathList: string[][], owner: number) {
    if (grid.is(RELATI_REPEATER)) return;
    grid.gain(RELATI_REPEATER);

    for (let i = 0; i < pathList.length; i++) {
        if (gridRelatiable(grid, pathList[i], owner, RELATI_RECEIVER)) {
            RelatiDeliver(grid.query(pathList[i][0]), pathList, owner);
        }
    }
}

function targetReliable(grid: RelatiGrid, path: string[], owner: number, status: number) {
    let target = grid.query(path[0]);
    return target && target.is(owner) && target.is(status);
}

function middleNonBlock(grid: RelatiGrid, path: string[]) {
    for (let i = 1; i < path.length; i++) {
        let middle = grid.query(path[i]);
        if (!middle.is(RELATI_SYMBOL_N)) return false;
    }

    return true;
}

function gridRelatiable(grid: RelatiGrid, path: string[], owner: number, status: number) {
    return (
        targetReliable(grid, path, owner, status) &&
        middleNonBlock(grid, path)
    );
}

function gridPlaceable(grid: RelatiGrid, pathList: string[][], owner: number) {
    for (let i = 0; i < pathList.length; i++) {
        if (gridRelatiable(grid, pathList[i], owner, RELATI_REPEATER)) {
            return true;
        }
    }
}

class RelatiAI {
    constructor(public game: RelatiGame) { }

    analysis(owner: number) {
        let { board } = this.game;
        let boardWidth = board.width;
        let boardHeight = board.height;
        let boardLength = board.length;

        let ownerGrid = new Int8Array(boardLength);
        let otherGrid = new Int8Array(boardLength);
        let hasGrid: boolean;
        let gridPoint = 100;
        let ownerPoint = 0;
        let otherPoint = 0;

        for (let i = 0; i < boardLength; i++) {
            let grid = board.query(i);
            if (grid.owner == RELATI_SYMBOL_N) continue;
            if (grid.owner == owner) ownerGrid[i] = 101;
            else otherGrid[i] = 101;
        }

        do {
            hasGrid = false;

            for (let x = 0; x < boardWidth; x++) {
                for (let y = 0; y < boardHeight; y++) {
                    let grid = board.query(x, y);

                    if (ownerGrid[grid.i] == gridPoint + 1) {
                        for (let dx = x - 1; dx < x + 2; dx++) {
                            for (let dy = y - 1; dy < y + 2; dy++) {
                                if (
                                    dx == x && dy == y ||
                                    dx < 0 || dy < 0 ||
                                    dx >= boardWidth ||
                                    dy >= boardHeight
                                ) continue;

                                let idx = board.query(dx, dy).i;
                                let grid = board[idx];
                                if (grid || ownerGrid[idx]) continue;
                                ownerGrid[idx] = gridPoint;
                                hasGrid = true;
                            }
                        }
                    }

                    if (otherGrid[grid.i] == gridPoint + 1) {
                        for (let dx = x - 1; dx < x + 2; dx++) {
                            for (let dy = y - 1; dy < y + 2; dy++) {
                                if (
                                    dx == x && dy == y ||
                                    dx < 0 || dy < 0 ||
                                    dx >= boardWidth ||
                                    dy >= boardHeight
                                ) continue;

                                let idx = board.query(dx, dy).i;
                                let grid = board[idx];
                                if (grid || otherGrid[idx]) continue;
                                otherGrid[idx] = gridPoint;
                                hasGrid = true;
                            }
                        }
                    }
                }
            }

            gridPoint--;
        } while (hasGrid);

        for (let i = 0; i < boardLength; i++) {
            if (!ownerGrid[i]) ownerGrid[i] = 1;
            if (!otherGrid[i]) otherGrid[i] = 1;

            ownerPoint += ownerGrid[i] - (
                otherGrid[i] -
                ownerGrid[i]
            ) * 10;

            otherPoint += otherGrid[i] - (
                ownerGrid[i] -
                otherGrid[i]
            ) * 10;
        }

        return { ownerPoint, otherPoint };
    }

    traceStep(
        owner: number,
        other: number,
        level: number,
        route: number[] = [],
        isOwn: boolean = true,
        inOwn: RelatiAIStep = { point: -Infinity, in: owner, route: [] },
        inOth: RelatiAIStep = { point: Infinity, in: other, route: [] }
    ): RelatiAIStep {
        let { board, protocol } = this.game;

        if (isOwn) {
            for (let x = 0; x < board.width; x++) {
                for (let y = 0; y < board.height; y++) {
                    let idx = board.query(x, y).i;
                    let grid = board[idx];
                    if (grid) continue;
                    if (!gridPlaceable(board.query(x, y), protocol, owner)) continue;
                    board[idx] = owner | RELATI_REPEATER;

                    if (level) {
                        let step = this.traceStep(
                            owner, other, level - 1,
                            [...route, idx],
                            !isOwn, inOwn, inOth
                        );
                        if (inOwn.point <= step.point) inOwn = { ...step, idx };
                    } else {
                        let point = this.analysis(owner).ownerPoint;
                        if (inOwn.point <= point) inOwn = {
                            in: owner, idx,
                            point, route: [...route, idx]
                        };
                    }

                    board[idx] = RELATI_SYMBOL_N;
                    if (inOth.point <= inOwn.point) break;
                }
            }

            return inOwn;
        } else {
            for (let x = 0; x < board.width; x++) {
                for (let y = 0; y < board.height; y++) {
                    let idx = board.query(x, y).i;
                    let grid = board[idx];
                    if (grid) continue;
                    if (!gridPlaceable(board.query(x, y), protocol, other)) continue;
                    board[idx] = other | RELATI_REPEATER;

                    if (level) {
                        let step = this.traceStep(
                            owner, other, level - 1,
                            [...route, idx],
                            !isOwn, inOwn, inOth
                        );
                        if (inOth.point >= step.point) inOth = { ...step, idx };
                    } else {
                        let point = this.analysis(owner).ownerPoint;
                        if (inOth.point >= point) inOth = {
                            in: other, idx,
                            point, route: [...route, idx]
                        };
                    }

                    board[idx] = RELATI_SYMBOL_N;
                    if (inOth.point <= inOwn.point) break;
                }
            }

            return inOth;
        }
    }
}

interface RelatiAIStep {
    idx?: number;
    in: number;
    point: number;
    route: number[];
    steps?: RelatiAIStep[];
}