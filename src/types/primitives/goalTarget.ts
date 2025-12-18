import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IRange } from "./range";
import { IPeriod } from "./period";
import { TDate } from "./date";
import { TDateTime } from "./dateTime";

interface IGoalTarget {
    measure?: ICodeableConcept;
    detailQuantity?: IQuantity;
    detailRange?: IRange;
    detailCodeableConcept?: ICodeableConcept;
    detailString?: string;
    detailBoolean?: boolean;
    detailInteger?: number;
    detailRatio?: any;
    dueDate?: TDate;
    dueDuration?: any;
}

export type { IGoalTarget };

