enum EMedicationStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TMedicationStatus = `${EMedicationStatus}`;

export { EMedicationStatus };
export type { TMedicationStatus };

