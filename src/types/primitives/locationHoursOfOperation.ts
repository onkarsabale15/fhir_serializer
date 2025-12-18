import { TDaysOfWeek } from "./daysOfWeek";

interface ILocationHoursOfOperation {
    daysOfWeek?: TDaysOfWeek[];
    allDay?: boolean;
    openingTime?: string;
    closingTime?: string;
}

export type { ILocationHoursOfOperation };

