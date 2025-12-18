import { TDateTime } from "./dateTime";

interface IPeriod {
    start: TDateTime | string;
    end: TDateTime | string;
}

export type { IPeriod }