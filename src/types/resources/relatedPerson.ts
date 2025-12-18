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
import { IPeriod } from "../primitives/period";

interface IRelatedPerson extends IResource<EResourceType.RELATED_PERSON> {
    identifier?: IIdentifier[];
    active?: boolean;
    patient: IReference<EResourceType.PATIENT>;
    relationship?: ICodeableConcept[];
    name?: IHumanName[];
    telecom?: IContactPoint[];
    gender?: TGender;
    birthDate?: TDate;
    address?: IAddress[];
    photo?: IAttachment[];
    period?: IPeriod;
    communication?: any[];
}

export type { IRelatedPerson };

