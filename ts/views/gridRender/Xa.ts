import { RelatiGridRenderer } from "../RelatiBoardView";
import { RelatiSVG } from "../../RelatiSVG";

export var Xa: RelatiGridRenderer = {
    render(grid, gridSize, gridView) {
        if (!grid.role || grid.role.owner.badge != "X") return;

        var srtX = (grid.x + 0.2) * gridSize;
        var srtY = (grid.y + 0.2) * gridSize;
        var endX = (grid.x + 0.8) * gridSize;
        var endY = (grid.y + 0.8) * gridSize;

        var roleViewProp = {
            "d": "",
            "stroke": "royalblue",
            "stroke-width": `${gridSize * 0.12}`,
            "fill": "none"
        };

        roleViewProp["d"] = `
            M ${srtX} ${srtY} L ${endX} ${endY}
            M ${endX} ${srtY} L ${srtX} ${endY}
        `;

        if (grid.role.is("relati-launcher")) {
            roleViewProp["stroke-width"] = `${gridSize * 0.2}`;
            gridView.appendChild(RelatiSVG("path", roleViewProp));
            roleViewProp["stroke"] = "#f2f2f2";
            roleViewProp["stroke-width"] = `${gridSize * 0.1}`;
            gridView.appendChild(RelatiSVG("path", roleViewProp));
        } else if (grid.role.is("relati-repeater")) {
            gridView.appendChild(RelatiSVG("path", roleViewProp));
        } else {
            roleViewProp["stroke"] = "#666";
            gridView.appendChild(RelatiSVG("path", roleViewProp));
        }
    }
};