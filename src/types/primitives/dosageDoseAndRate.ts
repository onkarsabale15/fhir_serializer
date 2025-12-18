import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { ICodeableConcept } from "./codeableConceps";
import { IRatio } from "./ratio";

interface IDosageDoseAndRate {
    type?: ICodeableConcept;
    doseRange?: IRange;
    doseQuantity?: IQuantity;
    rateRatio?: IRatio;
    rateRange?: IRange;
    rateQuantity?: IQuantity;
}

export type { IDosageDoseAndRate };

