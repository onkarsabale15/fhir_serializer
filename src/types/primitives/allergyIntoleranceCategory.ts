enum EAllergyIntoleranceCategory {
    FOOD = "food",
    MEDICATION = "medication",
    ENVIRONMENT = "environment",
    BIOLOGIC = "biologic"
}

type TAllergyIntoleranceCategory = `${EAllergyIntoleranceCategory}`;

export { EAllergyIntoleranceCategory };
export type { TAllergyIntoleranceCategory };

