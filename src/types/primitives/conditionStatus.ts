enum EConditionStatus {
    ACTIVE = "active",
    RECURRENCE = "recurrence",
    RELAPSE = "relapse",
    INACTIVE = "inactive",
    REMISSION = "remission",
    RESOLVED = "resolved"
}

type TConditionStatus = `${EConditionStatus}`;

export { EConditionStatus };
export type { TConditionStatus };

