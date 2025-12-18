enum ECarePlanIntent {
    PROPOSAL = "proposal",
    PLAN = "plan",
    ORDER = "order",
    OPTION = "option",
    DIRECTIVE = "directive"
}

type TCarePlanIntent = `${ECarePlanIntent}`;

export { ECarePlanIntent };
export type { TCarePlanIntent };

