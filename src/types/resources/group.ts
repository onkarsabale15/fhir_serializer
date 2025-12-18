import { EResourceType } from "../primitives/allowedResourceTypes";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TGroupType } from "../primitives/groupType";
import { IGroupMember } from "../primitives/groupMember";
import { IGroupCharacteristic } from "../primitives/groupCharacteristic";

interface IGroup extends IResource<EResourceType.GROUP> {
    identifier?: IIdentifier[];
    active?: boolean;
    type: TGroupType;
    actual: boolean;
    code?: any;
    name?: string;
    quantity?: number;
    managingEntity?: IReference<EResourceType.ORGANIZATION | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.RELATED_PERSON>;
    characteristic?: IGroupCharacteristic[];
    member?: IGroupMember[];
}

export type { IGroup };


