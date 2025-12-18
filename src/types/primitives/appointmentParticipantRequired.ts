enum EAppointmentParticipantRequired {
    REQUIRED = "required",
    OPTIONAL = "optional",
    INFORMATION_ONLY = "information-only"
}

type TAppointmentParticipantRequired = `${EAppointmentParticipantRequired}`;

export { EAppointmentParticipantRequired };
export type { TAppointmentParticipantRequired };

