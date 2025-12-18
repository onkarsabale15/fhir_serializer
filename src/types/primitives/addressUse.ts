enum EAddressUse {
    HOME = "home",
    WORK = "work",
    TEMP = "temp",
    OLD = "old",
    BILLING = "billing"
}

type TAddressUse = `${EAddressUse}`;

export { EAddressUse };
export type { TAddressUse }