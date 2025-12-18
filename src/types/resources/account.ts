import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TAccountStatus } from "../primitives/accountStatus";
import { IPeriod } from "../primitives/period";
import { IMoney } from "../primitives/money";
import { IAccountCoverage } from "../primitives/accountCoverage";
import { IAccountGuarantor } from "../primitives/accountGuarantor";

interface IAccount extends IResource<EResourceType.ACCOUNT> {
    identifier?: IIdentifier[];
    status: TAccountStatus;
    type?: ICodeableConcept;
    name?: string;
    subject?: IReference[];
    servicePeriod?: IPeriod;
    coverage?: IAccountCoverage[];
    owner?: IReference<EResourceType.ORGANIZATION>;
    description?: string;
    guarantor?: IAccountGuarantor[];
    partOf?: IReference<EResourceType.ACCOUNT>;
}

export type { IAccount };


