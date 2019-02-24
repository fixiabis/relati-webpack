import { RelatiRoleInfo } from "../RelatiRole";
import { RelatiPathParam } from "../rules/RelatiPath";

export var Xa: RelatiRoleInfo = {
    type: "normal",
    name: "科薩",
    detail: "連結能力極廣的角色",
    status: ["relati-receiver"],
    params: {
        "relati-source": RelatiPathParam.Common,
        "relati-target": RelatiPathParam.Common
    },
    leader: {
        type: "leader",
        name: "科薩",
        detail: "連結能力極廣的角色",
        status: ["relati-launcher"],
        params: {
            "relati-target": RelatiPathParam.Common
        }
    }
};