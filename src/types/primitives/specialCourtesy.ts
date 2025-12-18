/**
 * Include these codes as defined in http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy
Code	Display
EXT	extended courtesy	extended courtesy
NRM	normal courtesy	normal courtesy
PRF	professional courtesy	professional courtesy
STF	staff	Courtesies extended to the staff of the entity providing service.
VIP	very important person	very important person
Include these codes as defined in http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Code	Display
UNK	unknown	Description:A proper value is applicable, but not known.
Usage Notes: This means the actual value is not known. If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used. No properties should be included for a datatype with this property unless:
Those properties themselves directly translate to a semantic of "unknown". (E.g. a local code sent as a translation that conveys 'unknown') Those properties further qualify the nature of what is unknown. (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
 */

enum ESpecialCourtesy{
    EXTENDED = "EXT",
    NORMAL = "NRM",
    PROFESSIONAL = "PRF",
    STAFF = "STF",
    VERY_IMPORTANT_PERSON = "VIP",
    UNKNOWN = "UNK"
}

type TSpecialCourtesy = `${ESpecialCourtesy}`;

export { ESpecialCourtesy };
export type { TSpecialCourtesy }