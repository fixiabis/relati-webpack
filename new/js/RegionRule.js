var regions = [];
var regionOwner = function (grid) {
    var rule = game.options.region.rule;
    var type = game.options.region.type;
    var owner = [];
    if (!rule || !type) return;

    for (var i = 0; i < regions.length; i++) {
        var region = regions[i];
        var inRegion = (
            grid.x >= region.begin.x &&
            grid.x <= region.final.x &&
            grid.y >= region.begin.y &&
            grid.y <= region.final.y
        ) && (
                game.board.grids[region.begin.x][region.begin.y].is(type) &&
                game.board.grids[region.begin.x][region.final.y].is(type) &&
                game.board.grids[region.final.x][region.begin.y].is(type) &&
                game.board.grids[region.final.x][region.final.y].is(type)
            );

        if (inRegion) {
            owner.push(region.owner);
        }
    }

    if (rule === "first") return [owner[0]];
    if (rule === "final") return [owner[owner.length - 1]];
    if (rule === "share") return owner;
    if (rule === "split") return [];
};

function addRegionRule(game) {
    var regionExist = function (grid) {
        if (!game.options.region) return;
        var type = "owner " + game.options.region.type.replace(/\|/, "|owner ");

        for (var x = 0; x < game.board.width; x++) {
            if (grid.x === x) continue;

            if (game.board.grids[x][grid.y].is(type, grid.symbol)) {
                for (var y = 0; y < game.board.height; y++) {
                    if (grid.y === y) continue;

                    if (game.board.grids[grid.x][y].is(type, grid.symbol)) {
                        if (game.board.grids[x][y].is(type, grid.symbol)) {
                            regions.push({
                                begin: {
                                    x: Math.min(x, grid.x),
                                    y: Math.min(y, grid.y)
                                },
                                final: {
                                    x: Math.max(x, grid.x),
                                    y: Math.max(y, grid.y)
                                },
                                owner: grid.symbol
                            });
                        }
                    }
                }
            }
        }
    };
    var regionBlock = {
        condition: function (grid) {
            if (!game.options.region.block) return false;
            var regionOwners = regionOwner(grid);
            var sym = game.symbol[game.turn % game.players];

            return (
                grid.is("space-real") && (
                    regionOwners.indexOf(sym) > -1 ||
                    !regionOwners[0]
                )
            );
        },
        configure: function (grid) {
            grid.symbol = game.symbol[game.turn % game.players];
            grid.status = "normal";
            game.turn++;
        }
    };
    game.actions.push(regionBlock);
    game.rules.push(regionExist);
}