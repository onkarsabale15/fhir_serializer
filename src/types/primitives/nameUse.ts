enum ENameUse{
    USUAL = "usual",
    OFFICIAL = "official",
    TEMP = "temp",
    NICKNAME = "nickname",
    ANONYMOUS = "anonymous",
    OLD = "old",
    MAIDEN = "maiden"
}

type TNameUse = `${ENameUse}`;

export { ENameUse };
export type { TNameUse };