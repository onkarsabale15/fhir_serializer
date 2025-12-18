import { ICodeableConcept } from "./codeableConceps";
import { IContactPoint } from "./contactPoint";
import { IAddress } from "./address";
import { IHumanName } from "./humanName";

interface IOrganizationContact {
    purpose?: ICodeableConcept;
    name?: IHumanName;
    telecom?: IContactPoint[];
    address?: IAddress;
}

export type { IOrganizationContact };

