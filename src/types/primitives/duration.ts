import { IQuantity } from "./quantity";

interface IDuration extends IQuantity {
    // Duration is a specialized Quantity with value representing time duration
    // Inherits all Quantity properties
}

export type { IDuration };

