import { ICodeableConcept } from "./codeableConceps";
import { TLanguage } from "./languageCodes";

interface ICommunication {
    language: ICodeableConcept<TLanguage>;
    preferred?: boolean;
}

export type { ICommunication };