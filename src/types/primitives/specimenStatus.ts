enum ESpecimenStatus {
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable",
    UNSATISFACTORY = "unsatisfactory",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TSpecimenStatus = `${ESpecimenStatus}`;

export { ESpecimenStatus };
export type { TSpecimenStatus };

