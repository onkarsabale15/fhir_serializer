enum EAppointmentParticipantStatus {
    ACCEPTED = "accepted",
    DECLINED = "declined",
    TENTATIVE = "tentative",
    NEEDS_ACTION = "needs-action"
}

type TAppointmentParticipantStatus = `${EAppointmentParticipantStatus}`;

export { EAppointmentParticipantStatus };
export type { TAppointmentParticipantStatus };

