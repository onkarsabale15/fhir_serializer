import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TCarePlanStatus } from "../primitives/carePlanStatus";
import { TCarePlanIntent } from "../primitives/carePlanIntent";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { ICarePlanActivity } from "../primitives/carePlanActivity";
import { IAnnotation } from "../primitives/annotation";

interface ICarePlan extends IResource<EResourceType.CARE_PLAN> {
    identifier?: IIdentifier[];
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: IReference<EResourceType.CARE_PLAN>[];
    replaces?: IReference<EResourceType.CARE_PLAN>[];
    partOf?: IReference<EResourceType.CARE_PLAN>[];
    status: TCarePlanStatus;
    intent: TCarePlanIntent;
    category?: ICodeableConcept[];
    title?: string;
    description?: string;
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    period?: IPeriod;
    created?: TDateTime;
    author?: IReference<EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.DEVICE | EResourceType.RELATED_PERSON | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM>;
    contributor?: IReference<EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.DEVICE | EResourceType.RELATED_PERSON | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM>[];
    careTeam?: IReference<EResourceType.CARE_TEAM>[];
    addresses?: IReference<EResourceType.CONDITION>[];
    supportingInfo?: IReference[];
    goal?: IReference<EResourceType.GOAL>[];
    activity?: ICarePlanActivity[];
    note?: IAnnotation[];
}

export type { ICarePlan };

