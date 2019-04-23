"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RELATI_SYMBOL_N = 0;
var RELATI_SYMBOL_O = 1;
var RELATI_SYMBOL_X = 2;
var RELATI_SYMBOL_D = 3;
var RELATI_SYMBOL_R = 4;
var RELATI_SYMBOL_A = 5;
var RELATI_RECEIVER = 8;
var RELATI_REPEATER = 16;
var RELATI_LAUNCHER = 32;
var RelatiGrid = /** @class */ (function (_super) {
    __extends(RelatiGrid, _super);
    function RelatiGrid(board, x, y) {
        var _this = _super.call(this, board, x, y) || this;
        _this.body = 0;
        return _this;
    }
    RelatiGrid.prototype.is = function (status) {
        return (this.body & status) === status;
    };
    RelatiGrid.prototype.gain = function (status) {
        return this.body |= status;
    };
    RelatiGrid.prototype.lost = function (status) {
        return this.body &= ~status;
    };
    Object.defineProperty(RelatiGrid.prototype, "symbol", {
        get: function () {
            return this.body & 7;
        },
        set: function (symbol) {
            this.lost(7);
            this.gain(symbol);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelatiGrid.prototype, "isSpace", {
        get: function () {
            return this.body === 0;
        },
        enumerable: true,
        configurable: true
    });
    return RelatiGrid;
}(Grid));
var RelatiBoard = /** @class */ (function (_super) {
    __extends(RelatiBoard, _super);
    function RelatiBoard(width, height) {
        var _this = _super.call(this, width, height) || this;
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                var grid = new RelatiGrid(_this, x, y);
                _this.grids[grid.i] = grid;
            }
        }
        return _this;
    }
    return RelatiBoard;
}(GridBoard));
