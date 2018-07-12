function addRelatiNormalBoardIn(selector) {
    var board = createBoard("relati-normal", 5, 5, selector);

    board.gridOf.C3.status = "source";
    board.gridOf.C3.getGridsFromDir("O,C").forEach(
        grid => grid.symbol = "O"
    );

    board.addGridMark(
        grid => grid.crd === "C3",
        function (painter, x, y, gridSize) {
            var routeLength = gridSize * 0.2;
            var beginX = x + routeLength;
            var finalX = x + gridSize - routeLength;
            var beginY = y + routeLength;
            var finalY = x + gridSize - routeLength;
            var centerX = x + gridSize * 0.5;
            var centerY = y + gridSize * 0.5;
            var endX = x + gridSize;
            var endY = y + gridSize;

            painter.strokeStyle = "red";
            painter.lineWidth = 2;

            relatiRoute(painter, {
                x: beginX,
                y: beginY
            }, {
                    x: x - routeLength,
                    y: y - routeLength
                });

            relatiRoute(painter, {
                x: finalX,
                y: finalY
            }, {
                    x: endX + routeLength,
                    y: endY + routeLength
                });

            relatiRoute(painter, {
                x: beginX,
                y: finalY
            }, {
                    x: x - routeLength,
                    y: endY + routeLength
                });

            relatiRoute(painter, {
                x: finalX,
                y: beginY
            }, {
                    x: endX + routeLength,
                    y: y - routeLength
                });

            relatiRoute(painter, {
                x: centerX,
                y: beginY
            }, {
                    x: centerX,
                    y: y - routeLength
                });

            relatiRoute(painter, {
                x: centerX,
                y: finalY
            }, {
                    x: centerX,
                    y: endY + routeLength
                });

            relatiRoute(painter, {
                x: beginX,
                y: centerY
            }, {
                    x: x - routeLength,
                    y: centerY
                });

            relatiRoute(painter, {
                x: finalX,
                y: centerY
            }, {
                    x: endX + routeLength,
                    y: centerY
                });

            painter.strokeStyle = "black";
        }
    );

    board.viewerRefresh();
}

function addRelatiRemoteBoardIn(selector) {
    var board = createBoard("relati-remote", 5, 5, selector);

    board.gridOf.C3.status = "source";
    board.gridOf.C3.getGridsFromDir("OO,C").forEach(
        grid => grid.symbol = "O"
    );

    board.addGridMark(
        grid => grid.crd === "C3",
        function (painter, x, y, gridSize) {
            var routeLength = gridSize * 0.2;
            var beginX = x + routeLength;
            var finalX = x + gridSize - routeLength;
            var beginY = y + routeLength;
            var finalY = y + gridSize - routeLength;
            var centerX = x + gridSize * 0.5;
            var centerY = y + gridSize * 0.5;
            var endX = x + gridSize;
            var endY = y + gridSize;

            painter.strokeStyle = "red";
            painter.lineWidth = 2;
            routeLength += gridSize;

            relatiRoute(painter, {
                x: beginX,
                y: beginY
            }, {
                    x: x - routeLength,
                    y: y - routeLength
                });

            relatiRoute(painter, {
                x: finalX,
                y: finalY
            }, {
                    x: endX + routeLength,
                    y: endY + routeLength
                });

            relatiRoute(painter, {
                x: beginX,
                y: finalY
            }, {
                    x: x - routeLength,
                    y: endY + routeLength
                });

            relatiRoute(painter, {
                x: finalX,
                y: beginY
            }, {
                    x: endX + routeLength,
                    y: y - routeLength
                });

            relatiRoute(painter, {
                x: centerX,
                y: beginY
            }, {
                    x: centerX,
                    y: y - routeLength
                });

            relatiRoute(painter, {
                x: centerX,
                y: finalY
            }, {
                    x: centerX,
                    y: endY + routeLength
                });

            relatiRoute(painter, {
                x: beginX,
                y: centerY
            }, {
                    x: x - routeLength,
                    y: centerY
                });

            relatiRoute(painter, {
                x: finalX,
                y: centerY
            }, {
                    x: endX + routeLength,
                    y: centerY
                });

            painter.strokeStyle = "black";
        }
    );

    board.viewerRefresh();
}

