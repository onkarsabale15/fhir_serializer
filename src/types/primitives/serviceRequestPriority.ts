enum EServiceRequestPriority {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}

type TServiceRequestPriority = `${EServiceRequestPriority}`;

export { EServiceRequestPriority };
export type { TServiceRequestPriority };


