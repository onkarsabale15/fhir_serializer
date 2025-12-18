enum EGroupType {
    PERSON = "person",
    ANIMAL = "animal",
    PRACTITIONER = "practitioner",
    DEVICE = "device",
    MEDICATION = "medication",
    SUBSTANCE = "substance"
}

type TGroupType = `${EGroupType}`;

export { EGroupType };
export type { TGroupType };