function addRelatiRemoteStableBoardIn(selector) {
    var board = createBoard("relati-remote-stable", 5, 5, selector);

    board.gridOf.C3.status = "source";
    board.gridOf.C3.getGridsFromDir("IIH,IHH,C").forEach(
        grid => grid.symbol = "O"
    );

    board.addGridMark(
        grid => grid.crd === "C3",
        function (painter, x, y, gridSize) {
            var routeLength = gridSize * 0.2;
            var beginX = x + routeLength;
            var finalX = x + gridSize - routeLength;
            var beginY = y + routeLength;
            var finalY = x + gridSize - routeLength;
            var leftX = x + gridSize * 0.4;
            var rightX = x + gridSize * 0.6;
            var topY = y + gridSize * 0.4;
            var bottomY = y + gridSize * 0.6;

            painter.strokeStyle = "red";
            painter.lineWidth = 2;
            routeLength += gridSize;

            relatiRoute(painter, {
                x: leftX,
                y: beginY
            }, {
                    x: leftX,
                    y: beginY - gridSize * 1.5
                }, {
                    x: leftX - gridSize * 0.6,
                    y: beginY - gridSize * 1.5
                });

            relatiRoute(painter, {
                x: rightX,
                y: beginY
            }, {
                    x: rightX,
                    y: beginY - gridSize * 1.5
                }, {
                    x: rightX + gridSize * 0.6,
                    y: beginY - gridSize * 1.5
                });

            relatiRoute(painter, {
                x: leftX,
                y: finalY
            }, {
                    x: leftX,
                    y: finalY + gridSize * 1.5
                }, {
                    x: leftX - gridSize * 0.6,
                    y: finalY + gridSize * 1.5
                });

            relatiRoute(painter, {
                x: rightX,
                y: finalY
            }, {
                    x: rightX,
                    y: finalY + gridSize * 1.5
                }, {
                    x: rightX + gridSize * 0.6,
                    y: finalY + gridSize * 1.5
                });

            painter.strokeStyle = "indianred";

            relatiRoute(painter, {
                x: beginX,
                y: topY
            }, {
                    x: beginX - gridSize * 1.5,
                    y: topY
                }, {
                    x: beginX - gridSize * 1.5,
                    y: topY - gridSize * 0.6
                });

            relatiRoute(painter, {
                x: beginX,
                y: bottomY
            }, {
                    x: beginX - gridSize * 1.5,
                    y: bottomY
                }, {
                    x: beginX - gridSize * 1.5,
                    y: bottomY + gridSize * 0.6
                });

            relatiRoute(painter, {
                x: finalX,
                y: topY
            }, {
                    x: finalX + gridSize * 1.5,
                    y: topY
                }, {
                    x: finalX + gridSize * 1.5,
                    y: topY - gridSize * 0.6
                });

            relatiRoute(painter, {
                x: finalX,
                y: bottomY
            }, {
                    x: finalX + gridSize * 1.5,
                    y: bottomY
                }, {
                    x: finalX + gridSize * 1.5,
                    y: bottomY + gridSize * 0.6
                });

            painter.strokeStyle = "black";
        }
    );

    board.viewerRefresh();

    var board = createBoard("relati-remote-stable", 5, 5, selector);

    board.gridOf.C3.status = "source";
    board.gridOf.C3.getGridsFromDir("IIH,IHH,C").forEach(
        grid => grid.symbol = "O"
    );

    board.addGridMark(
        grid => grid.crd === "C3",
        function (painter, x, y, gridSize) {
            var routeLength = gridSize * 0.2;
            var beginX = x + routeLength;
            var finalX = x + gridSize - routeLength;
            var beginY = y + routeLength;
            var finalY = x + gridSize - routeLength;
            var leftX = x + gridSize * 0.4;
            var rightX = x + gridSize * 0.6;
            var topY = y + gridSize * 0.4;
            var bottomY = y + gridSize * 0.6;

            painter.strokeStyle = "red";
            painter.lineWidth = 2;
            routeLength += gridSize;

            relatiRoute(painter, {
                x: leftX,
                y: beginY
            }, {
                    x: leftX,
                    y: beginY - gridSize * 0.4
                }, {
                    x: leftX - gridSize * 1.7,
                    y: beginY - gridSize * 0.4
                });

            relatiRoute(painter, {
                x: rightX,
                y: beginY
            }, {
                    x: rightX,
                    y: beginY - gridSize * 0.4
                }, {
                    x: rightX + gridSize * 1.7,
                    y: beginY - gridSize * 0.4
                });

            relatiRoute(painter, {
                x: leftX,
                y: finalY
            }, {
                    x: leftX,
                    y: finalY + gridSize * 0.4
                }, {
                    x: leftX - gridSize * 1.7,
                    y: finalY + gridSize * 0.4
                });

            relatiRoute(painter, {
                x: rightX,
                y: finalY
            }, {
                    x: rightX,
                    y: finalY + gridSize * 0.4
                }, {
                    x: rightX + gridSize * 1.7,
                    y: finalY + gridSize * 0.4
                });

            painter.strokeStyle = "indianred";

            relatiRoute(painter, {
                x: beginX,
                y: topY
            }, {
                    x: beginX - gridSize * 0.4,
                    y: topY
                }, {
                    x: beginX - gridSize * 0.4,
                    y: topY - gridSize * 1.7
                });

            relatiRoute(painter, {
                x: beginX,
                y: bottomY
            }, {
                    x: beginX - gridSize * 0.4,
                    y: bottomY
                }, {
                    x: beginX - gridSize * 0.4,
                    y: bottomY + gridSize * 1.7
                });

            relatiRoute(painter, {
                x: finalX,
                y: topY
            }, {
                    x: finalX + gridSize * 0.4,
                    y: topY
                }, {
                    x: finalX + gridSize * 0.4,
                    y: topY - gridSize * 1.7
                });

            relatiRoute(painter, {
                x: finalX,
                y: bottomY
            }, {
                    x: finalX + gridSize * 0.4,
                    y: bottomY
                }, {
                    x: finalX + gridSize * 0.4,
                    y: bottomY + gridSize * 1.7
                });

            painter.strokeStyle = "black";
        }
    );

    board.viewerRefresh();

    var board = createBoard("relati-remote-stable", 5, 5, selector);

    board.gridOf.C3.status = "source";
    board.gridOf.C3.getGridsFromDir("IIH,IHH,C").forEach(
        grid => grid.symbol = "O"
    );

    board.addGridMark(
        grid => grid.crd === "C3",
        function (painter, x, y, gridSize) {
            var routeLength = gridSize * 0.2;
            var beginX = x + routeLength;
            var finalX = x + gridSize - routeLength;
            var beginY = y + routeLength;
            var finalY = x + gridSize - routeLength;
            var leftX = x + gridSize * 0.4;
            var rightX = x + gridSize * 0.6;
            var topY = y + gridSize * 0.4;
            var bottomY = y + gridSize * 0.6;

            painter.strokeStyle = "red";
            painter.lineWidth = 2;
            routeLength += gridSize;

            relatiRoute(painter, {
                x: leftX,
                y: beginY
            }, {
                    x: leftX,
                    y: beginY - gridSize * 0.6
                }, {
                    x: leftX - gridSize * 0.6,
                    y: beginY - gridSize * 0.6
                }, {
                    x: leftX - gridSize * 0.6,
                    y: beginY - gridSize * 1.5
                });

            relatiRoute(painter, {
                x: rightX,
                y: beginY
            }, {
                    x: rightX,
                    y: beginY - gridSize * 0.6
                }, {
                    x: rightX + gridSize * 0.6,
                    y: beginY - gridSize * 0.6
                }, {
                    x: rightX + gridSize * 0.6,
                    y: beginY - gridSize * 1.5
                });

            relatiRoute(painter, {
                x: leftX,
                y: finalY
            }, {
                    x: leftX,
                    y: finalY + gridSize * 0.6
                }, {
                    x: leftX - gridSize * 0.6,
                    y: finalY + gridSize * 0.6
                }, {
                    x: leftX - gridSize * 0.6,
                    y: finalY + gridSize * 1.5
                });

            relatiRoute(painter, {
                x: rightX,
                y: finalY
            }, {
                    x: rightX,
                    y: finalY + gridSize * 0.6
                }, {
                    x: rightX + gridSize * 0.6,
                    y: finalY + gridSize * 0.6
                }, {
                    x: rightX + gridSize * 0.6,
                    y: finalY + gridSize * 1.5
                });

            painter.strokeStyle = "indianred";

            relatiRoute(painter, {
                x: beginX,
                y: topY
            }, {
                    x: beginX - gridSize * 0.6,
                    y: topY
                }, {
                    x: beginX - gridSize * 0.6,
                    y: topY - gridSize * 0.6
                }, {
                    x: beginX - gridSize * 1.5,
                    y: topY - gridSize * 0.6
                });

            relatiRoute(painter, {
                x: beginX,
                y: bottomY
            }, {
                    x: beginX - gridSize * 0.6,
                    y: bottomY
                }, {
                    x: beginX - gridSize * 0.6,
                    y: bottomY + gridSize * 0.6
                }, {
                    x: beginX - gridSize * 1.5,
                    y: bottomY + gridSize * 0.6
                });

            relatiRoute(painter, {
                x: finalX,
                y: topY
            }, {
                    x: finalX + gridSize * 0.6,
                    y: topY
                }, {
                    x: finalX + gridSize * 0.6,
                    y: topY - gridSize * 0.6
                }, {
                    x: finalX + gridSize * 1.5,
                    y: topY - gridSize * 0.6
                });

            relatiRoute(painter, {
                x: finalX,
                y: bottomY
            }, {
                    x: finalX + gridSize * 0.6,
                    y: bottomY
                }, {
                    x: finalX + gridSize * 0.6,
                    y: bottomY + gridSize * 0.6
                }, {
                    x: finalX + gridSize * 1.5,
                    y: bottomY + gridSize * 0.6
                });

            painter.strokeStyle = "black";
        }
    );

    board.viewerRefresh();
}

