enum ELocationStatus {
    ACTIVE = "active",
    SUSPENDED = "suspended",
    INACTIVE = "inactive"
}

type TLocationStatus = `${ELocationStatus}`;

export { ELocationStatus };
export type { TLocationStatus };

