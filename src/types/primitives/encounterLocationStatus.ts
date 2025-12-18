enum EEncounterLocationStatus {
    PLANNED = "planned",
    ACTIVE = "active",
    RESERVED = "reserved",
    COMPLETED = "completed"
}

type TEncounterLocationStatus = `${EEncounterLocationStatus}`;

export { EEncounterLocationStatus };
export type { TEncounterLocationStatus };

