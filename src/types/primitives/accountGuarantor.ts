import { IReference } from "./reference";
import { IPeriod } from "./period";
import { EResourceType } from "./allowedResourceTypes";

interface IAccountGuarantor {
    party: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.ORGANIZATION>;
    onHold?: boolean;
    period?: IPeriod;
}

export type { IAccountGuarantor };

