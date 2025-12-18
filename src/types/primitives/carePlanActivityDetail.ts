import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";
import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { IPeriod } from "./period";
import { TDateTime } from "./dateTime";
import { ITiming } from "./timing";
import { IAnnotation } from "./annotation";

interface ICarePlanActivityDetail {
    kind?: "Appointment" | "CommunicationRequest" | "DeviceRequest" | "MedicationRequest" | "NutritionOrder" | "Task" | "ServiceRequest" | "VisionPrescription";
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    code?: ICodeableConcept;
    reasonCode?: ICodeableConcept[];
    reasonReference?: IReference[];
    goal?: IReference[];
    status?: "not-started" | "scheduled" | "in-progress" | "on-hold" | "completed" | "cancelled" | "stopped" | "unknown" | "entered-in-error";
    statusReason?: ICodeableConcept;
    doNotPerform?: boolean;
    scheduledTiming?: ITiming;
    scheduledPeriod?: IPeriod;
    scheduledString?: string;
    location?: IReference<EResourceType.LOCATION>;
    performer?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM | EResourceType.HEALTHCARE_SERVICE | EResourceType.PATIENT | EResourceType.DEVICE | EResourceType.RELATED_PERSON>;
    productCodeableConcept?: ICodeableConcept;
    productReference?: IReference;
    dailyAmount?: IQuantity;
    quantity?: IQuantity;
    description?: string;
}

export type { ICarePlanActivityDetail };

