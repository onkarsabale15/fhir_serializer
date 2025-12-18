import { ICodeableConcept } from "./codeableConceps";
import { IIdentifier } from "./identifier";

interface IDeviceVersion {
    type?: ICodeableConcept;
    component?: IIdentifier;
    value: string;
}

export type { IDeviceVersion };


