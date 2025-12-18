import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IMedicationAdministrationPerformer {
    function?: ICodeableConcept;
    actor: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.DEVICE>;
}

export type { IMedicationAdministrationPerformer };

