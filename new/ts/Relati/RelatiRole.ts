namespace Relati {
    export type RelatiRoleType = "normal" | "leader" | "wizard";

    export type RelatiRoleStatus = (
        RelatiRoleStatusRelati
    );

    export interface RelatiRole {
        is(status: RelatiRoleStatus): boolean;
        is(status: RelatiRoleStatus[], type: "all" | "any"): boolean;
    }

    export class RelatiRole {
        public type: RelatiRoleType = "normal";
        public status: { [status: string]: boolean } = {};
        constructor(
            public owner: RelatiPlayer,
            public grid: RelatiGrid
        ) { }

        is(status: RelatiRoleStatus | RelatiRoleStatus[], type?: "all" | "any") {
            if (typeof status === "string") return this.status[status];

            if (type == "any") {
                for (var statusName of status) {
                    if (this.status[statusName]) return true;
                }

                return false;
            } else {
                for (var statusName of status) {
                    if (!this.status[statusName]) return false;
                }

                return true;
            }
        }

        gain(status: RelatiRoleStatus) {
            this.status[status] = true;
        }

        lost(status: RelatiRoleStatus) {
            this.status[status] = false;
        }
    }
}

namespace Relati {
    export type RelatiRoleStatusRelati = (
        "relati-launcher" |
        "relati-repeater" |
        "relati-recepter" |
        RelatiRoleStatusRelatiNormal |
        RelatiRoleStatusRelatiRemote
    );

    export type RelatiRoleStatusRelatiNormal = (
        "relati-normal-launcher" |
        "relati-normal-repeater" |
        "relati-normal-recepter"
    );

    export type RelatiRoleStatusRelatiRemote = (
        "relati-remote-launcher" |
        "relati-remote-repeater" |
        "relati-remote-recepter" |
        RelatiRoleStatusRelatiRemoteNormal |
        RelatiRoleStatusRelatiRemoteStable
    );

    export type RelatiRoleStatusRelatiRemoteNormal = (
        "relati-remote-normal-launcher" |
        "relati-remote-normal-repeater" |
        "relati-remote-normal-recepter"
    );

    export type RelatiRoleStatusRelatiRemoteStable = (
        "relati-remote-stable-launcher" |
        "relati-remote-stable-repeater" |
        "relati-remote-stable-recepter"
    );
}