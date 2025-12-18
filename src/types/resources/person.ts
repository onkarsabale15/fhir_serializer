import { EResourceType } from "../primitives/allowedResourceTypes";
import { IAddress } from "../primitives/address";
import { IAttachment } from "../primitives/attachment";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IContactPoint } from "../primitives/contactPoint";
import { IHumanName } from "../primitives/humanName";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TDate } from "../primitives/date";
import { TGender } from "../primitives/gender";
import { IPersonLink } from "../primitives/personLink";

interface IPerson extends IResource<EResourceType.PERSON> {
    identifier?: IIdentifier[];
    name?: IHumanName[];
    telecom?: IContactPoint[];
    gender?: TGender;
    birthDate?: TDate;
    address?: IAddress[];
    photo?: IAttachment;
    managingOrganization?: IReference<EResourceType.ORGANIZATION>;
    active?: boolean;
    link?: IPersonLink[];
}

export type { IPerson };

