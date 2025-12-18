import { EResourceType } from "./allowedResourceTypes";
import { TPatientLink } from "./patientLink";
import { IReference } from "./reference";

interface Ilink {
    other?: IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON>;
    type?: TPatientLink;
}

export type { Ilink }