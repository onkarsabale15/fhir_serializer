import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IConditionStage {
    summary?: ICodeableConcept;
    assessment?: IReference<EResourceType.CLINICAL_IMPRESSION | EResourceType.DIAGNOSTIC_REPORT | EResourceType.OBSERVATION>[];
    type?: ICodeableConcept;
}

export type { IConditionStage };

