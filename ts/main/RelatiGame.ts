import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiAction, RelatiEffect, RelatiRouteType, AllRelatiStatus, RelatiGameResult } from "./RelatiDefs";
import { RelatiPlayer } from "./RelatiPlayer";
import { GAME_RESULT_NONE, WinnerDecision } from "./rule/WinnerDecision";
import { DestoryRepeater, RestoreRepeater } from "./skill/Relati";
import { Placement } from "./skill/Placement";

/** 角色固有技能 */
let roleInitEffects: RelatiEffect[] = [];

/** 角色行動 */
let roleActions: RelatiAction[] = [
    Placement
];

/** 角色觸發技能 */
let rolePassEffects: RelatiEffect[] = [
    DestoryRepeater,
    RestoreRepeater
];

/** 遊戲狀態 */
interface RelatiGameState {
    turn: number;
    type: string;
    grid: RelatiGrid;
}

/** 遊戲主體 */
export class RelatiGame {
    /** 回合 */
    public turn = 0;

    /** 紀錄 */
    public history: RelatiGameState[] = [];

    /** 已選擇棋盤格 */
    public selectedGrid?: RelatiGrid;

    /**
     * 選取棋盤格放置
     * @param grid 棋盤格
     */
    public selectGrid?: (grid: RelatiGrid) => void;

    /**
     * 遊戲回合開始事件
     * @param grid 棋盤格
     */
    public onturnstart?: (grid: RelatiGrid) => void;

    /**
     * 遊戲回合結束事件
     * @param grid 棋盤格
     */
    public onturnend?: (grid: RelatiGrid) => void;

    /**
     * 遊戲開始事件
     */
    public onstart?: Function;

    /**
     * 遊戲結束事件
     */
    public onover?: Function;

    constructor(
        /** 棋盤 */
        public board: RelatiBoard,
        /** 玩家 */
        public players: RelatiPlayer[],
        /** Relati路徑類型 */
        public routeType: RelatiRouteType
    ) { this.start(); }

    /** 開始 */
    async start() {
        let gameResult: RelatiGameResult = GAME_RESULT_NONE;
        if (this.onstart) this.onstart();

        while (gameResult == GAME_RESULT_NONE) {
            let grid = await this.gridSelect();
            if (this.onturnstart) this.onturnstart(grid);

            this.selectedGrid = grid;
            for (let effect of roleInitEffects) await effect.do(this);

            this.selectedGrid = grid;

            let actionValid = false;

            for (let action of roleActions) {
                if (await action.do(grid, this)) {
                    actionValid = true;
                    break;
                }
            }

            if (!actionValid) continue;

            this.selectedGrid = grid;
            for (let effect of rolePassEffects) await effect.do(this);

            delete this.selectedGrid;
            gameResult = WinnerDecision.state(this);
            if (this.onturnend) this.onturnend(grid);
        }

        if (this.onover) this.onover(gameResult);
        return gameResult;
    }

    /** 重新開始 */
    restart() {
        this.turn = 0;

        for (let grid of this.board.grids) {
            grid.symbol = "";
            grid.lost(AllRelatiStatus);
        }

        this.start();
    }

    /** 等待格子選取 */
    gridSelect() {
        return new Promise<RelatiGrid>(select => this.selectGrid = select);
    }

    /** 目前玩家 */
    get nowPlayer() {
        return this.players[this.turn % 2];
    }
}