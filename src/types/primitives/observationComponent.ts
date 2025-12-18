import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { IRatio } from "./ratio";
import { ISampledData } from "./sampledData";
import { IAttachment } from "./attachment";
import { TDateTime } from "./dateTime";
import { IPeriod } from "./period";
import { IObservationReferenceRange } from "./observationReferenceRange";

interface IObservationComponent {
    code: ICodeableConcept;
    valueQuantity?: IQuantity;
    valueCodeableConcept?: ICodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueRange?: IRange;
    valueRatio?: IRatio;
    valueSampledData?: ISampledData;
    valueTime?: string;
    valueDateTime?: TDateTime;
    valuePeriod?: IPeriod;
    dataAbsentReason?: ICodeableConcept;
    interpretation?: ICodeableConcept[];
    referenceRange?: IObservationReferenceRange[];
}

export type { IObservationComponent };

