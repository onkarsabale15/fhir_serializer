import { EResourceType } from "../primitives/allowedResourceTypes";
import { IIdentifier } from "../primitives/identifier";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IContactPoint } from "../primitives/contactPoint";
import { IAddress } from "../primitives/address";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { IOrganizationContact } from "../primitives/organizationContact";

interface IOrganization extends IResource<EResourceType.ORGANIZATION> {
    identifier?: IIdentifier[];
    active?: boolean;
    type?: ICodeableConcept[];
    name?: string;
    alias?: string[];
    telecom?: IContactPoint[];
    address?: IAddress[];
    partOf?: IReference<EResourceType.ORGANIZATION>;
    contact?: IOrganizationContact[];
    endpoint?: IReference<EResourceType.ENDPOINT>[];
}

export type { IOrganization };

