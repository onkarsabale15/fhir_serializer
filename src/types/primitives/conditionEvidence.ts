import { ICodeableConcept } from "./codeableConceps";
import { IReference } from "./reference";

interface IConditionEvidence {
    code?: ICodeableConcept[];
    detail?: IReference[];
}

export type { IConditionEvidence };

