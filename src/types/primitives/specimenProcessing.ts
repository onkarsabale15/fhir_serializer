import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { IPeriod } from "./period";
import { EResourceType } from "./allowedResourceTypes";

interface ISpecimenProcessing {
    description?: string;
    procedure?: ICodeableConcept;
    additive?: IReference[];
    timeDateTime?: string;
    timePeriod?: IPeriod;
}

export type { ISpecimenProcessing };

