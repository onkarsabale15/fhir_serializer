import { ICodeableConcept } from "./codeableConceps";
import { IQuantity } from "./quantity";

interface IDeviceProperty {
    type: ICodeableConcept;
    valueQuantity?: IQuantity[];
    valueCode?: ICodeableConcept[];
}

export type { IDeviceProperty };


