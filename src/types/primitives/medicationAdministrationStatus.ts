enum EMedicationAdministrationStatus {
    PREPARATION = "preparation",
    IN_PROGRESS = "in-progress",
    NOT_DONE = "not-done",
    ON_HOLD = "on-hold",
    STOPPED = "stopped",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}

type TMedicationAdministrationStatus = `${EMedicationAdministrationStatus}`;

export { EMedicationAdministrationStatus };
export type { TMedicationAdministrationStatus };

