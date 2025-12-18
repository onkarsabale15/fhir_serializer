import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

enum EIdentityAssuranceLevel {
    LEVEL1 = "level1",
    LEVEL2 = "level2",
    LEVEL3 = "level3",
    LEVEL4 = "level4"
}

type TIdentityAssuranceLevel = `${EIdentityAssuranceLevel}`;

interface IPersonLink {
    target: IReference<EResourceType.PATIENT | EResourceType.PRACTITIONER | EResourceType.RELATED_PERSON | EResourceType.PERSON>;
    assurance?: TIdentityAssuranceLevel;
}

export { EIdentityAssuranceLevel };
export type { TIdentityAssuranceLevel };

export type { IPersonLink };

