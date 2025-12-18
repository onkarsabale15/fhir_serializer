enum EGoalStatus {
    PROPOSED = "proposed",
    PLANNED = "planned",
    ACCEPTED = "accepted",
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    REJECTED = "rejected"
}

type TGoalStatus = `${EGoalStatus}`;

export { EGoalStatus };
export type { TGoalStatus };

