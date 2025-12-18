enum EConditionVerificationStatus {
    UNCONFIRMED = "unconfirmed",
    PROVISIONAL = "provisional",
    DIFFERENTIAL = "differential",
    CONFIRMED = "confirmed",
    REFUTED = "refuted",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TConditionVerificationStatus = `${EConditionVerificationStatus}`;

export { EConditionVerificationStatus };
export type { TConditionVerificationStatus };

