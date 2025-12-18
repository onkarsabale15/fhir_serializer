import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TFlagStatus } from "../primitives/flagStatus";
import { IPeriod } from "../primitives/period";

interface IFlag extends IResource<EResourceType.FLAG> {
    identifier?: IIdentifier[];
    status: TFlagStatus;
    category?: ICodeableConcept[];
    code: ICodeableConcept;
    subject: IReference;
    period?: IPeriod;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    author?: IReference<EResourceType.DEVICE | EResourceType.ORGANIZATION | EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
}

export type { IFlag };


