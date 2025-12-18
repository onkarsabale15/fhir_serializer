import { IQuantity } from "./quantity";

interface IAge extends IQuantity {
    // Age is a specialized Quantity with value representing years
    // Inherits all Quantity properties
}

export type { IAge };

