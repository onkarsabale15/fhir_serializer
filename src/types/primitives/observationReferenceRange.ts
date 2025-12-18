import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { ICodeableConcept } from "./codeableConceps";

interface IObservationReferenceRange {
    low?: IQuantity;
    high?: IQuantity;
    type?: ICodeableConcept;
    appliesTo?: ICodeableConcept[];
    age?: IRange;
    text?: string;
}

export type { IObservationReferenceRange };

