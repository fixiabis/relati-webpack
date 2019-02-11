import { RelatiGameState } from "./RelatiGame";
/** 技能 */
export interface RelatiSkill<State = {}> {
    /** 名稱 */
    name: string;
    /** 詳細 */
    detail?: string;
    /** 執行 */
    do(state: RelatiGameState & State): void;
}
