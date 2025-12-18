import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { IQuantity } from "../primitives/quantity";
import { IRatio } from "../primitives/ratio";
import { IMedicationIngredient } from "../primitives/medicationIngredient";
import { IMedicationBatch } from "../primitives/medicationBatch";
import { TMedicationStatus } from "../primitives/medicationStatus";

interface IMedication extends IResource<EResourceType.MEDICATION> {
    identifier?: IIdentifier[];
    code?: ICodeableConcept;
    status?: TMedicationStatus;
    manufacturer?: IReference<EResourceType.ORGANIZATION>;
    form?: ICodeableConcept;
    amount?: IRatio;
    ingredient?: IMedicationIngredient[];
    batch?: IMedicationBatch;
}

export type { IMedication };

