import { IPeriod } from "./period";
import { IQuantity } from "./quantity";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";
import { ICodeableConcept } from "./codeableConceps";

interface IMedicationRequestDispenseRequest {
    initialFill?: any;
    dispenseInterval?: IPeriod;
    validityPeriod?: IPeriod;
    numberOfRepeatsAllowed?: number;
    quantity?: IQuantity;
    expectedSupplyDuration?: IPeriod;
    performer?: IReference<EResourceType.ORGANIZATION>;
}

export type { IMedicationRequestDispenseRequest };

