import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";
import { TDateTime } from "./dateTime";

interface IImmunizationProtocolApplied {
    series?: string;
    authority?: IReference<EResourceType.ORGANIZATION>;
    targetDisease?: any[];
    doseNumberPositiveInt?: number;
    doseNumberString?: string;
    seriesDosesPositiveInt?: number;
    seriesDosesString?: string;
}

export type { IImmunizationProtocolApplied };

