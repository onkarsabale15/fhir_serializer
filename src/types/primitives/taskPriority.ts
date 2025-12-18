enum ETaskPriority {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}

type TTaskPriority = `${ETaskPriority}`;

export { ETaskPriority };
export type { TTaskPriority };


