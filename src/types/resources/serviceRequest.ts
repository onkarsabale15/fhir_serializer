import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TServiceRequestStatus } from "../primitives/serviceRequestStatus";
import { TServiceRequestIntent } from "../primitives/serviceRequestIntent";
import { TServiceRequestPriority } from "../primitives/serviceRequestPriority";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IQuantity } from "../primitives/quantity";
import { IRange } from "../primitives/range";
import { IAnnotation } from "../primitives/annotation";

interface IServiceRequest extends IResource<EResourceType.SERVICE_REQUEST> {
    identifier?: IIdentifier[];
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: IReference<EResourceType.CARE_PLAN | EResourceType.MEDICATION_REQUEST | EResourceType.SERVICE_REQUEST | EResourceType.NUTRITION_ORDER>[];
    replaces?: IReference<EResourceType.SERVICE_REQUEST>[];
    requisition?: IIdentifier;
    status: TServiceRequestStatus;
    intent: TServiceRequestIntent;
    category?: ICodeableConcept[];
    priority?: TServiceRequestPriority;
    doNotPerform?: boolean;
    code?: ICodeableConcept;
    orderDetail?: ICodeableConcept[];
    quantityQuantity?: IQuantity;
    quantityRatio?: any;
    quantityRange?: IRange;
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP | EResourceType.LOCATION | EResourceType.DEVICE>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    occurrenceDateTime?: TDateTime;
    occurrencePeriod?: IPeriod;
    occurrenceTiming?: any;
    asNeededBoolean?: boolean;
    asNeededCodeableConcept?: ICodeableConcept;
    authoredOn?: TDateTime;
    requester?: IReference<EResourceType.DEVICE | EResourceType.ORGANIZATION | EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.RELATED_PERSON>;
    performerType?: ICodeableConcept;
    performer?: IReference[];
    locationCode?: ICodeableConcept[];
    locationReference?: IReference<EResourceType.LOCATION>[];
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference[];
    insurance?: IReference[];
    supportingInfo?: IReference[];
    specimen?: IReference<EResourceType.SPECIMEN>[];
    bodySite?: ICodeableConcept[];
    note?: IAnnotation[];
    patientInstruction?: string;
    relevantHistory?: IReference<EResourceType.PROVENANCE>[];
}

export type { IServiceRequest };


