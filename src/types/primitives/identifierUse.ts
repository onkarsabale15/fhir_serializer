enum EIdentfierUse{
    USUAL = "usual",
    OFFICIAL = "official",
    TEMP = "temp",
    SECONDARY = "secondary",
    OLD = "old"
}

type TIdentifierUse = `${EIdentfierUse}`;

export { EIdentfierUse };
export type { TIdentifierUse }