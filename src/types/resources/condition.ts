import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TConditionStatus } from "../primitives/conditionStatus";
import { TConditionVerificationStatus } from "../primitives/conditionVerificationStatus";
import { TDate } from "../primitives/date";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IConditionStage } from "../primitives/conditionStage";
import { IConditionEvidence } from "../primitives/conditionEvidence";
import { IAge } from "../primitives/age";
import { IRange } from "../primitives/range";
import { IAnnotation } from "../primitives/annotation";

interface ICondition extends IResource<EResourceType.CONDITION> {
    identifier?: IIdentifier[];
    clinicalStatus?: ICodeableConcept<TConditionStatus>;
    verificationStatus?: ICodeableConcept<TConditionVerificationStatus>;
    category?: ICodeableConcept[];
    severity?: ICodeableConcept;
    code?: ICodeableConcept;
    bodySite?: ICodeableConcept[];
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    onsetDateTime?: TDateTime;
    onsetAge?: IAge;
    onsetPeriod?: IPeriod;
    onsetRange?: IRange;
    onsetString?: string;
    abatementDateTime?: TDateTime;
    abatementAge?: IAge;
    abatementPeriod?: IPeriod;
    abatementRange?: IRange;
    abatementString?: string;
    recordedDate?: TDateTime;
    recorder?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.PATIENT | EResourceType.RELATED_PERSON>;
    asserter?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    stage?: IConditionStage[];
    evidence?: IConditionEvidence[];
    note?: IAnnotation[];
}

export type { ICondition };

