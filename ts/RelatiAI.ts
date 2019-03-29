import { RelatiBoard, RelatiGrid } from "./RelatiBoard";
import { RelatiPlayer } from "./RelatiPlayer";
import { JSONData } from "./Relati";
import { GridBoard } from "./base/GridBoard";
import { RelatiRole, RelatiRoleType } from "./RelatiRole";

export class RelatiAI {
    analysis(board: RelatiBoard, owner: RelatiPlayer) {
        let ownerGrid: JSONData<number> = {};
        let otherGrid: JSONData<number> = {};
        let hasGrid: boolean;
        let isOwner: boolean;
        let isOther: boolean;
        let gridPoint = 100;
        let ownerPoint = 0;
        let otherPoint = 0;

        for (let grid of board.gridList) {
            if (!grid.role) continue;
            let { coordinate } = grid;

            if (grid.role.owner == owner) {
                ownerGrid[coordinate] = 101;
                otherGrid[coordinate] = 1;
            } else {
                otherGrid[coordinate] = 101;
                ownerGrid[coordinate] = 1;
            }
        }

        do {
            hasGrid = false;

            for (let grid of board.gridList) {
                if (grid.role) continue;
                let { coordinate } = grid;

                isOwner = false;
                isOther = false;

                for (let nearByGrid of grid.queries("O")) {
                    if (!nearByGrid) continue;
                    let { coordinate } = nearByGrid;
                    if (ownerGrid[coordinate] == gridPoint + 1) isOwner = true;
                    if (otherGrid[coordinate] == gridPoint + 1) isOther = true;
                }

                if (isOwner && !ownerGrid[coordinate]) {
                    ownerGrid[coordinate] = gridPoint;
                    hasGrid = true;
                }

                if (isOther && !otherGrid[coordinate]) {
                    otherGrid[coordinate] = gridPoint;
                    hasGrid = true;
                }
            }

            gridPoint--;
        } while (hasGrid);

        for (let coordinate in ownerGrid) {
            ownerPoint += ownerGrid[coordinate] - (
                otherGrid[coordinate] -
                ownerGrid[coordinate] + 1
            ) * 10;

            otherPoint += otherGrid[coordinate] - (
                ownerGrid[coordinate] -
                otherGrid[coordinate] + 1
            ) * 10;
        }

        return { ownerPoint, otherPoint };
    }

    cloneBoard(board: RelatiBoard) {
        let { width, height } = board;
        let cloneBoard = new GridBoard(width, height) as RelatiBoard;

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                let grid = board.grids[x][y];
                let { role } = grid;
                if (!role) continue;
                let { owner } = role;
                let RoleConstructor = role.constructor as RelatiRoleConstructor;

                let cloneRole = new RoleConstructor(
                    cloneBoard.grids[x][y],
                    owner
                );

                for (let name in role.status) cloneRole.status[name] = role.status[name];
                for (let name in role.points) cloneRole.points[name] = role.points[name];
                for (let name in role.params) cloneRole.params[name] = role.params[name];
                for (let name in role.skills) cloneRole.skills[name] = role.skills[name];

                cloneBoard.grids[x][y].role = cloneRole;
            }
        }

        return cloneBoard;
    }
}

interface RelatiRoleConstructor {
    new(
        grid: RelatiGrid,
        owner: RelatiPlayer,
        type?: RelatiRoleType
    ): RelatiRole;
}