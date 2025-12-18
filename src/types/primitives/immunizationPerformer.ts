import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IImmunizationPerformer {
    function?: ICodeableConcept;
    actor: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION>;
}

export type { IImmunizationPerformer };

