import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IProcedureFocalDevice {
    action?: ICodeableConcept;
    manipulated: IReference<EResourceType.DEVICE>;
}

export type { IProcedureFocalDevice };

