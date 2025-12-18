import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";
import { IAnnotation } from "./annotation";
import { ICarePlanActivityDetail } from "./carePlanActivityDetail";

interface ICarePlanActivity {
    outcomeCodeableConcept?: ICodeableConcept[];
    outcomeReference?: IReference[];
    progress?: IAnnotation[];
    reference?: IReference<EResourceType.APPOINTMENT | EResourceType.COMMUNICATION_REQUEST | EResourceType.DEVICE_REQUEST | EResourceType.MEDICATION_REQUEST | EResourceType.NUTRITION_ORDER | EResourceType.TASK | EResourceType.SERVICE_REQUEST | EResourceType.VISION_PRESCRIPTION | EResourceType.REQUEST_GROUP>;
    detail?: ICarePlanActivityDetail;
}

export type { ICarePlanActivity };

