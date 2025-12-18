enum EImmunizationStatus {
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    NOT_DONE = "not-done"
}

type TImmunizationStatus = `${EImmunizationStatus}`;

export { EImmunizationStatus };
export type { TImmunizationStatus };

