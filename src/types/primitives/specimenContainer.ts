import { IIdentifier } from "./identifier";
import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface ISpecimenContainer {
    identifier?: IIdentifier[];
    description?: string;
    type?: ICodeableConcept;
    capacity?: IQuantity;
    specimenQuantity?: IQuantity;
    additiveCodeableConcept?: ICodeableConcept;
    additiveReference?: IReference<EResourceType.SUBSTANCE>;
}

export type { ISpecimenContainer };

