import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TGoalLifecycleStatus } from "../primitives/goalLifecycleStatus";
import { TDate } from "../primitives/date";
import { IAnnotation } from "../primitives/annotation";
import { IGoalTarget } from "../primitives/goalTarget";

interface IGoal extends IResource<EResourceType.GOAL> {
    identifier?: IIdentifier[];
    lifecycleStatus: TGoalLifecycleStatus;
    achievementStatus?: ICodeableConcept;
    category?: ICodeableConcept[];
    priority?: ICodeableConcept;
    description: ICodeableConcept;
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP | EResourceType.ORGANIZATION>;
    startDate?: TDate;
    startCodeableConcept?: ICodeableConcept;
    target?: IGoalTarget[];
    statusDate?: string;
    statusReason?: string;
    expressedBy?: IReference<EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.RELATED_PERSON>;
    addresses?: IReference[];
    note?: IAnnotation[];
    outcomeCode?: ICodeableConcept[];
    outcomeReference?: IReference[];
}

export type { IGoal };

