import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IContactPoint } from "../primitives/contactPoint";
import { IAddress } from "../primitives/address";
import { IPeriod } from "../primitives/period";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { IPractitionerRoleAvailableTime } from "../primitives/practitionerRoleAvailableTime";
import { IPractitionerRoleNotAvailable } from "../primitives/practitionerRoleNotAvailable";

interface IPractitionerRole extends IResource<EResourceType.PRACTITIONER_ROLE> {
    identifier?: IIdentifier[];
    active?: boolean;
    period?: IPeriod;
    practitioner?: IReference<EResourceType.PRACTITIONER>;
    organization?: IReference<EResourceType.ORGANIZATION>;
    code?: ICodeableConcept[];
    specialty?: ICodeableConcept[];
    location?: IReference<EResourceType.LOCATION>[];
    healthcareService?: IReference<EResourceType.HEALTHCARE_SERVICE>[];
    telecom?: IContactPoint[];
    availableTime?: IPractitionerRoleAvailableTime[];
    notAvailable?: IPractitionerRoleNotAvailable[];
    availabilityExceptions?: string;
    endpoint?: IReference<EResourceType.ENDPOINT>[];
}

export type { IPractitionerRole };

