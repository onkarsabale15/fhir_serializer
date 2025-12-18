import { ICodeableConcept } from "./codeableConceps";

interface IDeviceSpecialization {
    systemType: ICodeableConcept;
    version?: string;
}

export type { IDeviceSpecialization };


