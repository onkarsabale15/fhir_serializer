import { IReference } from "./reference";
import { ICodeableConcept } from "./codeableConceps";
import { EResourceType } from "./allowedResourceTypes";

interface IEpisodeOfCareDiagnosis {
    condition: IReference<EResourceType.CONDITION>;
    role?: any;
    rank?: number;
}

export type { IEpisodeOfCareDiagnosis };

