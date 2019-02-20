export namespace RelatiRoleStatus {
    export type RelatiStatus = (
        "relati-launcher" |
        "relati-repeater" |
        "relati-receiver"
    );
}

export type RelatiRoleStatus = (
    RelatiRoleStatus.RelatiStatus
);