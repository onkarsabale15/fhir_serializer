import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TCareTeamStatus } from "../primitives/careTeamStatus";
import { IPeriod } from "../primitives/period";
import { IAnnotation } from "../primitives/annotation";
import { ICareTeamParticipant } from "../primitives/careTeamParticipant";

interface ICareTeam extends IResource<EResourceType.CARE_TEAM> {
    identifier?: IIdentifier[];
    status?: TCareTeamStatus;
    category?: ICodeableConcept[];
    name?: string;
    subject?: IReference<EResourceType.PATIENT | EResourceType.GROUP>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    period?: IPeriod;
    participant?: ICareTeamParticipant[];
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference[];
    managingOrganization?: IReference<EResourceType.ORGANIZATION>[];
    telecom?: any[];
    note?: IAnnotation[];
}

export type { ICareTeam };

