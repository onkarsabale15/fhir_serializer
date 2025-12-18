/**
 * https://hl7.org/fhir/R4/valueset-marital-status.html
 */

enum EMaritalStatus {
    Annulled = "A",
    Divorced = "D",
    Interlocutory = "I",
    LegallySeparated = "L",
    Married = "M",
    Polygamous = "P",
    NeverMarried = "S",
    DomesticPartner = "T",
    Unmarried = "U",
    Widowed = "W",
    Unknown = "UNK"
}

type TMaritalStatus = `${EMaritalStatus}`;

export { EMaritalStatus };
export type { TMaritalStatus }