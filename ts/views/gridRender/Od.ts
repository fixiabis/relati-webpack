import { RelatiGridRenderer } from "../RelatiBoardView";
import { RelatiSVG } from "../../RelatiSVG";

export var Od: RelatiGridRenderer = {
    render(grid, gridSize, gridView) {
        if (!grid.role || grid.role.owner.badge != "O") return;

        var srtX = (grid.x + 0.2) * gridSize;
        var srtY = (grid.y + 0.2) * gridSize;
        var endX = (grid.x + 0.8) * gridSize;
        var endY = (grid.y + 0.8) * gridSize;
    
        var roleViewProp = {
            "d": "",
            "stroke": "crimson",
            "stroke-width": `${gridSize * 0.12}`,
            "fill": "none"
        };
    
        roleViewProp["d"] = `
            M ${srtX + 1.5} ${srtY + 1.5}
            m 0 -1.5
            a 1.5 1.5 0 0 1, 0 3
            a 1.5 1.5 0 0 1, 0 -3
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