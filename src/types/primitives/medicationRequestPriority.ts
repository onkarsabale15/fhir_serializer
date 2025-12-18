enum EMedicationRequestPriority {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}

type TMedicationRequestPriority = `${EMedicationRequestPriority}`;

export { EMedicationRequestPriority };
export type { TMedicationRequestPriority };

