/**
 * 
Code	Display	Definition
C	Emergency Contact	
E	Employer	
F	Federal Agency	
I	Insurance Company	
N	Next-of-Kin	
S	State Agency	
U	Unknown	
 */
enum ERelationCodes{
    EMERGENCY_CONTACT = "C",
    EMPLOYER = "E",
    FEDERAL_AGENCY = "F",
    INSURANCE_COMPANY = "I",
    NEXT_OF_KIN = "N",
    STATE_AGENCY = "S",
    UNKNOWN = "U"
}

type TRelationCodes = `${ERelationCodes}`;

export { ERelationCodes };
export type { TRelationCodes }