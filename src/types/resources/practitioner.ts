import { EResourceType } from "../primitives/allowedResourceTypes";
import { IIdentifier } from "../primitives/identifier";
import { IHumanName } from "../primitives/humanName";
import { IContactPoint } from "../primitives/contactPoint";
import { IAddress } from "../primitives/address";
import { IAttachment } from "../primitives/attachment";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TDate } from "../primitives/date";
import { TGender } from "../primitives/gender";
import { IPeriod } from "../primitives/period";
import { IPractitionerQualification } from "../primitives/practitionerQualification";

interface IPractitioner extends IResource<EResourceType.PRACTITIONER> {
    identifier?: IIdentifier[];
    active?: boolean;
    name?: IHumanName[];
    telecom?: IContactPoint[];
    address?: IAddress[];
    gender?: TGender;
    birthDate?: TDate;
    photo?: IAttachment[];
    qualification?: IPractitionerQualification[];
    communication?: ICodeableConcept[];
}

export type { IPractitioner };

