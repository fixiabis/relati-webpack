import { RelatiInfo } from "./Relati";
import { RelatiGameState } from "./RelatiGame";
/** 技能類型 */
export declare type RelatiSkillType = "action" | "effect";
/** 技能 */
export declare type RelatiSkill<State = RelatiGameState> = RelatiInfo & {
    /** 技能類型 */
    type: RelatiSkillType;
    /** 技能執行 */
    do(state: State): Promise<void>;
} & ({
    type: "effect";
    /** 技能優先度 */
    priority: number;
} | {
    type: "action";
});
