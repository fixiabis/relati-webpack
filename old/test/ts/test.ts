import { GridBoard } from "../../js/base/GridBoard";
import { RelatiGame } from "../../js/RelatiGame";
import { NormalRoleSummon } from "../../js/skills/NormalRoleSummon";
import { RelatiGrid, RelatiBoard } from "../../js/RelatiBoard";
import { NormalRole } from "../../js/roles/NormalRole";
import { RelatiAI, RelatiAIStep } from "../../js/RelatiAI.prototype";
import { RelatiAI as NewRelatiAI, BinaryBoard } from "../../js/RelatiAI";
import { RelatiPlayer } from "../../js/RelatiPlayer";
import { RelatiRoleType } from "../../js/RelatiRole";

let board = new GridBoard(5, 5) as RelatiBoard;
let game = new RelatiGame(board, ["O", "X"]);
let player1 = game.players[0];
let player2 = game.players[1];
let grid: RelatiGrid, role: NormalRole, step: RelatiAIStep;
let AI = new RelatiAI(game, [NormalRole]);
let NAI = new NewRelatiAI;

async function main() {
    await summon(player1, "C3", "leader");
    await summon(player2, "C2", "leader");

    let binBoard = new BinaryBoard(board);
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

async function summon(player: RelatiPlayer, coor: string, type?: RelatiRoleType) {
    grid = board.query(coor);
    role = new NormalRole(grid, player, type);
    await NormalRoleSummon.do({ game, role });
}

async function AIStep(level = 6, owner: number, other: number) {
    let binBoard = new BinaryBoard(board);
    let step = NAI.syncTraceStep(binBoard, owner, other, level);
    let coor = NAI.getGridCoor(step.idx as number, binBoard);
    console.log(owner, coor, step);
    await summon(game.players[owner - 1], coor);
}

let [tic, tac] = (now => [
    () => now = new Date().getTime(),
    () => new Date().getTime() - now
])(0);