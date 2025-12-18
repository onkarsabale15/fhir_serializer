import { IIdentifier } from "./identifier";
import { ICodeableConcept } from "./codeableConceps";
import { IPeriod } from "./period";
import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IPractitionerQualification {
    identifier?: IIdentifier[];
    code: ICodeableConcept;
    period?: IPeriod;
    issuer?: IReference<EResourceType.ORGANIZATION>;
}

export type { IPractitionerQualification };

