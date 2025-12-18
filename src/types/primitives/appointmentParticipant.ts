import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";
import { TAppointmentParticipantStatus } from "./appointmentParticipantStatus";
import { TAppointmentParticipantRequired } from "./appointmentParticipantRequired";
import { IPeriod } from "./period";

interface IAppointmentParticipant {
    type?: ICodeableConcept[];
    actor?: IReference<EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.RELATED_PERSON | EResourceType.DEVICE | EResourceType.HEALTHCARE_SERVICE | EResourceType.LOCATION>;
    required?: TAppointmentParticipantRequired;
    status: TAppointmentParticipantStatus;
    period?: IPeriod;
}

export type { IAppointmentParticipant };

