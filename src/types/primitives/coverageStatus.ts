enum ECoverageStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TCoverageStatus = `${ECoverageStatus}`;

export { ECoverageStatus };
export type { TCoverageStatus };


