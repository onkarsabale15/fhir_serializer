import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IProcedurePerformer {
    function?: ICodeableConcept;
    actor: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.DEVICE>;
    onBehalfOf?: IReference<EResourceType.ORGANIZATION>;
}

export type { IProcedurePerformer };

