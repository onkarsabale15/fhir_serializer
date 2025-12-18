import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TAllergyIntoleranceStatus } from "../primitives/allergyIntoleranceStatus";
import { TAllergyIntoleranceType } from "../primitives/allergyIntoleranceType";
import { TAllergyIntoleranceCategory } from "../primitives/allergyIntoleranceCategory";
import { TAllergyIntoleranceCriticality } from "../primitives/allergyIntoleranceCriticality";
import { TAllergyIntoleranceSeverity } from "../primitives/allergyIntoleranceSeverity";
import { TDateTime } from "../primitives/dateTime";
import { TDate } from "../primitives/date";
import { IPeriod } from "../primitives/period";
import { IAllergyIntoleranceReaction } from "../primitives/allergyIntoleranceReaction";
import { IAge } from "../primitives/age";
import { IRange } from "../primitives/range";
import { IAnnotation } from "../primitives/annotation";

interface IAllergyIntolerance extends IResource<EResourceType.ALLERGY_INTOLERANCE> {
    identifier?: IIdentifier[];
    clinicalStatus?: ICodeableConcept;
    verificationStatus?: ICodeableConcept;
    type?: TAllergyIntoleranceType;
    category?: TAllergyIntoleranceCategory[];
    criticality?: TAllergyIntoleranceCriticality;
    code?: ICodeableConcept;
    patient: IReference<EResourceType.PATIENT>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    onsetDateTime?: TDateTime;
    onsetAge?: IAge;
    onsetPeriod?: IPeriod;
    onsetRange?: IRange;
    onsetString?: string;
    recordedDate?: TDateTime;
    recorder?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    asserter?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    lastOccurrence?: TDateTime;
    note?: IAnnotation[];
    reaction?: IAllergyIntoleranceReaction[];
}

export type { IAllergyIntolerance };

