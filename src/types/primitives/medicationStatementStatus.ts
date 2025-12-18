enum EMedicationStatementStatus {
    ACTIVE = "active",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    INTENDED = "intended",
    STOPPED = "stopped",
    ON_HOLD = "on-hold",
    UNKNOWN = "unknown",
    NOT_TAKEN = "not-taken"
}

type TMedicationStatementStatus = `${EMedicationStatementStatus}`;

export { EMedicationStatementStatus };
export type { TMedicationStatementStatus };

