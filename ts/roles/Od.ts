import { RelatiRole, RelatiRoleType } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
import { RelatiPathParam } from "../rules/RelatiPath";
import { RelatiRecovery } from "../skills/RelatiRecovery";

export class Od extends RelatiRole {
    static detail: string = "連結能力極廣的角色";

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