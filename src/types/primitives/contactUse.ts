enum EContactUse {
    HOME = "home",
    WORK = "work",
    TEMP = "temp",
    OLD = "old",
    MOBILE = "mobile"
}

type TContactUse = `${EContactUse}`;

export { EContactUse };
export type { TContactUse }