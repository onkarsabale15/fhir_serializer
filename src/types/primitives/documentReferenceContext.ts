import { IReference } from "./reference";
import { ICodeableConcept } from "./codeableConceps";
import { IPeriod } from "./period";

interface IDocumentReferenceContext {
    encounter?: IReference[];
    event?: ICodeableConcept[];
    period?: IPeriod;
    facilityType?: ICodeableConcept;
    practiceSetting?: ICodeableConcept;
    sourcePatientInfo?: IReference;
    related?: IReference[];
}

export type { IDocumentReferenceContext };

