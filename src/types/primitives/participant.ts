import { ICodeableConcept } from "./codeableConceps";
import { IPeriod } from "./period";

interface IParticipant{
    type?: ICodeableConcept[]
    period?: IPeriod
}

export type { IParticipant }