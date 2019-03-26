import { RelatiRole, RelatiRoleType } from "../RelatiRole";
import { RelatiGrid } from "../RelatiBoard";
import { RelatiPlayer } from "../RelatiPlayer";
import { RelatiProtocolParams } from "../rules/RelatiProtocol";

export class NormalRole extends RelatiRole {
    constructor(
        grid: RelatiGrid,
        owner: RelatiPlayer,
        type?: RelatiRoleType
    ) {
        super(grid, owner, type);
        this.params["relati-source"] = RelatiProtocolParams.RelatiCommon;
        this.params["relati-target"] = RelatiProtocolParams.RelatiCommon;

        if (type == "leader") this.gain("relati-launcher");
        else this.gain("relati-receiver");
    }
}