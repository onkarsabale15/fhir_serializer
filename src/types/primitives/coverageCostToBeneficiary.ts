import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";
import { IMoney } from "./money";
import { IPeriod } from "./period";

interface ICoverageCostToBeneficiaryException {
    type: ICodeableConcept;
    period?: IPeriod;
}

interface ICoverageCostToBeneficiary {
    type?: ICodeableConcept;
    valueQuantity?: IQuantity;
    valueMoney?: IMoney;
    exception?: ICoverageCostToBeneficiaryException[];
}

export type { ICoverageCostToBeneficiary };
export type { ICoverageCostToBeneficiaryException };

