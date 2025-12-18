import { EResourceType, TResourceType } from "./allowedResourceTypes";
import { ICodeableConcept } from "./codeableConceps";
import { TDiagnosisRole } from "./diagnosisRole";
import { IReference } from "./reference";

interface IDiagnosis{
    condition?: IReference<EResourceType.CONDITION | EResourceType.PROCEDURE>
    use?: ICodeableConcept<TDiagnosisRole>
    rank?: number
}

export type { IDiagnosis }