enum EGender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}

type TGender = `${EGender}`;

export { EGender };
export type { TGender };