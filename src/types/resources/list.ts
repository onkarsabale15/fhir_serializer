import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TListStatus } from "../primitives/listStatus";
import { TListMode } from "../primitives/listMode";
import { TDateTime } from "../primitives/dateTime";
import { IAnnotation } from "../primitives/annotation";
import { IListEntry } from "../primitives/listEntry";

interface IList extends IResource<EResourceType.LIST> {
    identifier?: IIdentifier[];
    status: TListStatus;
    mode: TListMode;
    title?: string;
    code?: ICodeableConcept;
    subject?: IReference<EResourceType.PATIENT | EResourceType.GROUP | EResourceType.DEVICE | EResourceType.LOCATION>;
    encounter?: IReference<EResourceType.ENCOUNTER>;
    date?: TDateTime;
    source?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.PATIENT | EResourceType.DEVICE>;
    orderedBy?: ICodeableConcept;
    note?: IAnnotation[];
    entry?: IListEntry[];
    emptyReason?: ICodeableConcept;
}

export type { IList };


