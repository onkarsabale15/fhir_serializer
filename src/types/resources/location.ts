import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TLocationStatus } from "../primitives/locationStatus";
import { TLocationMode } from "../primitives/locationMode";
import { IAddress } from "../primitives/address";
import { IContactPoint } from "../primitives/contactPoint";
import { IPeriod } from "../primitives/period";
import { ICoding } from "../primitives/coding";
import { ILocationPosition } from "../primitives/locationPosition";
import { ILocationHoursOfOperation } from "../primitives/locationHoursOfOperation";

interface ILocation extends IResource<EResourceType.LOCATION> {
    identifier?: IIdentifier[];
    status?: TLocationStatus;
    operationalStatus?: ICoding;
    name?: string;
    alias?: string[];
    description?: string;
    mode?: TLocationMode;
    type?: ICodeableConcept[];
    telecom?: IContactPoint[];
    address?: IAddress;
    physicalType?: ICodeableConcept;
    position?: ILocationPosition;
    managingOrganization?: IReference<EResourceType.ORGANIZATION>;
    partOf?: IReference<EResourceType.LOCATION>;
    hoursOfOperation?: ILocationHoursOfOperation[];
    availabilityExceptions?: string;
    endpoint?: IReference<EResourceType.ENDPOINT>[];
}

export type { ILocation };

