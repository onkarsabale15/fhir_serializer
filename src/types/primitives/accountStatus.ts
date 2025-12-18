enum EAccountStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error",
    ON_HOLD = "on-hold",
    UNKNOWN = "unknown"
}

type TAccountStatus = `${EAccountStatus}`;

export { EAccountStatus };
export type { TAccountStatus };


