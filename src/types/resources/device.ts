import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TDeviceStatus } from "../primitives/deviceStatus";
import { IContactPoint } from "../primitives/contactPoint";
import { IAnnotation } from "../primitives/annotation";
import { IDeviceDeviceName } from "../primitives/deviceDeviceName";
import { IDeviceSpecialization } from "../primitives/deviceSpecialization";
import { IDeviceVersion } from "../primitives/deviceVersion";
import { IDeviceProperty } from "../primitives/deviceProperty";

interface IDevice extends IResource<EResourceType.DEVICE> {
    identifier?: IIdentifier[];
    definition?: IReference;
    udiCarrier?: any[];
    status?: TDeviceStatus;
    statusReason?: ICodeableConcept[];
    distinctIdentifier?: string;
    manufacturer?: string;
    manufactureDate?: string;
    expirationDate?: string;
    lotNumber?: string;
    serialNumber?: string;
    deviceName?: IDeviceDeviceName[];
    modelNumber?: string;
    partNumber?: string;
    type?: ICodeableConcept;
    specialization?: IDeviceSpecialization[];
    version?: IDeviceVersion[];
    property?: IDeviceProperty[];
    patient?: IReference<EResourceType.PATIENT>;
    owner?: IReference<EResourceType.ORGANIZATION>;
    contact?: IContactPoint[];
    location?: IReference<EResourceType.LOCATION>;
    url?: string;
    note?: IAnnotation[];
    safety?: ICodeableConcept[];
    parent?: IReference<EResourceType.DEVICE>;
}

export type { IDevice };


