import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TMedicationRequestStatus } from "../primitives/medicationRequestStatus";
import { TMedicationRequestIntent } from "../primitives/medicationRequestIntent";
import { TMedicationRequestPriority } from "../primitives/medicationRequestPriority";
import { TDateTime } from "../primitives/dateTime";
import { IAnnotation } from "../primitives/annotation";
import { IMedicationRequestDosageInstruction } from "../primitives/medicationRequestDosageInstruction";
import { IMedicationRequestDispenseRequest } from "../primitives/medicationRequestDispenseRequest";

interface IMedicationRequest extends IResource<EResourceType.MEDICATION_REQUEST> {
    identifier?: IIdentifier[];
    status: TMedicationRequestStatus;
    statusReason?: ICodeableConcept;
    intent: TMedicationRequestIntent;
    category?: ICodeableConcept[];
    priority?: TMedicationRequestPriority;
    doNotPerform?: boolean;
    medicationCodeableConcept?: ICodeableConcept;
    medicationReference?: IReference<EResourceType.MEDICATION>;
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    supportingInformation?: IReference[];
    authoredOn?: TDateTime;
    requester?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.DEVICE>;
    performer?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM | EResourceType.PATIENT | EResourceType.DEVICE | EResourceType.RELATED_PERSON>;
    performerType?: ICodeableConcept;
    recorder?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference[];
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: IReference<EResourceType.MEDICATION_REQUEST | EResourceType.CARE_PLAN>;
    groupIdentifier?: IIdentifier;
    courseOfTherapyType?: ICodeableConcept;
    insurance?: IReference[];
    note?: IAnnotation[];
    dosageInstruction?: IMedicationRequestDosageInstruction[];
    dispenseRequest?: IMedicationRequestDispenseRequest;
    substitution?: any;
    priorPrescription?: IReference<EResourceType.MEDICATION_REQUEST>;
    detectedIssue?: IReference<EResourceType.DETECTED_ISSUE>[];
    eventHistory?: IReference<EResourceType.PROVENANCE>[];
}

export type { IMedicationRequest };

