namespace Relati {
    export namespace RelatiView {
        export function viewInitialize(
            board: RelatiBoard,
            gridSize: number,
            container: HTMLElement,
            view: RelatiGame["view"]
        ) {
            var { width, height } = board;

            var boardView = createSVG("svg");
            boardView.setAttribute("width", `${width * gridSize}`);
            boardView.setAttribute("height", `${height * gridSize}`);

            var background = createSVG("g");
            boardView.appendChild(background);

            var lineAttr = {
                "d": "",
                "stroke": "#888",
                "stroke-width": "0.4"
            };

            for (var x = 1; x < width; x++) {
                lineAttr.d = `M ${x * gridSize} 0 V ${height * gridSize}`;
                var gridLine = createSVG("path", lineAttr);
                boardView.appendChild(gridLine);
            }

            for (var y = 1; y < height; y++) {
                lineAttr.d = `M 0 ${y * gridSize} H ${width * gridSize}`;
                var gridLine = createSVG("path", lineAttr);
                boardView.appendChild(gridLine);
            }

            boardView.style.transform = `scale(${Math.min(
                container.clientWidth / (board.width * 5),
                container.clientHeight / (board.height * 5)
            ) * 0.95})`;

            window.addEventListener("resize", function () {
                boardView.style.transform = `scale(${Math.min(
                    container.clientWidth / (width * 5),
                    container.clientHeight / (height * 5)
                ) * 0.95})`;
            });

            container.appendChild(boardView);

            for (var grid of board.gridList) {
                var gridView = createSVG("g");
                view[grid.coordinate] = gridView;
                boardView.appendChild(gridView);
            }

            view.board = boardView;
            view.background = background;
        }

        export function updateBoardView(board: RelatiBoard, view: RelatiGame["view"]) {
            for (var grid of board.gridList) {
                var gridView = view[grid.coordinate];

                while (gridView.childNodes.length > 0) {
                    gridView.removeChild(gridView.childNodes[0]);
                }

                updateGridBadge(grid, gridView);
            }
        }

        function updateGridBadge(grid: RelatiGrid, gridView: SVGElement) {
            if (!grid.role) return;

            var srtX = grid.x * 5 + 1;
            var srtY = grid.y * 5 + 1;
            var endX = grid.x * 5 + 4;
            var endY = grid.y * 5 + 4;

            var badgeAttr = {
                "d": "",
                "stroke-width": "0.6",
                "stroke": "",
                "fill": "none"
            };

            switch (grid.role.owner.badge) {
                case "O":
                    badgeAttr["d"] = `
                        M ${srtX + 1.5} ${srtY + 1.5}
                        m 0 -1.5
                        a 1.5 1.5 0 0 1, 0 3
                        a 1.5 1.5 0 0 1, 0 -3
                    `;
                    badgeAttr["stroke"] = "crimson";
                    break;
                case "X":
                    badgeAttr["d"] = `
                        M ${srtX} ${srtY} L ${endX} ${endY}
                        M ${endX} ${srtY} L ${srtX} ${endY}
                    `;
                    badgeAttr["stroke"] = "royalblue";
                    break;
            }


            if (grid.role.is("relati-launcher")) {
                badgeAttr["stroke-width"] = "1";
                gridView.appendChild(createSVG("path", badgeAttr));
                badgeAttr.stroke = "#f2f2f2";
                badgeAttr["stroke-width"] = "0.5";
                gridView.appendChild(createSVG("path", badgeAttr));
            } else if (grid.role.is("relati-repeater")) {
                gridView.appendChild(createSVG("path", badgeAttr));
            } else {
                badgeAttr.stroke = "#666";
                gridView.appendChild(createSVG("path", badgeAttr));
            }
        }
    }
}