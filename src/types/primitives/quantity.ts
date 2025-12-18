import { TQuantityComparator } from "./quantityComparator";

interface IQuantity {
    value?: number;
    comparator?: TQuantityComparator;
    unit?: string;
    system?: string;
    code?: string;
}

export type { IQuantity };

