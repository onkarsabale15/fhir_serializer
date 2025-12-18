enum EAllergyIntoleranceCriticality {
    LOW = "low",
    HIGH = "high",
    UNABLE_TO_ASSESS = "unable-to-assess"
}

type TAllergyIntoleranceCriticality = `${EAllergyIntoleranceCriticality}`;

export { EAllergyIntoleranceCriticality };
export type { TAllergyIntoleranceCriticality };

