import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TImmunizationStatus } from "../primitives/immunizationStatus";
import { TDateTime } from "../primitives/dateTime";
import { IAnnotation } from "../primitives/annotation";
import { IQuantity } from "../primitives/quantity";
import { IImmunizationPerformer } from "../primitives/immunizationPerformer";
import { IImmunizationEducation } from "../primitives/immunizationEducation";
import { IImmunizationReaction } from "../primitives/immunizationReaction";
import { IImmunizationProtocolApplied } from "../primitives/immunizationProtocolApplied";

interface IImmunization extends IResource<EResourceType.IMMUNIZATION> {
    identifier?: IIdentifier[];
    status: TImmunizationStatus;
    statusReason?: ICodeableConcept;
    vaccineCode: ICodeableConcept;
    patient: IReference<EResourceType.PATIENT>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    occurrenceDateTime?: TDateTime;
    occurrenceString?: string;
    recorded?: TDateTime;
    primarySource?: boolean;
    reportOrigin?: ICodeableConcept;
    location?: IReference<EResourceType.LOCATION>;
    manufacturer?: IReference<EResourceType.ORGANIZATION>;
    lotNumber?: string;
    expirationDate?: string;
    site?: ICodeableConcept;
    route?: ICodeableConcept;
    doseQuantity?: IQuantity;
    performer?: IImmunizationPerformer[];
    note?: IAnnotation[];
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference[];
    isSubpotent?: boolean;
    subpotentReason?: ICodeableConcept[];
    education?: IImmunizationEducation[];
    programEligibility?: ICodeableConcept[];
    fundingSource?: ICodeableConcept;
    reaction?: IImmunizationReaction[];
    protocolApplied?: IImmunizationProtocolApplied[];
}

export type { IImmunization };

