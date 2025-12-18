import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

interface IDiagnosticReportMedia {
    comment?: string;
    link: IReference<EResourceType.MEDIA>;
}

export type { IDiagnosticReportMedia };

