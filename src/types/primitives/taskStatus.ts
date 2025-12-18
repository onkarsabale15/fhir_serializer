enum ETaskStatus {
    DRAFT = "draft",
    REQUESTED = "requested",
    RECEIVED = "received",
    ACCEPTED = "accepted",
    REJECTED = "rejected",
    READY = "ready",
    CANCELLED = "cancelled",
    IN_PROGRESS = "in-progress",
    ON_HOLD = "on-hold",
    FAILED = "failed",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TTaskStatus = `${ETaskStatus}`;

export { ETaskStatus };
export type { TTaskStatus };