function addRelatiForbidBoardIn(selector) {
    var board = createBoard("relati-forbid", 5, 5, selector);

    board.gridOf.A1.symbol = "O";
    board.gridOf.A1.status = "forbid";
    board.gridOf.E2.symbol = "O";
    board.gridOf.E2.status = "forbid";
    board.gridOf.C3.symbol = "O";
    board.gridOf.C3.status = "source";
    board.gridOf.D2.symbol = "X";
    board.gridOf.D3.symbol = "X";
    board.gridOf.D2.status = "source";
    board.gridOf.B2.symbol = "X";

    board.viewerRefresh();


    var board = createBoard("relati-forbid", 5, 5);

    board.gridOf.A1.symbol = "O";
    board.gridOf.A1.status = "forbid";
    board.gridOf.E2.symbol = "O";
    board.gridOf.E4.symbol = "O";
    board.gridOf.C3.symbol = "O";
    board.gridOf.C3.status = "source";
    board.gridOf.D2.symbol = "X";
    board.gridOf.D3.symbol = "X";
    board.gridOf.D2.status = "source";
    board.gridOf.B2.symbol = "X";

    board.addGridMark(
        grid => grid.crd === "C3",
        function (painter, x, y, gridSize) {
            var routeLength = gridSize * 0.2;
            var beginX = x + routeLength;
            var finalX = x + gridSize - routeLength;
            var beginY = y + routeLength;
            var finalY = x + gridSize - routeLength;
            var leftX = x + gridSize * 0.4;
            var rightX = x + gridSize * 0.6;
            var topY = y + gridSize * 0.4;
            var bottomY = y + gridSize * 0.6;

            painter.strokeStyle = "red";
            painter.lineWidth = 2;
            routeLength += gridSize;

            relatiRoute(painter, {
                x: rightX,
                y: finalY
            }, {
                    x: rightX,
                    y: finalY + gridSize * 0.4
                }, {
                    x: rightX + gridSize * 1.7,
                    y: finalY + gridSize * 0.4
                });

            painter.strokeStyle = "black";
        }
    );

    board.addGridMark(
        grid => grid.crd === "E2",
        function (painter, x, y, gridSize) {
            var routeLength = gridSize * 0.2;
            var beginX = x + routeLength;
            var finalX = x + gridSize - routeLength;
            var beginY = y + routeLength;
            var finalY = y + gridSize - routeLength;
            var centerX = x + gridSize * 0.5;
            var centerY = y + gridSize * 0.5;
            var endX = x + gridSize;
            var endY = y + gridSize;

            painter.strokeStyle = "red";
            painter.lineWidth = 2;
            routeLength += gridSize;

            relatiRoute(painter, {
                x: centerX,
                y: finalY
            }, {
                    x: centerX,
                    y: endY + routeLength
                });

            painter.strokeStyle = "black";
        }
    );

    board.viewerRefresh();
}