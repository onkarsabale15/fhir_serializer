import { ICodeableConcept } from "./codeableConceps";
import { IIdentifier } from "./identifier";

interface ICoverageClass {
    type: ICodeableConcept;
    value: string;
    name?: string;
}

export type { ICoverageClass };


