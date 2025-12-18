import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { IRatio } from "./ratio";
import { ITiming } from "./timing";
import { IDosageDoseAndRate } from "./dosageDoseAndRate";

interface IDosage {
    sequence?: number;
    text?: string;
    additionalInstruction?: ICodeableConcept[];
    patientInstruction?: string;
    timing?: ITiming;
    asNeededBoolean?: boolean;
    asNeededCodeableConcept?: ICodeableConcept;
    site?: ICodeableConcept;
    route?: ICodeableConcept;
    method?: ICodeableConcept;
    doseAndRate?: IDosageDoseAndRate[];
    maxDosePerPeriod?: IRatio;
    maxDosePerAdministration?: IQuantity;
    maxDosePerLifetime?: IQuantity;
}

export type { IDosage };

