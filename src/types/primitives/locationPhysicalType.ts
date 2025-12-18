enum ELocationPhysicalType{
    SITE = "si",
    BUILDING = "bu",
    WING = "wi",
    WARD = "wa",
    LEVEL = "lvl",
    CORRIDOR = "co",
    ROOM = "ro",
    BED = "bd",
    VEHICLE = "ve",
    HOUSE = "ho",
    CABINET = "ca",
    ROAD = "rd",
    AREA = "area",
    JURISDICTION = "jdn"
}

type TLocationPhysicalType = `${ELocationPhysicalType}`;

export { ELocationPhysicalType };
export type { TLocationPhysicalType }