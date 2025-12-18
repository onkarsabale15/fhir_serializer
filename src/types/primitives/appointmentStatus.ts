enum EAppointmentStatus {
    PROPOSED = "proposed",
    PENDING = "pending",
    BOOKED = "booked",
    ARRIVED = "arrived",
    FULFILLED = "fulfilled",
    CANCELLED = "cancelled",
    NOSHOW = "noshow",
    ENTERED_IN_ERROR = "entered-in-error",
    CHECKED_IN = "checked-in",
    WAITLIST = "waitlist"
}

type TAppointmentStatus = `${EAppointmentStatus}`;

export { EAppointmentStatus };
export type { TAppointmentStatus };

