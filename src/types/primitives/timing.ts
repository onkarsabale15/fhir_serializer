import { ICodeableConcept } from "./codeableConceps";
import { TDateTime } from "./dateTime";
import { IPeriod } from "./period";
import { TDaysOfWeek } from "./daysOfWeek";
import { IRange } from "./range";
import { TTimeUnit } from "./timeUnit";
import { IDuration } from "./duration";

interface ITimingRepeat {
    boundsDuration?: IDuration;
    boundsRange?: IRange;
    boundsPeriod?: IPeriod;
    count?: number;
    countMax?: number;
    duration?: number;
    durationMax?: number;
    durationUnit?: TTimeUnit;
    frequency?: number;
    frequencyMax?: number;
    period?: number;
    periodMax?: number;
    periodUnit?: TTimeUnit;
    dayOfWeek?: TDaysOfWeek[];
    timeOfDay?: string[];
    when?: string[];
    offset?: number;
}

interface ITiming {
    event?: TDateTime[];
    repeat?: ITimingRepeat;
    code?: ICodeableConcept;
}

export type { ITiming };
export type { ITimingRepeat };

