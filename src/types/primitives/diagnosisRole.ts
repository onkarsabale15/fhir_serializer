/**
 * 
Code	Display	Definition
AD	Admission diagnosis	
DD	Discharge diagnosis	
CC	Chief complaint	
CM	Comorbidity diagnosis	
pre-op	pre-op diagnosis	
post-op	post-op diagnosis	
billing	Billing	
 */

enum EDiagnosisRole{
    ADMISSION = "AD",
    DISCHARGE = "DD",
    CHIEF_COMPLAINT = "CC",
    COMORBIDITY = "CM",
    PRE_OP = "pre-op",
    POST_OP = "post-op",
    BILLING = "billing"
}

type TDiagnosisRole = `${EDiagnosisRole}`;

export { EDiagnosisRole };
export type { TDiagnosisRole }