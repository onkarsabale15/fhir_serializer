enum EEpisodeOfCareStatus {
    PLANNED = "planned",
    WAITLIST = "waitlist",
    ACTIVE = "active",
    ONHOLD = "onhold",
    FINISHED = "finished",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TEpisodeOfCareStatus = `${EEpisodeOfCareStatus}`;

export { EEpisodeOfCareStatus };
export type { TEpisodeOfCareStatus };


