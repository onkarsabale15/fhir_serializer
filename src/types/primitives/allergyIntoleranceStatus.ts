enum EAllergyIntoleranceStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    RESOLVED = "resolved"
}

type TAllergyIntoleranceStatus = `${EAllergyIntoleranceStatus}`;

export { EAllergyIntoleranceStatus };
export type { TAllergyIntoleranceStatus };

