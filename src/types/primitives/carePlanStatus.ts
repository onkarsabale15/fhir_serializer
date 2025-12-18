enum ECarePlanStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    REVOKED = "revoked",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}

type TCarePlanStatus = `${ECarePlanStatus}`;

export { ECarePlanStatus };
export type { TCarePlanStatus };

