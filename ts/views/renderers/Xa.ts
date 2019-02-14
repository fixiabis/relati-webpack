import { RelatiRenderer, RelatiBoardView } from "../RelatiBoardView";
import { RelatiSVG } from "../../RelatiSVG";

export var Xa: RelatiRenderer = {
    render(boardView: RelatiBoardView) {
        var { board, gridSize, gridViews } = boardView;

        var roleViewProp = {
            "d": "",
            "stroke": "royalblue",
            "stroke-width": `${gridSize * 0.12}`,
            "fill": "none"
        };

        for (var grid of board.gridList) {
            if (!grid.role || grid.role.owner.badge != "X") return;

            var srtX = (grid.x + 0.2) * gridSize;
            var srtY = (grid.y + 0.2) * gridSize;
            var endX = (grid.x + 0.8) * gridSize;
            var endY = (grid.y + 0.8) * gridSize;

            roleViewProp["d"] = `
                M ${srtX} ${srtY} L ${endX} ${endY}
                M ${endX} ${srtY} L ${srtX} ${endY}
            `;

            if (grid.role.is("relati-launcher")) {
                roleViewProp["stroke-width"] = `${gridSize * 0.2}`;
                gridViews.appendChild(RelatiSVG("path", roleViewProp));
                roleViewProp["stroke"] = "#f2f2f2";
                roleViewProp["stroke-width"] = `${gridSize * 0.1}`;
                gridViews.appendChild(RelatiSVG("path", roleViewProp));
            } else if (grid.role.is("relati-repeater")) {
                gridViews.appendChild(RelatiSVG("path", roleViewProp));
            } else {
                roleViewProp["stroke"] = "#666";
                gridViews.appendChild(RelatiSVG("path", roleViewProp));
            }
        }
    }
};