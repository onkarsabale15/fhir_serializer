import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TMedicationStatementStatus } from "../primitives/medicationStatementStatus";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IAnnotation } from "../primitives/annotation";
import { IDosage } from "../primitives/dosage";

interface IMedicationStatement extends IResource<EResourceType.MEDICATION_STATEMENT> {
    identifier?: IIdentifier[];
    basedOn?: IReference<EResourceType.MEDICATION_REQUEST | EResourceType.CARE_PLAN | EResourceType.SERVICE_REQUEST>[];
    partOf?: IReference<EResourceType.MEDICATION_ADMINISTRATION | EResourceType.MEDICATION_DISPENSE | EResourceType.MEDICATION_STATEMENT | EResourceType.PROCEDURE>[];
    status: TMedicationStatementStatus;
    statusReason?: ICodeableConcept[];
    category?: ICodeableConcept;
    medicationCodeableConcept?: ICodeableConcept;
    medicationReference?: IReference<EResourceType.MEDICATION>;
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP>;
    context?: IReference<EResourceType.ENCOUNTER | EResourceType.EPISODE_OF_CARE>;
    effectiveDateTime?: TDateTime;
    effectivePeriod?: IPeriod;
    dateAsserted?: TDateTime;
    informationSource?: IReference<EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.RELATED_PERSON | EResourceType.ORGANIZATION>;
    derivedFrom?: IReference[];
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference[];
    note?: IAnnotation[];
    dosage?: IDosage[];
}

export type { IMedicationStatement };

