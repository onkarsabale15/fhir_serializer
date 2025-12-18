import { ICodeableConcept } from "./codeableConceps";
import { TDateTime } from "./dateTime";
import { TAllergyIntoleranceSeverity } from "./allergyIntoleranceSeverity";
import { IAnnotation } from "./annotation";

interface IAllergyIntoleranceReaction {
    substance?: ICodeableConcept;
    manifestation: ICodeableConcept[];
    description?: string;
    onset?: TDateTime;
    severity?: TAllergyIntoleranceSeverity;
    exposureRoute?: ICodeableConcept;
    note?: IAnnotation[];
}

export type { IAllergyIntoleranceReaction };

