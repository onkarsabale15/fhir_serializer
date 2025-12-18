import { TAddressType } from "./addressType";
import { TAddressUse } from "./addressUse";
import { IPeriod } from "./period";

interface IAddress {
    use?: TAddressUse;
    type?: TAddressType;
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    period?: IPeriod;
}

export type { IAddress };