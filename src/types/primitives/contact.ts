import { IAddress } from "./address";
import { EResourceType } from "./allowedResourceTypes";
import { ICodeableConcept } from "./codeableConceps";
import { IContactPoint } from "./contactPoint";
import { TGender } from "./gender";
import { IHumanName } from "./humanName";
import { IPeriod } from "./period";
import { IReference } from "./reference";
import { TRelationCodes } from "./relationCodes";

interface IContact {
  relationship?: ICodeableConcept<TRelationCodes>[];
  name?: IHumanName;
  telecom?: IContactPoint[];
  address?: IAddress;
  gender?: TGender;
  organization?: IReference<EResourceType.ORGANIZATION>;
  period?: IPeriod;
}

export type { IContact };