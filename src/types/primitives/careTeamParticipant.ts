import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";
import { IPeriod } from "./period";

interface ICareTeamParticipant {
    role?: ICodeableConcept[];
    member?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.RELATED_PERSON | EResourceType.PATIENT | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM>;
    onBehalfOf?: IReference<EResourceType.ORGANIZATION>;
    period?: IPeriod;
}

export type { ICareTeamParticipant };

