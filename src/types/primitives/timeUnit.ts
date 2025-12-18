enum ETimeUnit {
    SECOND = "s",
    MINUTE = "min",
    HOUR = "h",
    DAY = "d",
    WEEK = "wk",
    MONTH = "mo",
    YEAR = "a"
}

type TTimeUnit = `${ETimeUnit}`;

export { ETimeUnit };
export type { TTimeUnit };

