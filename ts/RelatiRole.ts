import { RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { RelatiRoleStatus } from "./RelatiRoleStatus";
import { RelatiGameState } from "./RelatiGame";

/** 角色類型 */
export type RelatiRoleType = "normal" | "knight" | "wizard" | "leader";

/** 角色 */
export interface RelatiRole {
    /** 狀態判斷 */
    is(status: RelatiRoleStatus): boolean;
    /** 狀態判斷，all: 完全符合， any: 任何符合 */
    is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
}

export class RelatiRole {
    /** 狀態 */
    public status: { [status: string]: boolean } = {};
    /** 擁有效果 */
    public effects: RelatiRoleEffect[] = [];
    /** 擁有能力 */
    public actions: RelatiRoleAction[] = [];

    /**
     * 建立角色
     * @param grid 棋盤格
     * @param owner 持有者
     * @param type 類型
     */
    constructor(
        public grid: RelatiGrid,
        public owner: RelatiPlayer,
        public type: RelatiRoleType = "normal"
    ) { }

    is(status: RelatiRoleStatus | RelatiRoleStatus[], type?: "all" | "any") {
        if (typeof status === "string") return this.status[status];

        if (type === "any") {
            for (var statusName of status) {
                if (this.status[statusName]) return true;
            }

            return false;
        } else {
            for (var statusName of status) {
                if (!this.status[statusName]) return false;
            }

            return true;
        }
    }

    /** 獲得狀態 */
    gain(...statusList: RelatiRoleStatus[]) {
        for (var status of statusList) {
            this.status[status] = true;
        }
    }

    /** 失去狀態 */
    lost(...statusList: RelatiRoleStatus[]) {
        for (var status of statusList) {
            this.status[status] = false;
        }
    }
}

/** 角色效果 */
export interface RelatiRoleEffect<State = {}> {
    /** 名稱 */
    name: string;
    /** 執行 */
    do(state: RelatiGameState & State): void;
}

/** 角色行動 */
export interface RelatiRoleAction<State = {}> extends RelatiRoleEffect<State> { }