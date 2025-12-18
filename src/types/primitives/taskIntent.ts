enum ETaskIntent {
    UNKNOWN = "unknown",
    PROPOSAL = "proposal",
    PLAN = "plan",
    ORDER = "order",
    ORIGINAL_ORDER = "original-order",
    REFLEX_ORDER = "reflex-order",
    FILLER_ORDER = "filler-order",
    INSTANCE_ORDER = "instance-order",
    OPTION = "option"
}

type TTaskIntent = `${ETaskIntent}`;

export { ETaskIntent };
export type { TTaskIntent };


