import { EResourceType } from "./allowedResourceTypes";
import { ICodeableConcept } from "./codeableConceps";
import { TLocationPhysicalType } from "./locationPhysicalType";
import { IPeriod } from "./period";
import { IReference } from "./reference";
import { TEncounterLocationStatus } from "./encounterLocationStatus";

interface IEncounterLocation{
    location?:IReference<EResourceType.LOCATION>
    status?: TEncounterLocationStatus
    physicalType?: ICodeableConcept<TLocationPhysicalType>
    period?: IPeriod
}

export type { IEncounterLocation }