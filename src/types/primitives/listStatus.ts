enum EListStatus {
    CURRENT = "current",
    RETIRED = "retired",
    ENTERED_IN_ERROR = "entered-in-error"
}

type TListStatus = `${EListStatus}`;

export { EListStatus };
export type { TListStatus };


