import { EResourceType } from "../primitives/allowedResourceTypes";
import { ICodeableConcept } from "../primitives/codeableConceps";
import { IIdentifier } from "../primitives/identifier";
import { IReference } from "../primitives/reference";
import { IResource } from "../primitives/resource";
import { TCoverageStatus } from "../primitives/coverageStatus";
import { IPeriod } from "../primitives/period";
import { ICoverageClass } from "../primitives/coverageClass";
import { ICoverageCostToBeneficiary } from "../primitives/coverageCostToBeneficiary";

interface ICoverage extends IResource<EResourceType.COVERAGE> {
    identifier?: IIdentifier[];
    status: TCoverageStatus;
    type?: ICodeableConcept;
    policyHolder?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.ORGANIZATION>;
    subscriber?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON>;
    subscriberId?: string;
    beneficiary: IReference<EResourceType.PATIENT>;
    dependent?: string;
    relationship?: ICodeableConcept;
    period?: IPeriod;
    payor: IReference[];
    class?: ICoverageClass[];
    order?: number;
    network?: string;
    costToBeneficiary?: ICoverageCostToBeneficiary[];
    subrogation?: boolean;
    contract?: IReference[];
}

export type { ICoverage };


