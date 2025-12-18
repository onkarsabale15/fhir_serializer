import { ICodeableConcept } from "./codeableConceps";
import { TIdentifierUse } from "./identifierUse";
import { IPeriod } from "./period";

interface IIdentifier {
    use?: TIdentifierUse,
    type?: ICodeableConcept,
    system?: string,
    value?: string,
    period?: IPeriod
}

export type { IIdentifier }