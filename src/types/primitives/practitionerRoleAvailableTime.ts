import { TDaysOfWeek } from "./daysOfWeek";

interface IPractitionerRoleAvailableTime {
    daysOfWeek?: TDaysOfWeek[];
    allDay?: boolean;
    availableStartTime?: string;
    availableEndTime?: string;
}

export type { IPractitionerRoleAvailableTime };

