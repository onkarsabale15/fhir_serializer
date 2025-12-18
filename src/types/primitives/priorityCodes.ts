enum EPriority {
    ASAP = "A",
    CALLBACK_RESULTS = "CR",
    CALLBACK_PLACER_FOR_SCHEDULING = "CSP",
    CALLBACK_RECIPIENT_FOR_SCHEDULING = "CSR",
    ELECTIVE = "EL",
    EMERGENCY = "EM",
    PREOP = "P",
    PRE_ORDERED = "PRN",
    ROUTINE = "R",
    RUSH_REPORTING = "RR",
    STAT = "S",
    TIMING_CRITICAL = "T",
    USE_AS_DIRECTED = "UD",
    URGENT = "UR"
}

type TPriority = `${EPriority}`;

export { EPriority };
export type { TPriority }