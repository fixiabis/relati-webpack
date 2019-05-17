import { RelatiRule } from "../RelatiDefs";
import { RelatiPlayer } from "../RelatiPlayer";
import { RelatiGrid } from "../RelatiBoard";
import { GRID_DRCT } from "../../core/GridBoard";

/** 攻擊判定 */
interface AttackRule extends RelatiRule {
    /**
     * 判斷是否可進行攻擊
     * @param player 玩家
     * @param grid 棋盤格
     */
    allow(
        grid: RelatiGrid,
        player: RelatiPlayer
    ): boolean;

    /**
     * 取得可攻擊的符號
     * @param player 玩家
     * @param grid 棋盤格
     */
    trace(
        grid: RelatiGrid,
        player: RelatiPlayer
    ): RelatiGrid[];
}

let drcts = [GRID_DRCT.DRCT_F, GRID_DRCT.DRCT_B, GRID_DRCT.DRCT_R, GRID_DRCT.DRCT_L];

/** 攻擊判定 */
export let AttackRule: AttackRule = {
    /**
     * 判斷是否可進行攻擊
     * @param targetGrid 棋盤格
     * @param player 玩家
     */
    allow(targetGrid, player) {
        if (targetGrid.symbol == player.symbol) return false;
        if (player.points["relati-normal-times"] < 5) return false;

        let turretGrid, bulletGrid;

        for (let drct of drcts) {
            attack: for (let trtDist = 1; trtDist < 10; trtDist++) {
                turretGrid = targetGrid.getGrid(drct * trtDist);

                if (!turretGrid) break;

                if (turretGrid.symbol == player.symbol) {
                    if (turretGrid.is(["relati-launcher", "relati-repeater"], "any")) {
                        for (let bltDist = 1; bltDist < 10; bltDist++) {
                            bulletGrid = turretGrid.getGrid(drct * bltDist);

                            if (!bulletGrid) break attack;

                            if (bulletGrid.symbol == player.symbol) {
                                if (bulletGrid.is(["relati-launcher", "relati-receiver"], "any")) {
                                    return true;
                                }
                            } else if (
                                bulletGrid.symbol != "" &&
                                bulletGrid.is(["relati-receiver", "relati-launcher"], "any")
                            ) break attack;
                        }
                    }
                } else if (
                    turretGrid.symbol != "" &&
                    turretGrid.is(["relati-receiver", "relati-launcher"], "any")
                ) break;
            }
        }

        return false;
    },

    /**
     * 取得可攻擊的符號
     * @param targetGrid 棋盤格
     * @param player 玩家
     */
    trace(targetGrid, player) {
        if (targetGrid.symbol == player.symbol) return [];
        if (player.points["relati-normal-times"] < 5) return [];

        let bulletGrids: RelatiGrid[] = [];

        let turretGrid, bulletGrid;

        for (let drct of drcts) {
            attack: for (let trtDist = 1; trtDist < 10; trtDist++) {
                turretGrid = targetGrid.getGrid(drct * trtDist);

                if (!turretGrid) break;

                if (turretGrid.symbol == player.symbol) {
                    if (turretGrid.is(["relati-launcher", "relati-repeater"], "any")) {
                        for (let bltDist = 1; bltDist < 10; bltDist++) {
                            bulletGrid = turretGrid.getGrid(drct * bltDist);

                            if (!bulletGrid) break attack;

                            if (bulletGrid.symbol == player.symbol) {
                                if (bulletGrid.is(["relati-launcher", "relati-repeater"], "any")) {
                                    bulletGrids.push(bulletGrid);
                                    break attack;
                                }
                            } else if (
                                bulletGrid.symbol != "" &&
                                bulletGrid.is(["relati-receiver", "relati-launcher"], "any")
                            ) break attack;
                        }
                    }
                } else if (
                    turretGrid.symbol != "" &&
                    turretGrid.is(["relati-receiver", "relati-launcher"], "any")
                ) break;
            }
        }

        return bulletGrids;
    }
};