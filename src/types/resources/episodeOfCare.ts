import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TEpisodeOfCareStatus } from "../primitives/episodeOfCareStatus";
import { IPeriod } from "../primitives/period";
import { IEpisodeOfCareStatusHistory } from "../primitives/episodeOfCareStatusHistory";
import { IEpisodeOfCareDiagnosis } from "../primitives/episodeOfCareDiagnosis";

interface IEpisodeOfCare extends IResource<EResourceType.EPISODE_OF_CARE> {
    identifier?: IIdentifier[];
    status: TEpisodeOfCareStatus;
    statusHistory?: IEpisodeOfCareStatusHistory[];
    type?: ICodeableConcept[];
    diagnosis?: IEpisodeOfCareDiagnosis[];
    patient: IReference<EResourceType.PATIENT>;
    managingOrganization?: IReference<EResourceType.ORGANIZATION>;
    period?: IPeriod;
    referralRequest?: IReference[];
    careManager?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    team?: IReference<EResourceType.CARE_TEAM>[];
    account?: IReference<EResourceType.ACCOUNT>[];
}

export type { IEpisodeOfCare };


