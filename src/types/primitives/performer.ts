import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

// Base performer interface - can be extended or used directly
interface IPerformerBase {
    function?: ICodeableConcept;
}

// Generic performer interface with configurable actor types
interface IPerformer<T extends string = string> extends IPerformerBase {
    actor: IReference<T>;
    onBehalfOf?: IReference<EResourceType.ORGANIZATION>;
}

export type { IPerformer };
export type { IPerformerBase };

