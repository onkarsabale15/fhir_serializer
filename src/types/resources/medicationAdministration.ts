import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TMedicationAdministrationStatus } from "../primitives/medicationAdministrationStatus";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IAnnotation } from "../primitives/annotation";
import { IMedicationAdministrationPerformer } from "../primitives/medicationAdministrationPerformer";
import { IDosage } from "../primitives/dosage";

interface IMedicationAdministration extends IResource<EResourceType.MEDICATION_ADMINISTRATION> {
    identifier?: IIdentifier[];
    instantiates?: string[];
    partOf?: IReference<EResourceType.MEDICATION_ADMINISTRATION | EResourceType.PROCEDURE>[];
    status: TMedicationAdministrationStatus;
    statusReason?: ICodeableConcept[];
    category?: ICodeableConcept;
    medicationCodeableConcept?: ICodeableConcept;
    medicationReference?: IReference<EResourceType.MEDICATION>;
    subject: IReference<EResourceType.PATIENT | EResourceType.GROUP>;
    context?: IReference<EResourceType.ENCOUNTER | EResourceType.EPISODE_OF_CARE>;
    supportingInformation?: IReference[];
    effectiveDateTime?: TDateTime;
    effectivePeriod?: IPeriod;
    performer?: IMedicationAdministrationPerformer[];
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference[];
    request?: IReference<EResourceType.MEDICATION_REQUEST>;
    device?: IReference[];
    note?: IAnnotation[];
    dosage?: IDosage;
    eventHistory?: IReference<EResourceType.PROVENANCE>[];
}

export type { IMedicationAdministration };

