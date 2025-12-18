import { ICoding } from "./coding";

interface ICodeableConcept<C extends string = string> {
    coding: ICoding<C>[];
    text?: string;
}

export type { ICodeableConcept }