import { EResourceType } from "../primitives/allowedResourceTypes";
import { IBundleEntry } from "../primitives/bundleEntry";
import { TBundleType } from "../primitives/bundleType";
import { IBundleLink } from "../primitives/bundleLink";
import { IIdentifier } from "../primitives/identifier";
import { IResource } from "../primitives/resource";
import { TInstant } from "../primitives/instant";
import { ISignature } from "../primitives/signature";

interface IBundle extends IResource<EResourceType.BUNDLE> {
    identifier?: IIdentifier;
    type: TBundleType;
    timestamp?: TInstant;
    total?: number;
    link?: IBundleLink[];
    entry?: IBundleEntry[];
    signature?: ISignature;
}

export type { IBundle };

