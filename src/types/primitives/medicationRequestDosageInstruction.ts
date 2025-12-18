import { ICodeableConcept } from "./codeableConceps";
import { IRatio } from "./ratio";
import { ISampledData } from "./sampledData";
import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { IPeriod } from "./period";
import { TDateTime } from "./dateTime";
import { ITiming } from "./timing";
import { IDosageDoseAndRate } from "./dosageDoseAndRate";

interface IMedicationRequestDosageInstruction {
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

export type { IMedicationRequestDosageInstruction };

