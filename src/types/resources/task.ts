import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TTaskStatus } from "../primitives/taskStatus";
import { TTaskIntent } from "../primitives/taskIntent";
import { TTaskPriority } from "../primitives/taskPriority";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IAnnotation } from "../primitives/annotation";
import { ITaskInput } from "../primitives/taskInput";
import { ITaskOutput } from "../primitives/taskOutput";

interface ITask extends IResource<EResourceType.TASK> {
    identifier?: IIdentifier[];
    instantiatesCanonical?: string;
    instantiatesUri?: string;
    basedOn?: IReference[];
    groupIdentifier?: IIdentifier;
    partOf?: IReference<EResourceType.TASK>[];
    status: TTaskStatus;
    statusReason?: ICodeableConcept;
    businessStatus?: ICodeableConcept;
    intent: TTaskIntent;
    priority?: TTaskPriority;
    code?: ICodeableConcept;
    description?: string;
    focus?: IReference;
    for?: IReference;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    executionPeriod?: IPeriod;
    authoredOn?: TDateTime;
    lastModified?: TDateTime;
    requester?: IReference;
    performerType?: ICodeableConcept[];
    owner?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM | EResourceType.HEALTHCARE_SERVICE | EResourceType.PATIENT | EResourceType.DEVICE | EResourceType.RELATED_PERSON>;
    location?: IReference<EResourceType.LOCATION>;
    reasonCode?: ICodeableConcept;
    reasonReference?: IReference;
    insurance?: IReference[];
    note?: IAnnotation[];
    relevantHistory?: IReference<EResourceType.PROVENANCE>[];
    restriction?: any;
    input?: ITaskInput[];
    output?: ITaskOutput[];
}

export type { ITask };


