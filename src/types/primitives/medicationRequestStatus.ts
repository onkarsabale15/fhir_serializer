enum EMedicationRequestStatus {
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    STOPPED = "stopped",
    DRAFT = "draft",
    UNKNOWN = "unknown"
}

type TMedicationRequestStatus = `${EMedicationRequestStatus}`;

export { EMedicationRequestStatus };
export type { TMedicationRequestStatus };

