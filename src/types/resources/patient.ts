import { IAddress } from "../primitives/address";
import { EResourceType } from "../primitives/allowedResourceTypes";
import { IAttachment } from "../primitives/attachment";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { ICommunication } from "../primitives/communication";
import { IContact } from "../primitives/contact";
import { IContactPoint } from "../primitives/contactPoint";
import { TDate } from "../primitives/date";
import { TDateTime } from "../primitives/dateTime";
import { TGender } from "../primitives/gender";
import { IHumanName } from "../primitives/humanName";
import { IIdentifier } from "../primitives/identifier";
import { Ilink } from "../primitives/link";
import { TMaritalStatus } from "../primitives/maritalStatus";
import { IMeta } from "../primitives/meta";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";

interface IPatient extends IResource<EResourceType.PATIENT> {
  identifier?: IIdentifier[];
  name:IHumanName[];
  telecom? : IContactPoint[];
  gender?: TGender;
  birthDate?: TDate;
  deceasedBoolean?: boolean;
  deceasedDateTime?: TDateTime;
  address?: IAddress[];
  maritalStatus?: ICodeableConcept<TMaritalStatus>;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  photo?: IAttachment[];
  contact?:IContact[];
  communication?: ICommunication[];
  generalPractitioner?: IReference<EResourceType.PRACTITIONER | EResourceType.ORGANIZATION>[];
  managingOrganization?: IReference<EResourceType.ORGANIZATION>;
  link?: Ilink[];
}

export type { IPatient };