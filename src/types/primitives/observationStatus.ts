enum EObservationStatus {
    REGISTERED = "registered",
    PRELIMINARY = "preliminary",
    FINAL = "final",
    AMENDED = "amended",
    CORRECTED = "corrected",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}

type TObservationStatus = `${EObservationStatus}`;

export { EObservationStatus };
export type { TObservationStatus };

