import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TAppointmentStatus } from "../primitives/appointmentStatus";
import { TDateTime } from "../primitives/dateTime";
import { IPeriod } from "../primitives/period";
import { IAppointmentParticipant } from "../primitives/appointmentParticipant";

interface IAppointment extends IResource<EResourceType.APPOINTMENT> {
    identifier?: IIdentifier[];
    status: TAppointmentStatus;
    cancelationReason?: ICodeableConcept;
    serviceCategory?: ICodeableConcept[];
    serviceType?: ICodeableConcept[];
    specialty?: ICodeableConcept[];
    appointmentType?: ICodeableConcept;
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference<EResourceType.CONDITION | EResourceType.PROCEDURE | EResourceType.OBSERVATION | EResourceType.IMMUNIZATION_RECOMMENDATION | EResourceType.MEDICATION_REQUEST>[];
    priority?: number;
    description?: string;
    supportingInformation?: IReference[];
    start?: string;
    end?: string;
    minutesDuration?: number;
    slot?: IReference<EResourceType.SLOT>[];
    created?: TDateTime;
    comment?: string;
    patientInstruction?: string;
    basedOn?: IReference<EResourceType.SERVICE_REQUEST>[];
    participant: IAppointmentParticipant[];
    requestedPeriod?: IPeriod[];
}

export type { IAppointment };

