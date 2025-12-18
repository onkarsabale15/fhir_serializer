import { TDateTime } from "./dateTime";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IImmunizationReaction {
    date?: TDateTime;
    detail?: IReference<EResourceType.OBSERVATION>;
    reported?: boolean;
}

export type { IImmunizationReaction };

