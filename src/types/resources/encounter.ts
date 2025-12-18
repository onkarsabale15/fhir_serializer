import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { ICoding } from "../primitives/coding";
import { IDiagnosis } from "../primitives/diagnosis";
import { TEncounterClass } from "../primitives/encounterClass";
import { IEncounterLocation } from "../primitives/encounterLocation";
import { TEncounterStatus } from "../primitives/encounterStatus";
import { IHistory } from "../primitives/history";
import { IHositalization } from "../primitives/hospitalization";
import { IIdentifier } from "../primitives/identifier";
import { IParticipant } from "../primitives/participant";
import { IPeriod } from "../primitives/period";
import { TPriority } from "../primitives/priorityCodes";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";


interface IEncounter extends IResource<EResourceType.ENCOUNTER> {
    identifier?: IIdentifier[];
    status?: TEncounterStatus;
    statusHistory?: IHistory<TEncounterStatus>;
    class?: ICoding<TEncounterClass>;
    classHistory?: IHistory<TEncounterClass>;
    type?: ICodeableConcept[];
    serviceType?: ICodeableConcept[];
    priority?: ICodeableConcept<TPriority>[];
    subject?: IReference<EResourceType.PATIENT>;
    episodeOfCare?: IReference<EResourceType.EPISODE_OF_CARE>[];
    basedOn?: IReference<EResourceType.SERVICE_REQUEST>[];
    participant?: IParticipant;
    appointment?: IReference<EResourceType.APPOINTMENT>[];
    period?: IPeriod;
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference<EResourceType.CONDITION | EResourceType.PROCEDURE | EResourceType.OBSERVATION | EResourceType.IMMUNIZATION_RECOMMENDATION>;
    diagnosis?: IDiagnosis[];
    account?: IReference<EResourceType.ACCOUNT>[];
    hospitalization?: IHositalization;
    location?:IEncounterLocation;
    serviceProvider?: IReference<EResourceType.ORGANIZATION>;
    partOf?: IReference<EResourceType.ENCOUNTER>;
}

export type { IEncounter }