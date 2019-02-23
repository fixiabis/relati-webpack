import { RelatiRole, RelatiRoleType, RelatiRoleInfo } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
import { RelatiPathParam } from "../rules/RelatiPath";
import { RelatiRecovery } from "../skills/RelatiRecovery";

export class Xa extends RelatiRole {
    static info: RelatiRoleInfo = {
        name: "科薩",
        detail: "連結能力極廣的角色",
        params: {
            "relati-source": RelatiPathParam.Common,
            "relati-target": RelatiPathParam.Common
        }
    };

    constructor(
        grid: RelatiGrid,
        owner: RelatiPlayer,
        type: RelatiRoleType = "normal"
    ) {
        super(grid, owner, type);

        if (type == "leader") {
            this.gain("relati-launcher");
            this.skills.push(RelatiRecovery);
        } else {
            this.gain("relati-receiver");
            this.params["relati-source"] = RelatiPathParam.Common;
        }

        this.params["relati-target"] = RelatiPathParam.Common;
    }
}