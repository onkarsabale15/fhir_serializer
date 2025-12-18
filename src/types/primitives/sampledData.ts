import { IQuantity } from "./quantity";

interface ISampledData {
    origin: IQuantity;
    period: number;
    factor?: number;
    lowerLimit?: number;
    upperLimit?: number;
    dimensions: number;
    data?: string;
}

export type { ISampledData };

