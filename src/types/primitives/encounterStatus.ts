/**
 * 
Code	Display	Definition	Canonical Status
planned	Planned	The Encounter has not yet started.	~planned
arrived	Arrived	The Patient is present for the encounter, however is not currently meeting with a practitioner.	~arrived
triaged	Triaged	The patient has been assessed for the priority of their treatment based on the severity of their condition.	~accepted
in-progress	In Progress	The Encounter has begun and the patient is present / the practitioner and the patient are meeting.	~active
onleave	On Leave	The Encounter has begun, but the patient is temporarily on leave.	~suspended
finished	Finished	The Encounter has ended.	~complete
cancelled	Cancelled	The Encounter has ended before it has begun.	~abandoned
entered-in-error	Entered in Error	This instance should not have been part of this patient's medical record.	~error
unknown	Unknown	The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".	~unknown
 */

enum EEncounterStatus{
    PLANNED = "planned",
    ARRIVED = "arrived",
    TRIAGED = "triaged",
    IN_PROGRESS = "in-progress",
    ON_LEAVE = "onleave",
    FINISHED = "finished",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}

type TEncounterStatus = `${EEncounterStatus}`;

export { EEncounterStatus };
export type { TEncounterStatus }