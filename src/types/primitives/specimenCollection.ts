import { IReference } from "./reference";
import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IPeriod } from "./period";
import { TDateTime } from "./dateTime";
import { EResourceType } from "./allowedResourceTypes";

interface ISpecimenCollection {
    collector?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    collectedDateTime?: TDateTime;
    collectedPeriod?: IPeriod;
    duration?: any;
    quantity?: IQuantity;
    method?: ICodeableConcept;
    bodySite?: ICodeableConcept;
    fastingStatusCodeableConcept?: ICodeableConcept;
    fastingStatusDuration?: any;
}

export type { ISpecimenCollection };

