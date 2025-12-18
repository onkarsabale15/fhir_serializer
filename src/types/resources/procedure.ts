import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TProcedureStatus } from "../primitives/procedureStatus";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IProcedurePerformer } from "../primitives/procedurePerformer";
import { IProcedureFocalDevice } from "../primitives/procedureFocalDevice";
import { IAge } from "../primitives/age";
import { IRange } from "../primitives/range";
import { IAnnotation } from "../primitives/annotation";

interface IProcedure extends IResource<EResourceType.PROCEDURE> {
    identifier?: IIdentifier[];
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: IReference<EResourceType.CARE_PLAN | EResourceType.SERVICE_REQUEST>;
    partOf?: IReference<EResourceType.PROCEDURE | EResourceType.OBSERVATION | EResourceType.MEDICATION_ADMINISTRATION>;
    status: TProcedureStatus;
    statusReason?: ICodeableConcept;
    category?: ICodeableConcept;
    code?: ICodeableConcept;
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    performedDateTime?: TDateTime;
    performedPeriod?: IPeriod;
    performedString?: string;
    performedAge?: IAge;
    performedRange?: IRange;
    recorder?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    asserter?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    performer?: IProcedurePerformer[];
    location?: IReference<EResourceType.LOCATION>;
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference<EResourceType.CONDITION | EResourceType.OBSERVATION | EResourceType.PROCEDURE | EResourceType.DIAGNOSTIC_REPORT | EResourceType.DOCUMENT_REFERENCE>;
    bodySite?: ICodeableConcept[];
    outcome?: ICodeableConcept;
    report?: IReference<EResourceType.DIAGNOSTIC_REPORT | EResourceType.DOCUMENT_REFERENCE | EResourceType.COMPOSITION>[];
    complication?: ICodeableConcept[];
    complicationDetail?: IReference<EResourceType.CONDITION>[];
    followUp?: ICodeableConcept[];
    note?: IAnnotation[];
    focalDevice?: IProcedureFocalDevice[];
    usedReference?: IReference<EResourceType.DEVICE | EResourceType.MEDICATION | EResourceType.SUBSTANCE>[];
    usedCode?: ICodeableConcept[];
}

export type { IProcedure };

