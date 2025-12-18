enum ECareTeamStatus {
    PROPOSED = "proposed",
    ACTIVE = "active",
    SUSPENDED = "suspended",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TCareTeamStatus = `${ECareTeamStatus}`;

export { ECareTeamStatus };
export type { TCareTeamStatus };

