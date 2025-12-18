import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { IReference } from "./reference";
import { IPeriod } from "./period";

interface IGroupCharacteristic {
    code: ICodeableConcept;
    valueCodeableConcept?: ICodeableConcept;
    valueBoolean?: boolean;
    valueQuantity?: IQuantity;
    valueRange?: IRange;
    valueReference?: IReference;
    exclude?: boolean;
    period?: IPeriod;
}

export type { IGroupCharacteristic };


