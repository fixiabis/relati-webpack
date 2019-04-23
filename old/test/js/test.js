(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../js/base/GridBoard", "../../js/RelatiGame", "../../js/skills/NormalRoleSummon", "../../js/roles/NormalRole", "../../js/RelatiAI.prototype", "../../js/RelatiAI"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const GridBoard_1 = require("../../js/base/GridBoard");
    const RelatiGame_1 = require("../../js/RelatiGame");
    const NormalRoleSummon_1 = require("../../js/skills/NormalRoleSummon");
    const NormalRole_1 = require("../../js/roles/NormalRole");
    const RelatiAI_prototype_1 = require("../../js/RelatiAI.prototype");
    const RelatiAI_1 = require("../../js/RelatiAI");
    let board = new GridBoard_1.GridBoard(5, 5);
    let game = new RelatiGame_1.RelatiGame(board, ["O", "X"]);
    let player1 = game.players[0];
    let player2 = game.players[1];
    let grid, role, step;
    let AI = new RelatiAI_prototype_1.RelatiAI(game, [NormalRole_1.NormalRole]);
    let NAI = new RelatiAI_1.RelatiAI;
    async function main() {
        await summon(player1, "C3", "leader");
        await summon(player2, "C2", "leader");
        let binBoard = new RelatiAI_1.BinaryBoard(board);
        console.log(NAI.syncTraceStep(binBoard, 1, 2, 4));
        // let steps = ["B3", "D3", "C4", "B2", "A3", "D4", "C5", "D2"];
        // for (let i = 0; i < steps.length; i++) {
        //     let coor = steps[i];
        //     await summon(game.players[i % 2], coor);
        // }
        // await AIStep(4, 1, 2);
        // AI.printBoard(board);
        // let steps = ["B2", "B3", "C4"];
        // for (let i = 0; i < steps.length; i++) {
        //     await summon(player2, steps[i]);
        //     AI.printBoard(board);
        //     await AIStep(8, 1, 2);
        //     AI.printBoard(board);
        // }
    }
    main();
    async function summon(player, coor, type) {
        grid = board.query(coor);
        role = new NormalRole_1.NormalRole(grid, player, type);
        await NormalRoleSummon_1.NormalRoleSummon.do({ game, role });
    }
    async function AIStep(level = 6, owner, other) {
        let binBoard = new RelatiAI_1.BinaryBoard(board);
        let step = NAI.syncTraceStep(binBoard, owner, other, level);
        let coor = NAI.getGridCoor(step.idx, binBoard);
        console.log(owner, coor, step);
        await summon(game.players[owner - 1], coor);
    }
    let { tic, tac } = (now => ({
        tic: () => now = new Date().getTime(),
        tac: () => new Date().getTime() - now
    }))(0);
});
