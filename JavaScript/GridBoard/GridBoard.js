"use strict";
var Grid = /** @class */ (function () {
    function Grid(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
        var i = x * board.width + y;
        this.i = i;
    }
    Grid.prototype.getGrid = function (drct) {
        var F = (0xF000 & drct) >> 12;
        var B = (0x0F00 & drct) >> 8;
        var R = (0x00F0 & drct) >> 4;
        var L = (0x000F & drct);
        var x = this.x + R - L;
        var y = this.y + B - F;
        return this.board.getGrid(x, y);
    };
    return Grid;
}());
var GridBoard = /** @class */ (function () {
    function GridBoard(width, height) {
        this.width = width;
        this.height = height;
        var length = width * height;
        var grids = [];
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                var grid = new Grid(this, x, y);
                grids[grid.i] = grid;
            }
        }
        this.grids = grids;
        this.length = length;
    }
    GridBoard.prototype.getGrid = function (x, y) {
        if (x < 0 || x >= this.width ||
            y < 0 || y >= this.height)
            return null;
        var i = x * this.width + y;
        return this.grids[i];
    };
    return GridBoard;
}());
var GRID_DRCT_C = 0x0000;
var GRID_DRCT_F = 0x1000;
var GRID_DRCT_B = 0x0100;
var GRID_DRCT_R = 0x0010;
var GRID_DRCT_L = 0x0001;
var GRID_DRCT_FR = 0x1010;
var GRID_DRCT_FL = 0x1001;
var GRID_DRCT_BR = 0x0110;
var GRID_DRCT_BL = 0x0101;
var GRID_DRCT_2F = 0x2000;
var GRID_DRCT_2B = 0x0200;
var GRID_DRCT_2R = 0x0020;
var GRID_DRCT_2L = 0x0002;
var GRID_DRCT_2FR = 0x2020;
var GRID_DRCT_2FL = 0x2002;
var GRID_DRCT_2BR = 0x0220;
var GRID_DRCT_2BL = 0x0202;
var GRID_DRCT_FFR = 0x2010;
var GRID_DRCT_FFL = 0x2001;
var GRID_DRCT_BBR = 0x0210;
var GRID_DRCT_BBL = 0x0201;
var GRID_DRCT_FRR = 0x1020;
var GRID_DRCT_FLL = 0x1002;
var GRID_DRCT_BRR = 0x0120;
var GRID_DRCT_BLL = 0x0102;
