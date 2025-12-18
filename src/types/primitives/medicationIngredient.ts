import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";
import { IRatio } from "./ratio";

interface IMedicationIngredient {
    itemCodeableConcept?: ICodeableConcept;
    itemReference?: IReference<EResourceType.SUBSTANCE | EResourceType.MEDICATION>;
    isActive?: boolean;
    strength?: IRatio;
}

export type { IMedicationIngredient };

