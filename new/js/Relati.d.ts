declare class Grid {
    board: GridBoard;
    x: number;
    y: number;
    coordinate: string;
    private _queryCache;
    private _queriesCache;
    static simplifyDirectionList: RegExp[];
    static originalDirectionLists: string[][];
    constructor(board: GridBoard, x: number, y: number);
    query(directionCommand: string): Grid;
    queries(directionCommands: string): Grid[];
    private _cacheQueryResult(command, result);
    private _cacheQueriesResult(commmands, results);
    clearQueryResult(command: string): boolean;
    clearQueriesResult(commands: string): boolean;
}
declare class GridBoard {
    width: number;
    height: number;
    [gridCoor: string]: any;
    grids: Grid[][];
    gridList: Grid[];
    private _queryCache;
    private _queriesCache;
    constructor(width: number, height: number);
    query(coordinateCommand: string): Grid;
    queries(coordinateCommands: string): Grid[];
    private _cacheQueryResult(command, result);
    private _cacheQueriesResult(commmands, results);
    clearQueryResult(command: string): boolean;
    clearQueriesResult(commands: string): boolean;
}
declare namespace Relati {
    interface RelatiAction {
        action(state: RelatiGameState): void;
    }
}
declare namespace Relati {
    interface RelatiBoard extends GridBoard {
        grids: RelatiGrid[][];
        gridList: RelatiGrid[];
        query(command: string): RelatiGrid;
        queries(command: string): RelatiGrid[];
    }
}
declare namespace Relati {
    class RelatiGame {
        board: RelatiBoard;
        players: RelatiPlayer[];
        turn: number;
        constructor(board: RelatiBoard, players: RelatiPlayer[]);
        nowPlayer(): RelatiPlayer;
    }
    interface RelatiGameState {
        game?: RelatiGame;
        owner?: RelatiPlayer;
        grid?: RelatiGrid;
    }
}
declare namespace Relati {
    interface RelatiGrid extends Grid {
        role?: RelatiRole;
        query(command: string): RelatiGrid;
        queries(command: string): RelatiGrid[];
    }
}
declare namespace Relati {
    class RelatiPlayer {
        game?: RelatiGame;
        placement(grid: RelatiGrid): void;
    }
}
declare namespace Relati {
    type RelatiRoleType = "normal" | "leader" | "wizard";
    type RelatiRoleStatus = (RelatiRoleStatusRelati);
    interface RelatiRole {
        is(status: RelatiRoleStatus): boolean;
        is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
    }
    class RelatiRole {
        owner: RelatiPlayer;
        grid: RelatiGrid;
        type: RelatiRoleType;
        status: {
            [statusName: string]: boolean;
        };
        constructor(owner: RelatiPlayer, grid: RelatiGrid);
        gain(status: RelatiRoleStatus): void;
        lost(status: RelatiRoleStatus): void;
    }
}
declare namespace Relati {
    type RelatiRoleStatusRelati = ("relati-launcher" | "relati-repeater" | "relati-recepter" | "relati-blocked" | RelatiRoleStatusRelatiNormal | RelatiRoleStatusRelatiRemote);
    type RelatiRoleStatusRelatiNormal = ("relati-normal-launcher" | "relati-normal-repeater" | "relati-normal-recepter" | "relati-normal-blocked");
    type RelatiRoleStatusRelatiRemote = ("relati-remote-launcher" | "relati-remote-repeater" | "relati-remote-recepter" | "relati-remote-blocked" | RelatiRoleStatusRelatiRemoteNormal | RelatiRoleStatusRelatiRemoteStable);
    type RelatiRoleStatusRelatiRemoteNormal = ("relati-remote-normal-launcher" | "relati-remote-normal-repeater" | "relati-remote-normal-recepter" | "relati-remote-normal-blocked");
    type RelatiRoleStatusRelatiRemoteStable = ("relati-remote-stable-launcher" | "relati-remote-stable-repeater" | "relati-remote-stable-recepter" | "relati-remote-stable-blocked");
}
declare namespace Relati {
    interface RelatiRule {
        allow(state: RelatiGameState): boolean;
    }
    interface RelatiRuleTraceable extends RelatiRule {
        trace(state: RelatiGameState): RelatiRuleTrace[];
    }
    interface RelatiRuleTrace {
        target: RelatiGrid;
        routes: RelatiGrid[];
    }
}
declare namespace Relati {
    namespace RelatiActions {
        var RelatiBlockGridStatus: RelatiRoleStatus[];
        var RelatiBlock: RelatiAction;
    }
}
declare namespace Relati {
    namespace RelatiRules {
        var RelatiSourceRoleStatus: RelatiRoleStatus[];
        var Relati: RelatiRuleTraceable;
        var RelatiNormalSourceRoleStatus: RelatiRoleStatus[];
        var RelatiNormal: RelatiRuleTraceable;
        var RelatiRemoteSourceRoleStatus: RelatiRoleStatus[];
        var RelatiRemote: RelatiRuleTraceable;
        var RelatiRemoteNormalSourceRoleStatus: RelatiRoleStatus[];
        var RelatiRemoteNormal: RelatiRuleTraceable;
        var RelatiRemoteStableSourceRoleStatus: RelatiRoleStatus[];
        var RelatiRemoteStable: RelatiRuleTraceable;
    }
}
declare namespace Relati {
    namespace RelatiRules {
        var RelatiTargetRoleStatus: RelatiRoleStatus[];
        var RelatiBlock: RelatiRuleTraceable;
        var RelatiNormalTargetRoleStatus: RelatiRoleStatus[];
        var RelatiNormalBlock: RelatiRuleTraceable;
        var RelatiRemoteTargetRoleStatus: RelatiRoleStatus[];
        var RelatiRemoteBlock: RelatiRuleTraceable;
        var RelatiRemoteNormalTargetRoleStatus: RelatiRoleStatus[];
        var RelatiRemoteNormalBlock: RelatiRuleTraceable;
        var RelatiRemoteStableTargetRoleStatus: RelatiRoleStatus[];
        var RelatiRemoteStableBlock: RelatiRuleTraceable;
    }
}
